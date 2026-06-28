import axios from 'axios';
import type { ChatResponse } from '../types/index';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function sendMessage(
  message: string,
  tools: string[],
  conversationId?: number
): Promise<ChatResponse> {
  const response = await api.post('/chat', {
    message,
    tools,
    conversationId,
  });
  return response.data.data;
}

export async function executeAction(
  tool: string,
  operation: string,
  input: Record<string, unknown>
): Promise<{ success: boolean; data: unknown }> {
  const response = await api.post('/action', { tool, operation, input });
  return response.data;
}
