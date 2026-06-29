"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeAction = exports.chat = void 0;
const agent_1 = require("../ai/agent");
const chatService_1 = require("../services/chatService");
const registry_1 = require("../tools/registry");
const chat = async (req, res) => {
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
        const convo = await (0, chatService_1.createConversation)(message);
        convoId = convo.id;
    }
    await (0, chatService_1.saveUserMessage)(convoId, message);
    const agentResponse = await (0, agent_1.runAgent)(message, tools);
    await (0, chatService_1.saveAssistantMessage)(convoId, agentResponse.answer, agentResponse);
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
exports.chat = chat;
const executeAction = async (req, res) => {
    const { tool, operation, input } = req.body;
    if (!tool || !operation) {
        res.status(400).json({ success: false, message: 'tool and operation are required' });
        return;
    }
    if (!registry_1.registry.isRegistered(tool)) {
        res.status(400).json({ success: false, message: `Tool "${tool}" is not registered` });
        return;
    }
    const toolInstance = registry_1.registry.get(tool);
    const result = await toolInstance.execute(operation, input ?? {});
    res.status(200).json({ success: true, data: result });
};
exports.executeAction = executeAction;
//# sourceMappingURL=chatController.js.map