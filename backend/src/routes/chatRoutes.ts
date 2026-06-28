import { Router } from 'express';
import { chat, executeAction } from '../controller/chatController';
import { asyncWrapper } from '../middlewares/asyncWrapper';

const router = Router();

router.post('/', asyncWrapper(chat));

export default router;

import { Router as ActionRouter } from 'express';

export const actionRouter = ActionRouter();
actionRouter.post('/', asyncWrapper(executeAction));
