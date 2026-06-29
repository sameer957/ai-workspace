import { Tool } from '../utils/types';
declare class ToolRegistry {
    private tools;
    register(tool: Tool): void;
    get(name: string): Tool;
    isRegistered(name: string): boolean;
}
export declare const registry: ToolRegistry;
export {};
//# sourceMappingURL=registry.d.ts.map