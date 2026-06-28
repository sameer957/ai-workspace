import { useState } from 'react';

interface Props {
  onSend: (message: string) => void;
  loading: boolean;
}

export default function MessageInput({ onSend, loading }: Props) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (!value.trim() || loading) return;
    onSend(value.trim());
    setValue('');
  };

  return (
    <div className="flex gap-0 border-t border-black">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="ask anything..."
        disabled={loading}
        className="flex-1 bg-white text-black px-6 py-4 text-sm outline-none placeholder-gray-300 disabled:opacity-50 font-mono"
      />
      <button
        onClick={handleSend}
        disabled={loading || !value.trim()}
        className="bg-black text-white px-6 py-4 text-sm font-mono hover:bg-gray-900 disabled:opacity-30 transition-colors border-l border-black"
      >
        {loading ? '...' : 'send →'}
      </button>
    </div>
  );
}
