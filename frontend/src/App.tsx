import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import ActionConfirmDialog from './components/ActionConfirmDialog';
import { sendMessage, executeAction } from './api/chat';
import type { Message, ProposedAction } from './types/index';

export default function App() {
  const [selectedTools, setSelectedTools] = useState<string[]>(['gmail']);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState<number | undefined>();
  const [pendingAction, setPendingAction] = useState<ProposedAction | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  const handleSend = async (text: string) => {
    if (selectedTools.length === 0) {
      alert('Please select at least one tool.');
      return;
    }

    setMessages((prev) => [...prev, { role: 'USER', body: text }]);
    setLoading(true);

    try {
      const response = await sendMessage(text, selectedTools, conversationId);
      setConversationId(response.conversationId);
      setMessages((prev) => [
        ...prev,
        {
          role: 'ASSISTANT',
          body: response.answer,
          executionLog: response.executionLog,
          proposedAction: response.proposedAction,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'ASSISTANT', body: 'Something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleActionConfirm = (msgIndex: number) => {
    const msg = messages[msgIndex];
    if (msg.proposedAction) setPendingAction(msg.proposedAction);
  };

  const handleExecuteAction = async () => {
    if (!pendingAction) return;
    setActionLoading(true);

    try {
      await executeAction(pendingAction.tool, pendingAction.operation, pendingAction.input);

      setMessages((prev) => [
        ...prev,
        {
          role: 'ASSISTANT',
          body: `✓ Done — ${pendingAction.summary}`,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'ASSISTANT', body: 'Action failed. Please try again.' },
      ]);
    } finally {
      setActionLoading(false);
      setPendingAction(null);
    }
  };

  return (
    <div className="flex h-screen bg-white text-black font-mono">
      <Sidebar selectedTools={selectedTools} onToggleTool={toggleTool} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="px-6 py-4 border-b border-black">
          <h1 className="text-base font-bold tracking-tight">WORKPILOT</h1>
          <p className="text-xs text-gray-500 mt-0.5">
            {selectedTools.length === 0 ? 'no tools selected' : `→ ${selectedTools.join(', ')}`}
          </p>
        </div>

        <ChatWindow messages={messages} onActionConfirm={handleActionConfirm} />

        {loading && (
          <div className="px-6 py-2 text-xs text-gray-400 border-t border-gray-100">
            thinking...
          </div>
        )}

        <MessageInput onSend={handleSend} loading={loading} />
      </div>

      {pendingAction && (
        <ActionConfirmDialog
          action={pendingAction}
          onConfirm={handleExecuteAction}
          onCancel={() => setPendingAction(null)}
          loading={actionLoading}
        />
      )}
    </div>
  );
}
