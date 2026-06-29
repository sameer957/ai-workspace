"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionRouter = void 0;
const express_1 = require("express");
const chatController_1 = require("../controller/chatController");
const asyncWrapper_1 = require("../middlewares/asyncWrapper");
const router = (0, express_1.Router)();
router.post('/', (0, asyncWrapper_1.asyncWrapper)(chatController_1.chat));
exports.default = router;
const express_2 = require("express");
exports.actionRouter = (0, express_2.Router)();
exports.actionRouter.post('/', (0, asyncWrapper_1.asyncWrapper)(chatController_1.executeAction));
//# sourceMappingURL=chatRoutes.js.map