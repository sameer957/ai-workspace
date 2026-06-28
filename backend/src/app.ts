import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { ErrorHandler } from './middlewares/errorHandler';
import dotenv from 'dotenv';
import googleAuthRouter from './routes/googleAuthRoutes';
import { registry } from './tools/registry';
import { gmailTool } from './tools/gmail';
import chatRouter, { actionRouter } from './routes/chatRoutes';
import { githubTool } from './tools/github';
import { notionTool } from './tools/notion';

const app: Application = express();

dotenv.config();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

registry.register(notionTool);
registry.register(githubTool);
registry.register(gmailTool);
app.use('/auth', googleAuthRouter);
app.use('/chat', chatRouter);
app.use('/action', actionRouter);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, error: 'Invalid route' });
});

app.use(ErrorHandler);

export default app;
