'use client';

export default function ProjectDiagram({ nodes = [], type = 'default' }) {
  return (
    <div className="w-full bg-[#111111]/80 border border-white/10 rounded-[20px] p-6 my-6 overflow-x-auto group/diag transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-[#3B82F6]/5">
      <div className="min-w-[640px] flex items-center justify-between relative py-4 px-2">
        {/* Animated Connector Flow Line */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          preserveAspectRatio="none"
        >
          <line
            x1="10%"
            y1="50%"
            x2="90%"
            y2="50%"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          <line
            x1="10%"
            y1="50%"
            x2="90%"
            y2="50%"
            stroke="rgba(59, 130, 246, 0.6)"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="animate-[dash_12s_linear_infinite]"
          />
        </svg>

        {/* Nodes */}
        {nodes.map((nodeLabel, idx) => (
          <div
            key={idx}
            className="relative z-10 bg-[#18181B] border border-white/10 hover:border-[#3B82F6]/50 rounded-[16px] px-4 py-3 shadow-md flex flex-col items-center justify-center transition-all duration-300 group-hover/diag:scale-[1.02]"
          >
            <span className="text-[10px] font-mono text-[#3B82F6] opacity-80 uppercase tracking-wider mb-1">
              0{idx + 1}
            </span>
            <span className="text-xs md:text-sm font-medium text-white text-center whitespace-nowrap">
              {nodeLabel}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
}
