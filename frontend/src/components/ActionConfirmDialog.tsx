import type { ProposedAction } from '../types/index';

interface Props {
  action: ProposedAction;
  onConfirm: () => void;
  onCancel: () => void;
  loading: boolean;
}

const operationLabels: Record<string, string> = {
  sendEmail: 'Send Email',
  createReview: 'Submit PR Review',
  createTask: 'Create Notion Task',
};

export default function ActionConfirmDialog({ action, onConfirm, onCancel, loading }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white border border-black w-full max-w-md p-6 font-mono">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Confirm Action</p>
        <p className="text-base font-bold mb-4">
          {operationLabels[action.operation] ?? action.operation}
        </p>

        <p className="text-sm text-gray-600 mb-4 border-l-2 border-black pl-3">{action.summary}</p>

        <div className="bg-gray-50 border border-gray-200 p-3 mb-6 text-xs">
          {Object.entries(action.input).map(([key, value]) => (
            <div key={key} className="flex gap-2 mb-1">
              <span className="text-gray-400 w-20 shrink-0">{key}</span>
              <span className="text-black break-all">{String(value)}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 border border-black px-4 py-2 text-sm hover:bg-gray-100 disabled:opacity-50 transition-colors"
          >
            cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 bg-black text-white px-4 py-2 text-sm hover:bg-gray-900 disabled:opacity-50 transition-colors"
          >
            {loading ? 'executing...' : 'confirm →'}
          </button>
        </div>
      </div>
    </div>
  );
}
