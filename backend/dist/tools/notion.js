"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notionTool = void 0;
const client_1 = require("@notionhq/client");
const notion = new client_1.Client({
    auth: process.env.NOTION_API_KEY,
});
const databaseId = process.env.NOTION_DATABASE_ID;
exports.notionTool = {
    name: "notion",
    description: "Read and manage tasks in Notion",
    operations: ["listTasks"],
    async execute(operation, input = {}) {
        try {
            switch (operation) {
                case "listTasks": {
                    const response = await notion.databases.query({
                        database_id: databaseId,
                        sorts: [{ property: "Priority", direction: "descending" }],
                    });
                    const tasks = response.results.map((page) => ({
                        id: page.id,
                        name: page.properties.Name?.title?.[0]?.plain_text ?? "Untitled",
                        status: page.properties.status?.status?.name ?? page.properties.status?.select?.name ?? "Unknown",
                        priority: page.properties.Priority?.select?.name ?? "None",
                        url: page.url,
                    }));
                    return {
                        toolName: "notion",
                        operation: "listTasks",
                        success: true,
                        data: { tasks },
                    };
                }
                default:
                    throw new Error(`Unknown operation: ${operation}`);
            }
        }
        catch (err) {
            return {
                toolName: "notion",
                operation,
                success: false,
                data: {},
                error: err.message,
            };
        }
    },
};
//# sourceMappingURL=notion.js.map