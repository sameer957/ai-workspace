"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
const registry_1 = require("../tools/registry");
async function execute(tools) {
    const results = [];
    for (const toolName of tools) {
        if (!registry_1.registry.isRegistered(toolName)) {
            results.push({
                toolName,
                operation: 'unknown',
                success: false,
                data: {},
                error: `Tool "${toolName}" is not registered`,
            });
            continue;
        }
        const tool = registry_1.registry.get(toolName);
        const defaultOperations = {
            gmail: 'listUnread',
            github: 'listPullRequests',
            notion: 'listTasks',
        };
        const operation = defaultOperations[toolName] ?? tool.operations[0];
        const result = await tool.execute(operation);
        results.push(result);
    }
    return results;
}
//# sourceMappingURL=executor.js.map