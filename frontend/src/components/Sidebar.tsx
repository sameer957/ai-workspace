const TOOLS = [
  { id: 'gmail', label: 'Gmail', icon: '✉' },
  { id: 'github', label: 'GitHub', icon: '◈' },
  { id: 'notion', label: 'Notion', icon: '▣' },
];

interface Props {
  selectedTools: string[];
  onToggleTool: (tool: string) => void;
}

export default function Sidebar({ selectedTools, onToggleTool }: Props) {
  const allSelected = selectedTools.length === TOOLS.length;

  const handleAll = () => {
    if (allSelected) {
      TOOLS.forEach((t) => {
        if (selectedTools.includes(t.id)) onToggleTool(t.id);
      });
    } else {
      TOOLS.forEach((t) => {
        if (!selectedTools.includes(t.id)) onToggleTool(t.id);
      });
    }
  };

  return (
    <div className="w-48 border-r border-black flex flex-col p-4 gap-1 bg-white">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Tools</p>

      <button
        onClick={handleAll}
        className={`flex items-center gap-2 px-3 py-2 text-sm transition-all border ${
          allSelected
            ? 'bg-black text-white border-black'
            : 'text-black border-transparent hover:border-black'
        }`}
      >
        ⊞ All
      </button>

      {TOOLS.map((tool) => (
        <button
          key={tool.id}
          onClick={() => onToggleTool(tool.id)}
          className={`flex items-center gap-2 px-3 py-2 text-sm transition-all border ${
            selectedTools.includes(tool.id)
              ? 'bg-black text-white border-black'
              : 'text-black border-transparent hover:border-black'
          }`}
        >
          <span>{tool.icon}</span> {tool.label}
        </button>
      ))}

      <div className="mt-auto pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-400">workpilot v1</p>
      </div>
    </div>
  );
}
