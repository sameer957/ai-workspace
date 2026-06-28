import { AgentResponse } from "../utils/types";
export declare function createConversation(title: string): Promise<{
    id: number;
    title: string | null;
    createdAt: Date;
}>;
export declare function saveUserMessage(convoId: number, body: string): Promise<{
    id: number;
    body: string;
    createdAt: Date;
    role: import("../generated/prisma/enums").Role;
    convoId: number;
}>;
export declare function saveAssistantMessage(convoId: number, body: string, agentResponse: AgentResponse): Promise<{
    id: number;
    body: string;
    createdAt: Date;
    role: import("../generated/prisma/enums").Role;
    convoId: number;
}>;
export declare function getConversations(): Promise<{
    id: number;
    title: string | null;
    createdAt: Date;
}[]>;
export declare function getMessages(convoId: number): Promise<({
    toolUsed: {
        id: number;
        error: string | null;
        operation: string;
        success: boolean;
        result: import("@prisma/client/runtime/client").JsonValue | null;
        createdAt: Date;
        name: string;
        messageId: number;
    }[];
} & {
    id: number;
    body: string;
    createdAt: Date;
    role: import("../generated/prisma/enums").Role;
    convoId: number;
})[]>;
//# sourceMappingURL=chatService.d.ts.map