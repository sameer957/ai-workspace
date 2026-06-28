import { prisma } from '../config/prisma';
import { AgentResponse } from '../utils/types';

export async function createConversation(title: string) {
  return await prisma.conversations.create({
    data: { title },
  });
}

export async function saveUserMessage(convoId: number, body: string) {
  return await prisma.messages.create({
    data: {
      convoId,
      role: 'USER',
      body,
    },
  });
}

export async function saveAssistantMessage(
  convoId: number,
  body: string,
  agentResponse: AgentResponse
) {
  const message = await prisma.messages.create({
    data: {
      convoId,
      role: 'ASSISTANT',
      body,
    },
  });

  if (agentResponse.executionLog.length > 0) {
    await prisma.tools.createMany({
      data: agentResponse.executionLog.map((log) => ({
        messageId: message.id,
        name: log.toolName,
        operation: log.operation,
        success: log.success,
        result: {},
        error: log.error ?? null,
      })),
    });
  }

  return message;
}
