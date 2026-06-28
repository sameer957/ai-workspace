export type Role = 'USER' | 'ASSISTANT';

export interface ExecutionLog {
  toolName: string;
  operation: string;
  success: boolean;
  error?: string;
}

export interface Message {
  role: Role;
  body: string;
  executionLog?: ExecutionLog[];
}

export interface ChatResponse {
  conversationId: number;
  answer: string;
  executionLog: ExecutionLog[];
}

export interface ProposedAction {
  tool: string;
  operation: string;
  input: Record<string, unknown>;
  summary: string;
}

export interface Message {
  role: Role;
  body: string;
  executionLog?: ExecutionLog[];
  proposedAction?: ProposedAction | null;
}

export interface ChatResponse {
  conversationId: number;
  answer: string;
  executionLog: ExecutionLog[];
  proposedAction?: ProposedAction | null;
}
