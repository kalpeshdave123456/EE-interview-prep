const questionBank = [
  {
    category: "Verilog",
    difficulty: "Easy",
    question: "What is the difference between blocking and non-blocking assignments in Verilog?",
    answer: "Blocking assignments (`=`) execute in order within the procedural block and are typically used for combinational logic. Non-blocking assignments (`<=`) schedule updates for the end of the current time step and are preferred for clocked sequential logic to avoid race conditions.",
    tags: ["RTL", "syntax", "sequential"]
  },
  {
    category: "Verilog",
    difficulty: "Medium",
    question: "Why is it dangerous to mix blocking and non-blocking assignments in the same always block?",
    answer: "Mixing them can create simulation-synthesis mismatches and race-like behavior. In clocked logic, non-blocking assignment models register updates consistently, while blocking can cause intermediate values to propagate unexpectedly in simulation.",
    tags: ["race", "coding style"]
  },
  {
    category: "Verilog",
    difficulty: "Medium",
    question: "How would you code a synchronous reset D flip-flop?",
    answer: "Use an edge-triggered always block such as `always @(posedge clk)` and inside it test reset first: if reset is high, assign the reset value, else capture `d` into `q` using non-blocking assignments.",
    tags: ["flip-flop", "reset"]
  },
  {
    category: "Verilog",
    difficulty: "Hard",
    question: "What causes latch inference in RTL code and how do you avoid it?",
    answer: "A latch is inferred when a combinational always block does not assign an output in all possible input conditions. Avoid it by giving default assignments and ensuring complete assignment coverage in every branch of combinational logic.",
    tags: ["latch", "combinational"]
  },
  {
    category: "Verilog",
    difficulty: "Hard",
    question: "Explain the difference between simulation delta cycles and real clock cycles.",
    answer: "Delta cycles are zero-time simulation events used to order updates and resolve dependencies within the same simulation time. Real clock cycles correspond to actual hardware time between active clock edges.",
    tags: ["simulation", "timing"]
  },
  {
    category: "Digital Logic",
    difficulty: "Easy",
    question: "What is the difference between combinational and sequential logic?",
    answer: "Combinational logic output depends only on present inputs. Sequential logic output depends on present inputs plus stored past state, typically implemented using flip-flops or latches.",
    tags: ["fundamentals"]
  },
  {
    category: "Digital Logic",
    difficulty: "Easy",
    question: "What is setup time and hold time?",
    answer: "Setup time is the minimum time before the clock edge during which data must remain stable. Hold time is the minimum time after the clock edge during which data must remain stable for correct capture.",
    tags: ["timing"]
  },
  {
    category: "Digital Logic",
    difficulty: "Medium",
    question: "Why can a Mealy FSM react faster than a Moore FSM?",
    answer: "A Mealy FSM output can change immediately with input changes because output depends on state and input. A Moore FSM output depends only on state, so output generally changes after a state transition.",
    tags: ["FSM"]
  },
  {
    category: "Digital Logic",
    difficulty: "Medium",
    question: "How do metastability issues arise in digital systems?",
    answer: "Metastability occurs when an asynchronous input violates setup or hold requirements of a flip-flop. The output may take an unpredictable time to settle, so synchronizers are used to reduce failure probability.",
    tags: ["CDC", "metastability"]
  },
  {
    category: "Digital Logic",
    difficulty: "Hard",
    question: "How would you detect and correct a one-hot FSM bug?",
    answer: "Review state encoding, check reset initialization, add assertions ensuring only one bit is high, and verify transitions in simulation. Recovery logic can force invalid states back to a safe reset state.",
    tags: ["debug", "FSM"]
  },
  {
    category: "Analog Design",
    difficulty: "Easy",
    question: "What is the virtual short concept in an op-amp?",
    answer: "In a stable closed-loop op-amp with high gain and negative feedback, the voltage difference between the two input terminals becomes very small, so they are approximately equal though not physically shorted.",
    tags: ["op-amp"]
  },
  {
    category: "Analog Design",
    difficulty: "Medium",
    question: "Why is a current mirror useful in analog design?",
    answer: "A current mirror copies a reference current to other branches, helping bias analog circuits consistently and enabling predictable operating points with compact implementation.",
    tags: ["biasing", "current mirror"]
  },
  {
    category: "Analog Design",
    difficulty: "Medium",
    question: "What is gain-bandwidth product in an op-amp?",
    answer: "It is the product of amplifier gain and bandwidth, approximately constant for a single-pole compensated op-amp. Increasing closed-loop gain typically reduces bandwidth proportionally.",
    tags: ["frequency response"]
  },
  {
    category: "Analog Design",
    difficulty: "Hard",
    question: "What causes an amplifier to become unstable?",
    answer: "Instability usually comes from excessive phase shift near unity-gain frequency, often due to multiple poles, parasitics or insufficient compensation. If loop phase margin is too low, ringing or oscillation can occur.",
    tags: ["stability", "compensation"]
  },
  {
    category: "VLSI",
    difficulty: "Easy",
    question: "What are dynamic and static power in CMOS?",
    answer: "Dynamic power is mainly due to charging and discharging capacitive loads during switching, roughly proportional to activity, capacitance, V² and frequency. Static power is due to leakage currents when transistors are not switching.",
    tags: ["power", "CMOS"]
  },
  {
    category: "VLSI",
    difficulty: "Medium",
    question: "What is a PVT corner and why do we analyze it?",
    answer: "PVT stands for process, voltage and temperature. Corners model best-case and worst-case manufacturing and operating conditions so timing and functionality can be validated under realistic variations.",
    tags: ["STA", "timing"]
  },
  {
    category: "VLSI",
    difficulty: "Medium",
    question: "What is clock skew and when is it harmful?",
    answer: "Clock skew is the difference in arrival time of the clock edge at different flip-flops. Excessive skew can reduce setup margin or cause hold violations, depending on launch and capture timing relationship.",
    tags: ["clocking"]
  },
  {
    category: "VLSI",
    difficulty: "Hard",
    question: "What is timing closure?",
    answer: "Timing closure is the process of modifying logic, constraints, floorplan, buffering, placement or routing until all required setup and hold checks meet target frequency across relevant corners and modes.",
    tags: ["physical design", "STA"]
  },
  {
    category: "Computer Architecture",
    difficulty: "Easy",
    question: "What is the difference between latency and throughput?",
    answer: "Latency is the time taken for one operation to complete. Throughput is the number of operations completed per unit time. A system can have high throughput even if individual latency is not minimal.",
    tags: ["performance"]
  },
  {
    category: "Computer Architecture",
    difficulty: "Medium",
    question: "What are the three common pipeline hazards?",
    answer: "Structural hazards arise from resource conflicts, data hazards arise from dependencies between instructions, and control hazards arise from branches or jumps affecting instruction flow.",
    tags: ["pipeline"]
  },
  {
    category: "Computer Architecture",
    difficulty: "Medium",
    question: "Why is cache memory faster than main memory?",
    answer: "Cache is smaller, closer to the processor, and implemented with faster memory technologies and shorter access paths. It exploits locality to reduce average memory access time.",
    tags: ["cache", "memory"]
  },
  {
    category: "Computer Architecture",
    difficulty: "Hard",
    question: "How does branch prediction improve pipeline performance?",
    answer: "By guessing the branch direction early, the processor keeps fetching and executing likely instructions rather than stalling. Accurate prediction reduces bubbles and wasted cycles caused by control hazards.",
    tags: ["branch prediction"]
  },
  {
    category: "Semiconductor",
    difficulty: "Easy",
    question: "What is threshold voltage in a MOSFET?",
    answer: "Threshold voltage is the gate-to-source voltage at which a strong inversion channel begins to form, allowing significant current conduction between source and drain.",
    tags: ["MOSFET"]
  },
  {
    category: "Semiconductor",
    difficulty: "Medium",
    question: "What is body effect in a MOS transistor?",
    answer: "Body effect is the increase in threshold voltage when the source-to-body voltage increases. It occurs because the depletion region changes and more gate voltage is required to invert the channel.",
    tags: ["device physics"]
  },
  {
    category: "Semiconductor",
    difficulty: "Hard",
    question: "What are short-channel effects?",
    answer: "As channel length shrinks, electrostatic control by the gate weakens relative to drain and source fields. Effects include threshold roll-off, DIBL, velocity saturation and higher leakage.",
    tags: ["scaling", "devices"]
  }
];

