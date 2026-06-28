import { Client } from '@notionhq/client';
import { Tool, ToolResult } from '../utils/types';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

export const notionTool: Tool = {
  name: 'notion',
  description: 'Read and manage tasks in Notion',
  operations: ['listTasks'],

  async execute(operation: string, input: Record<string, unknown> = {}): Promise<ToolResult> {
    try {
      switch (operation) {
        case 'listTasks': {
          const response = await notion.databases.query({
            database_id: databaseId,
            sorts: [{ property: 'Priority', direction: 'descending' }],
          });

          const tasks = response.results.map((page: any) => ({
            id: page.id,
            name: page.properties.Name?.title?.[0]?.plain_text ?? 'Untitled',
            status:
              page.properties.status?.status?.name ??
              page.properties.status?.select?.name ??
              'Unknown',
            priority: page.properties.Priority?.select?.name ?? 'None',
            url: page.url,
          }));

          return {
            toolName: 'notion',
            operation: 'listTasks',
            success: true,
            data: { tasks },
          };
        }

        default:
          throw new Error(`Unknown operation: ${operation}`);
      }
    } catch (err) {
      return {
        toolName: 'notion',
        operation,
        success: false,
        data: {},
        error: (err as Error).message,
      };
    }
  },
};
