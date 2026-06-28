"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registry = void 0;
class ToolRegistry {
    constructor() {
        this.tools = new Map();
    }
    register(tool) {
        this.tools.set(tool.name, tool);
    }
    get(name) {
        const tool = this.tools.get(name);
        if (!tool)
            throw new Error(`Tool "${name}" is not registered`);
        return tool;
    }
    isRegistered(name) {
        return this.tools.has(name);
    }
}
exports.registry = new ToolRegistry();
//# sourceMappingURL=registry.js.map