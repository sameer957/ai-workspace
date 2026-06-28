import { Request, Response } from 'express';
import { runAgent } from '../ai/agent';
import { createConversation, saveUserMessage, saveAssistantMessage } from '../services/chatService';

import { registry } from '../tools/registry';

export const chat = async (req: Request, res: Response): Promise<void> => {
  const { message, tools, conversationId } = req.body;

  if (!message || !tools || !Array.isArray(tools)) {
    res.status(400).json({
      success: false,
      message: 'message and tools[] are required',
    });
    return;
  }

  let convoId = conversationId;
  if (!convoId) {
    const convo = await createConversation(message);
    convoId = convo.id;
  }

  await saveUserMessage(convoId, message);

  const agentResponse = await runAgent(message, tools);

  await saveAssistantMessage(convoId, agentResponse.answer, agentResponse);

  res.status(200).json({
    success: true,
    data: {
      conversationId: convoId,
      answer: agentResponse.answer,
      executionLog: agentResponse.executionLog,
      proposedAction: agentResponse.proposedAction ?? null,
    },
  });
};

export const executeAction = async (req: Request, res: Response): Promise<void> => {
  const { tool, operation, input } = req.body;

  if (!tool || !operation) {
    res.status(400).json({ success: false, message: 'tool and operation are required' });
    return;
  }

  if (!registry.isRegistered(tool)) {
    res.status(400).json({ success: false, message: `Tool "${tool}" is not registered` });
    return;
  }

  const toolInstance = registry.get(tool);
  const result = await toolInstance.execute(operation, input ?? {});

  res.status(200).json({ success: true, data: result });
};
