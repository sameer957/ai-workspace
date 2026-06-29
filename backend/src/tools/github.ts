import { Octokit } from '@octokit/rest';
import { Tool, ToolResult } from '../utils/types';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const username = process.env.GITHUB_USERNAME!;

export const githubTool: Tool = {
  name: 'github',
  description: 'Read and manage GitHub pull requests and issues',
  operations: ['listPullRequests', 'listIssues'],

  async execute(operation: string, input: Record<string, unknown> = {}): Promise<ToolResult> {
    try {
      switch (operation) {
        case 'listPullRequests': {
          const response = await octokit.search.issuesAndPullRequests({
            q: `is:pr is:open author:${username}`,
            per_page: 10,
          });

          const prs = response.data.items.map((pr) => ({
            id: pr.number,
            title: pr.title,
            repo: pr.repository_url.split('/').slice(-1)[0],
            state: pr.state,
            created_at: pr.created_at,
            url: pr.html_url,
          }));

          return {
            toolName: 'github',
            operation: 'listPullRequests',
            success: true,
            data: { prs },
          };
        }

        case 'listIssues': {
          const response = await octokit.search.issuesAndPullRequests({
            q: `is:issue is:open assignee:${username}`,
            per_page: 10,
          });

          const issues = response.data.items.map((issue) => ({
            id: issue.number,
            title: issue.title,
            repo: issue.repository_url.split('/').slice(-1)[0],
            state: issue.state,
            created_at: issue.created_at,
            url: issue.html_url,
          }));

          return {
            toolName: 'github',
            operation: 'listIssues',
            success: true,
            data: { issues },
          };
        }

        default:
          throw new Error(`Unknown operation: ${operation}`);
      }
    } catch (err) {
      return {
        toolName: 'github',
        operation,
        success: false,
        data: {},
        error: (err as Error).message,
      };
    }
  },
};