const behavioralQuestions = [
  {
    question: "Tell me about yourself.",
    framework: "Present → past → future. Start with current role or study focus, mention 1–2 relevant hardware experiences, then connect to why you want this role.",
    tip: "Keep it under 90 seconds and tailored to hardware/VLSI work."
  },
  {
    question: "Describe a challenging bug you solved.",
    framework: "Use STAR. Highlight debug steps, tools used, how you narrowed root cause, and the final impact.",
    tip: "Stress your personal contribution, not just the team output."
  },
  {
    question: "Tell me about a time you worked under pressure.",
    framework: "Describe a deadline, constraint, and how you prioritized tasks and communicated risk early.",
    tip: "Avoid sounding chaotic; show structured execution."
  },
  {
    question: "What is your biggest weakness?",
    framework: "Choose a real but non-fatal weakness, show what you changed, and give evidence of improvement.",
    tip: "Do not pick a strength disguised as a weakness."
  },
  {
    question: "How do you explain a technical topic to a non-expert?",
    framework: "Mention simplification, structured analogies, and checking listener understanding.",
    tip: "This is often used to test communication maturity."
  },
  {
    question: "Describe a conflict in a project team.",
    framework: "Focus on facts, not blame. Explain how you aligned on data, trade-offs and common goals.",
    tip: "Interviewers want collaboration, not dominance."
  }
];

