import { Tool } from '../utils/types';

class ToolRegistry {
  private tools: Map<string, Tool> = new Map();

  register(tool: Tool): void {
    this.tools.set(tool.name, tool);
  }

  get(name: string): Tool {
    const tool = this.tools.get(name);

    if (!tool) throw new Error(`Tool "${name}" is not registered`);
    return tool;
  }

  isRegistered(name: string): boolean {
    return this.tools.has(name);
  }
}

export const registry = new ToolRegistry();
