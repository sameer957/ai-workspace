import { registry } from '../tools/registry';
import { ToolResult } from '../utils/types';

export async function execute(tools: string[]): Promise<ToolResult[]> {
  const results: ToolResult[] = [];

  for (const toolName of tools) {
    if (!registry.isRegistered(toolName)) {
      results.push({
        toolName,
        operation: 'unknown',
        success: false,
        data: {},
        error: `Tool "${toolName}" is not registered`,
      });
      continue;
    }

    const tool = registry.get(toolName);

    const defaultOperations: Record<string, string> = {
      gmail: 'listUnread',
      github: 'listPullRequests',
      notion: 'listTasks',
    };

    const operation = defaultOperations[toolName] ?? tool.operations[0];
    const result = await tool.execute(operation);
    results.push(result);
  }

  return results;
}
