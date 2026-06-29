export interface Conversations {
    title: string;
    messages: Messages[];
}
export interface Messages {
    role: Role;
    body: string;
    toolUsed: Tools;
}
export interface Tools {
    name: string;
    messageId: number;
    success: boolean;
}
export type Role = 'USER' | 'ASSISTANT';
export interface Tool {
    name: string;
    description: string;
    operations: string[];
    execute(operation: string, input?: Record<string, unknown>): Promise<ToolResult>;
}
export interface ToolResult {
    toolName: string;
    operation: string;
    success: boolean;
    data: Record<string, unknown>;
    error?: string;
}
export interface Tool {
    name: string;
    description: string;
    operations: string[];
    execute(operation: string, input?: Record<string, unknown>): Promise<ToolResult>;
}
export interface ToolResult {
    toolName: string;
    operation: string;
    success: boolean;
    data: Record<string, unknown>;
    error?: string;
}
export interface AgentResponse {
    answer: string;
    executionLog: {
        toolName: string;
        operation: string;
        success: boolean;
        error?: string;
    }[];
    proposedAction?: ProposedAction | null;
}
export interface ProposedAction {
    tool: string;
    operation: string;
    input: Record<string, unknown>;
    summary: string;
}
//# sourceMappingURL=types.d.ts.map