const quizBank = [
  { category: "Verilog", question: "Which assignment type is typically recommended in clocked always blocks?", options: ["Blocking", "Non-blocking", "Continuous assign", "Case assign"], correct: 1, explanation: "Non-blocking assignment models simultaneous register updates at the clock edge." },
  { category: "Verilog", question: "Incomplete assignments in combinational RTL usually infer what?", options: ["Buffer", "Tri-state", "Latch", "Counter"], correct: 2, explanation: "Missing assignment paths imply state retention, which synthesizes to a latch." },
  { category: "Digital Logic", question: "A synchronizer is mainly used for: ", options: ["Reducing dynamic power", "Handling asynchronous crossings", "Increasing fanout", "Reducing skew directly"], correct: 1, explanation: "Synchronizers reduce metastability risk when signals cross clock domains." },
  { category: "Digital Logic", question: "Which timing parameter must be satisfied after the clock edge?", options: ["Setup time", "Hold time", "Propagation delay", "Clock period"], correct: 1, explanation: "Hold time is the requirement after the active clock edge." },
  { category: "Analog Design", question: "Negative feedback in an op-amp generally improves:", options: ["Only noise", "Only area", "Linearity and stability of gain", "Only input offset"], correct: 2, explanation: "Negative feedback improves gain control, linearity and predictability." },
  { category: "Analog Design", question: "A current mirror is mainly used to:", options: ["Store charge", "Copy current", "Increase logic levels", "Convert AC to DC"], correct: 1, explanation: "Current mirrors replicate a bias/reference current." },
  { category: "VLSI", question: "Dynamic power is approximately proportional to:", options: ["CV²f", "I²R only", "1/f", "Temperature only"], correct: 0, explanation: "CMOS switching power scales with capacitance, voltage squared and frequency." },
  { category: "VLSI", question: "PVT stands for:", options: ["Phase, Voltage, Test", "Process, Voltage, Temperature", "Process, Variation, Timing", "Power, Voltage, Time"], correct: 1, explanation: "PVT corners capture manufacturing and operating variations." },
  { category: "Computer Architecture", question: "Which is a control hazard source?", options: ["Adder overflow", "Branch instruction", "Cache line fill", "Instruction decode"], correct: 1, explanation: "Branches change instruction flow and create control hazards." },
  { category: "Computer Architecture", question: "A cache exploits which property most directly?", options: ["Thermal equilibrium", "Locality", "Metastability", "Quantization"], correct: 1, explanation: "Caches work because programs tend to reuse nearby data/instructions." },
  { category: "Semiconductor", question: "Body effect usually causes threshold voltage to:", options: ["Decrease strongly", "Increase", "Become zero", "Oscillate"], correct: 1, explanation: "Raising source-to-body bias generally increases threshold voltage." },
  { category: "Semiconductor", question: "Short-channel effects become more severe when transistor length:", options: ["Increases", "Shrinks", "Stays fixed", "Becomes infinite"], correct: 1, explanation: "Electrostatic control weakens as channel length decreases." }
];

