import type { Message } from '../types/index';
import ExecutionLog from './ExecutionLog';

interface Props {
  messages: Message[];
  onActionConfirm: (msgIndex: number) => void;
}

export default function ChatWindow({ messages, onActionConfirm }: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
      {messages.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-2">
          <p className="text-2xl font-bold tracking-tight">WORKPILOT</p>
          <p className="text-sm text-gray-400">select tools. ask anything.</p>
        </div>
      )}

      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex flex-col ${msg.role === 'USER' ? 'items-end' : 'items-start'}`}
        >
          <p className="text-xs text-gray-400 mb-1 px-1">
            {msg.role === 'USER' ? 'you' : 'workpilot'}
          </p>

          <div
            className={`px-4 py-3 text-sm whitespace-pre-wrap max-w-2xl border ${
              msg.role === 'USER'
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-black'
            }`}
          >
            {msg.body}
          </div>

          {msg.role === 'ASSISTANT' && msg.executionLog && msg.executionLog.length > 0 && (
            <ExecutionLog logs={msg.executionLog} />
          )}

          {msg.role === 'ASSISTANT' && msg.proposedAction && (
            <div className="mt-2 border border-black p-3 max-w-2xl w-full">
              <p className="text-xs text-gray-400 mb-1">proposed action</p>
              <p className="text-sm font-bold mb-2">{msg.proposedAction.summary}</p>
              <button
                onClick={() => onActionConfirm(i)}
                className="text-xs bg-black text-white px-3 py-1.5 hover:bg-gray-900 transition-colors"
              >
                review & confirm →
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
