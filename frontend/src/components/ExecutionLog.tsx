interface Log {
  toolName: string;
  operation: string;
  success: boolean;
  error?: string;
}

export default function ExecutionLog({ logs }: { logs: Log[] }) {
  return (
    <div className="flex flex-col gap-1 mt-2 px-1">
      {logs.map((log, i) => (
        <div key={i} className="flex items-center gap-2 text-xs text-gray-400 font-mono">
          <span className={log.success ? 'text-black' : 'text-gray-300'}>
            {log.success ? '✓' : '✗'}
          </span>
          <span className="capitalize">{log.toolName}</span>
          <span className="text-gray-300">·</span>
          <span className="text-gray-400">{log.operation}</span>
          {log.error && <span className="text-gray-400">— {log.error}</span>}
        </div>
      ))}
    </div>
  );
}