const flashcards = [
  { category: "Verilog", front: "Blocking vs non-blocking", back: "Use blocking for combinational procedural logic, non-blocking for clocked sequential logic." },
  { category: "Digital Logic", front: "Setup time", back: "Minimum stable time required before active clock edge." },
  { category: "Digital Logic", front: "Hold time", back: "Minimum stable time required after active clock edge." },
  { category: "Analog Design", front: "Virtual short", back: "In negative feedback op-amp operation, input terminals sit at nearly equal voltage." },
  { category: "VLSI", front: "Dynamic power", back: "Approximately αCV²f. Reduce by cutting switching activity, capacitance, voltage or frequency." },
  { category: "VLSI", front: "Clock skew", back: "Difference in clock arrival times between sequential elements." },
  { category: "Computer Architecture", front: "Latency vs throughput", back: "Latency is per-task completion time; throughput is tasks per unit time." },
  { category: "Semiconductor", front: "Body effect", back: "Threshold voltage changes with source-to-body bias." },
  { category: "Semiconductor", front: "DIBL", back: "Drain-induced barrier lowering: drain voltage lowers effective threshold in short-channel devices." }
];

const revisionNotes = [
  {
    title: "RTL coding essentials",
    bullets: [
      "Use non-blocking assignments in sequential always blocks.",
      "Assign default values in combinational logic to avoid latch inference.",
      "Keep resets consistent and clearly document synchronous vs asynchronous behavior.",
      "Use parameterization and descriptive signal names for reusable RTL."
    ]
  },
  {
    title: "Timing interview essentials",
    bullets: [
      "Setup violations generally mean the data path is too slow for the capture edge.",
      "Hold violations generally mean data changes too soon after launch relative to capture.",
      "Clock uncertainty, skew and jitter affect timing margin.",
      "Multi-cycle and false paths must reflect real design intent, not wishful timing fixes."
    ]
  },
  {
    title: "Analog quick revision",
    bullets: [
      "Understand op-amp gain, bandwidth, phase margin and slew rate distinctly.",
      "Current mirrors define operating points across analog blocks.",
      "Bias stability and process variation matter as much as nominal gain.",
      "Always explain trade-offs between gain, speed, noise, power and area."
    ]
  },
  {
    title: "Architecture quick revision",
    bullets: [
      "Know the difference between ISA and microarchitecture.",
      "Explain cache basics: hit, miss, locality, associativity, replacement.",
      "Pipeline hazards: structural, data and control.",
      "Performance often depends on memory hierarchy, not just CPU frequency."
    ]
  }
];

const companyTracks = [
  {
    name: "NVIDIA-style",
    focus: "Strong digital design, architecture awareness, performance thinking, debugging depth.",
    prep: ["Timing and pipelining", "FSM / datapath design", "Cache and memory bandwidth", "Problem-solving clarity"]
  },
  {
    name: "Intel-style",
    focus: "Deep fundamentals across digital logic, architecture and hardware reasoning.",
    prep: ["Boolean logic and timing", "Pipeline basics", "Verification mindset", "Root-cause debug"]
  },
  {
    name: "AMD-style",
    focus: "Computer architecture, performance trade-offs and logical rigor.",
    prep: ["Caches and branch prediction", "Data hazards", "RTL quality", "Communication clarity"]
  },
  {
    name: "Qualcomm-style",
    focus: "RTL, low-power awareness, SoC block understanding and practical debugging.",
    prep: ["Clock/reset strategy", "CDC basics", "Power-aware design", "Project explanation"]
  },
  {
    name: "Apple-style",
    focus: "High bar on fundamentals, concise explanation and strong ownership stories.",
    prep: ["Digital design precision", "Device/analog fundamentals", "Cross-functional communication", "Project depth"]
  },
  {
    name: "Google hardware-style",
    focus: "Structured thinking, hardware fundamentals and clear problem-solving under ambiguity.",
    prep: ["Architecture trade-offs", "Logical reasoning", "Behavioral clarity", "Design simplification"]
  },
  {
    name: "TI / Analog Devices-style",
    focus: "Analog foundations, device operation and practical design trade-offs.",
    prep: ["Current mirrors", "Differential pairs", "Stability", "Noise and biasing"]
  },
  {
    name: "Broadcom / Marvell-style",
    focus: "Networking/datapath logic, RTL design quality and silicon-oriented reasoning.",
    prep: ["Throughput thinking", "State machines", "Timing closure basics", "Verification discipline"]
  }
];
