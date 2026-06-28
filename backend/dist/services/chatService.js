"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConversation = createConversation;
exports.saveUserMessage = saveUserMessage;
exports.saveAssistantMessage = saveAssistantMessage;
exports.getConversations = getConversations;
exports.getMessages = getMessages;
const prisma_1 = require("../config/prisma");
async function createConversation(title) {
    return await prisma_1.prisma.conversations.create({
        data: { title },
    });
}
async function saveUserMessage(convoId, body) {
    return await prisma_1.prisma.messages.create({
        data: {
            convoId,
            role: "USER",
            body,
        },
    });
}
async function saveAssistantMessage(convoId, body, agentResponse) {
    const message = await prisma_1.prisma.messages.create({
        data: {
            convoId,
            role: "ASSISTANT",
            body,
        },
    });
    if (agentResponse.executionLog.length > 0) {
        await prisma_1.prisma.tools.createMany({
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
async function getConversations() {
    return await prisma_1.prisma.conversations.findMany({
        orderBy: { createdAt: "desc" },
    });
}
async function getMessages(convoId) {
    return await prisma_1.prisma.messages.findMany({
        where: { convoId },
        include: { toolUsed: true },
        orderBy: { createdAt: "asc" },
    });
}
//# sourceMappingURL=chatService.js.map