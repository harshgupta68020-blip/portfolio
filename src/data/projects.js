export const projectsData = [
  {
    id: 'intellilight',
    name: 'IntelliLight',
    featured: true,
    summary: 'Reinforcement Learning adaptive traffic signal control system optimizing urban flow.',
    problem: 'Static traffic signal timing wastes over 28% of intersection throughput during peak congestion hours.',
    solution: 'Engineered a Deep Q-Network (DQN) agent operating in SUMO simulations to adjust phase timing dynamically.',
    rewardDesign: 'Multi-objective reward function balancing cumulative queue length penalties and vehicle delay variance.',
    impact: '-34% average wait time vs fixed-time baselines across high-density 4-way intersection topologies.',
    learnings: [
      'State space representation design directly dictates convergence speed in continuous environments.',
      'Sim-to-real gap requires stochastic noise injection during training to maintain policy robustness.',
      'Action masking is essential to guarantee safety constraints and prevent deadlocks.'
    ],
    techStack: ['Python', 'PyTorch', 'Reinforcement Learning', 'SUMO Simulator', 'Docker'],
    diagramNodes: ['SUMO Engine', 'Environment State', 'RL Agent', 'Reward Function', 'Traffic Signal Actuator'],
    links: { source: 'https://github.com', details: '#' },
  },
  {
    id: 'mcp-assistant',
    name: 'MCP Assistant Engine',
    featured: false,
    summary: 'Standardized Model Context Protocol orchestration runtime for LLM tool binding.',
    problem: 'Rigid LLM API function calling formats lead to high latency and fragmented tool orchestration across agents.',
    solution: 'Built a light-weight JSON-RPC protocol router executing sandboxed local system commands for LLMs.',
    challenges: [
      'Ensuring strict tool schema validation and graceful error recovery under malformed LLM outputs.',
      'Sub-50ms tool execution pipeline overhead with async streaming responses.'
    ],
    impact: '<45ms RPC call overhead with 99.8% tool invocation accuracy across 50+ schema definitions.',
    learnings: [
      'Strict schema validation upfront prevents cascading agent execution failures.',
      'Bi-directional streaming is critical for user-perceived responsiveness during multi-step tool calls.'
    ],
    techStack: ['Node.js', 'TypeScript', 'MCP Protocol', 'LLMs', 'JSON-RPC'],
    diagramNodes: ['User Input', 'LLM Provider', 'MCP Router', 'Tool Executor', 'Response Stream'],
    links: { source: 'https://github.com', details: '#' },
  },
  {
    id: 'future',
    name: 'Future Exploration',
    featured: false,
    summary: 'Investigating lightweight neural search and agentic consensus.',
    direction: 'Exploring vector indexing primitives and consensus protocols for distributed autonomous AI agents.',
    techStack: ['Rust', 'Vector Search', 'Raft Consensus', 'Wasm'],
    diagramNodes: ['Agent Nodes', 'Consensus Engine', 'Vector Index', 'Neural Query'],
    links: {},
  },
];
