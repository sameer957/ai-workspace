import { google } from 'googleapis';
import { oauth2Client } from '../config/google';
import { Tool, ToolResult } from '../utils/types';

oauth2Client.setCredentials({
  access_token: process.env.GOOGLE_ACCESS_TOKEN,
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

export const gmailTool: Tool = {
  name: 'gmail',
  description: 'Read and send emails via Gmail',
  operations: ['listUnread', 'getLatest', 'sendEmail'],

  async execute(operation: string, input: Record<string, unknown> = {}): Promise<ToolResult> {
    try {
      switch (operation) {
        case 'listUnread': {
          const response = await gmail.users.messages.list({
            userId: 'me',
            q: 'is:unread',
            maxResults: 5,
          });

          const messages = response.data.messages || [];

          const emails = await Promise.all(
            messages.map(async (msg) => {
              const detail = await gmail.users.messages.get({
                userId: 'me',
                id: msg.id!,
                format: 'metadata',
                metadataHeaders: ['Subject', 'From'],
              });

              const headers = detail.data.payload?.headers || [];
              const subject = headers.find((h) => h.name === 'Subject')?.value || 'No Subject';
              const from = headers.find((h) => h.name === 'From')?.value || 'Unknown';
              const snippet = detail.data.snippet || '';

              return { id: msg.id, from, subject, snippet };
            })
          );

          return {
            toolName: 'gmail',
            operation: 'listUnread',
            success: true,
            data: { emails },
          };
        }

        case 'getLatest': {
          const response = await gmail.users.messages.list({
            userId: 'me',
            maxResults: 1,
          });

          const messages = response.data.messages || [];
          if (messages.length === 0) {
            return {
              toolName: 'gmail',
              operation: 'getLatest',
              success: true,
              data: { email: null },
            };
          }

          const detail = await gmail.users.messages.get({
            userId: 'me',
            id: messages[0].id!,
            format: 'metadata',
            metadataHeaders: ['Subject', 'From', 'Date'],
          });

          const headers = detail.data.payload?.headers || [];
          const subject = headers.find((h) => h.name === 'Subject')?.value || 'No Subject';
          const from = headers.find((h) => h.name === 'From')?.value || 'Unknown';
          const date = headers.find((h) => h.name === 'Date')?.value || '';
          const snippet = detail.data.snippet || '';

          return {
            toolName: 'gmail',
            operation: 'getLatest',
            success: true,
            data: { email: { id: messages[0].id, from, subject, snippet, date } },
          };
        }

        case 'sendEmail': {
          const { to, subject, body } = input as {
            to: string;
            subject: string;
            body: string;
          };

          if (!to || !subject || !body) {
            throw new Error('to, subject and body are required to send email');
          }

          const emailLines = [
            `To: ${to}`,
            `Subject: ${subject}`,
            `Content-Type: text/plain; charset=utf-8`,
            ``,
            body,
          ];

          const email = emailLines.join('\n');
          const encodedEmail = Buffer.from(email)
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

          await gmail.users.messages.send({
            userId: 'me',
            requestBody: { raw: encodedEmail },
          });

          return {
            toolName: 'gmail',
            operation: 'sendEmail',
            success: true,
            data: { message: `Email sent to ${to}` },
          };
        }

        default:
          throw new Error(`Unknown operation: ${operation}`);
      }
    } catch (err) {
      return {
        toolName: 'gmail',
        operation,
        success: false,
        data: {},
        error: (err as Error).message,
      };
    }
  },
};




