import { Request, Response } from 'express';
import { oauth2Client } from '../config/google';

export const googleAuth = (_req: Request, res: Response): void => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/gmail.readonly',
      'https://www.googleapis.com/auth/gmail.send',
    ],
  });

  res.redirect(url);
};

export const googleCallback = async (req: Request, res: Response): Promise<void> => {
  const code = req.query.code as string;

  if (!code) {
    res.status(400).json({ success: false, message: 'No code received from Google' });
    return;
  }

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  res.json({
    success: true,
    message: 'Gmail connected. Check terminal for tokens.',
  });
};
