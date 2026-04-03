const questionBank = [
  {
    "category": "Verilog",
    "difficulty": "Easy",
    "question": "What is the difference between blocking and non-blocking assignment?",
    "answer": "Blocking '=' executes in order within the current procedural flow and is commonly used for combinational logic. Non-blocking '<=' schedules the update for the end of the current time step and is preferred for sequential clocked logic.",
    "tags": [
      "RTL",
      "syntax"
    ]
  },
  {
    "category": "Verilog",
    "difficulty": "Easy",
    "question": "Why do we prefer non-blocking assignments in clocked always blocks?",
    "answer": "They model parallel register updates more faithfully and reduce race conditions in simulation.",
    "tags": [
      "sequential",
      "best practice"
    ]
  },
  {
    "category": "Verilog",
    "difficulty": "Medium",
    "question": "What causes latch inference and how do you avoid it?",
    "answer": "A latch is inferred when combinational logic does not assign outputs in every possible path. Avoid it by using default assignments and complete case/if coverage.",
    "tags": [
      "latch",
      "combinational"
    ]
  },
  {
    "category": "Verilog",
    "difficulty": "Medium",
    "question": "What is the purpose of a testbench?",
    "answer": "A testbench applies stimulus, checks DUT behavior, and helps validate functionality before synthesis or silicon.",
    "tags": [
      "verification"
    ]
  },
  {
    "category": "Verilog",
    "difficulty": "Hard",
    "question": "What is a race condition in RTL simulation?",
    "answer": "A race condition happens when multiple procedural blocks update and read signals in an order-dependent way within the same simulation time, producing unpredictable results.",
    "tags": [
      "simulation",
      "debug"
    ]
  },
  {
    "category": "Verilog",
    "difficulty": "Hard",
    "question": "How is a synchronous reset different from an asynchronous reset?",
    "answer": "A synchronous reset is sampled only on the active clock edge, while an asynchronous reset can reset state immediately when asserted independent of the clock.",
    "tags": [
      "reset",
      "flip-flop"
    ]
  },
  {
    "category": "Digital Logic",
    "difficulty": "Easy",
    "question": "What is the difference between combinational and sequential logic?",
    "answer": "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state.",
    "tags": [
      "fundamentals"
    ]
  },
  {
    "category": "Digital Logic",
    "difficulty": "Easy",
    "question": "Define setup time and hold time.",
    "answer": "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge.",
    "tags": [
      "timing"
    ]
  },
  {
    "category": "Digital Logic",
    "difficulty": "Medium",
    "question": "Why can metastability occur in a flip-flop?",
    "answer": "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time.",
    "tags": [
      "CDC",
      "metastability"
    ]
  },
  {
    "category": "Digital Logic",
    "difficulty": "Medium",
    "question": "When would you choose a Mealy FSM over a Moore FSM?",
    "answer": "When faster output response is useful because Mealy outputs can depend immediately on input as well as state.",
    "tags": [
      "FSM"
    ]
  },
  {
    "category": "Digital Logic",
    "difficulty": "Hard",
    "question": "How do you mitigate clock domain crossing issues?",
    "answer": "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks.",
    "tags": [
      "CDC",
      "design"
    ]
  },
  {
    "category": "Digital Logic",
    "difficulty": "Hard",
    "question": "What is logic minimization and why is it useful?",
    "answer": "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing.",
    "tags": [
      "K-map",
      "optimization"
    ]
  },
  {
    "category": "Analog Design",
    "difficulty": "Easy",
    "question": "What is the virtual short concept in an op-amp?",
    "answer": "Under high gain and negative feedback, the op-amp input voltages are approximately equal even though little current flows into the inputs.",
    "tags": [
      "op-amp"
    ]
  },
  {
    "category": "Analog Design",
    "difficulty": "Easy",
    "question": "Why is a current mirror widely used in analog design?",
    "answer": "It replicates a reference current into multiple branches, enabling predictable biasing with compact circuitry.",
    "tags": [
      "biasing"
    ]
  },
  {
    "category": "Analog Design",
    "difficulty": "Medium",
    "question": "What is gain-bandwidth product?",
    "answer": "For a single-pole op-amp, gain-bandwidth product is approximately constant: higher closed-loop gain usually means proportionally lower bandwidth.",
    "tags": [
      "frequency response"
    ]
  },
  {
    "category": "Analog Design",
    "difficulty": "Medium",
    "question": "What does phase margin indicate?",
    "answer": "It indicates loop stability margin at unity gain. Higher phase margin generally means better damping and less ringing.",
    "tags": [
      "stability"
    ]
  },
  {
    "category": "Analog Design",
    "difficulty": "Hard",
    "question": "Why does channel length modulation matter in MOS amplifiers?",
    "answer": "It causes drain current to vary with Vds, reducing output resistance and gain compared with the ideal square-law model.",
    "tags": [
      "MOSFET",
      "small-signal"
    ]
  },
  {
    "category": "Analog Design",
    "difficulty": "Hard",
    "question": "What are common causes of amplifier instability?",
    "answer": "Extra poles, parasitic capacitance, inadequate compensation, and excessive loop gain near 180 degrees phase shift can all reduce phase margin and cause oscillation.",
    "tags": [
      "compensation",
      "stability"
    ]
  },
  {
    "category": "VLSI",
    "difficulty": "Easy",
    "question": "What is dynamic power in CMOS?",
    "answer": "Dynamic power mainly comes from charging and discharging capacitances during switching and scales with activity, capacitance, voltage squared, and frequency.",
    "tags": [
      "power",
      "CMOS"
    ]
  },
  {
    "category": "VLSI",
    "difficulty": "Easy",
    "question": "What is static power?",
    "answer": "Static power is power consumed due to leakage currents even when logic is not switching.",
    "tags": [
      "leakage"
    ]
  },
  {
    "category": "VLSI",
    "difficulty": "Medium",
    "question": "What is a PVT corner?",
    "answer": "A PVT corner models combinations of process, voltage, and temperature variations to check design robustness under realistic extremes.",
    "tags": [
      "timing",
      "STA"
    ]
  },
  {
    "category": "VLSI",
    "difficulty": "Medium",
    "question": "What is clock skew?",
    "answer": "Clock skew is the difference in clock arrival time at different sequential elements.",
    "tags": [
      "clocking"
    ]
  },
  {
    "category": "VLSI",
    "difficulty": "Hard",
    "question": "What is timing closure?",
    "answer": "Timing closure is the iterative process of changing logic, constraints, placement, routing, buffering, and architecture until all timing checks pass across modes and corners.",
    "tags": [
      "physical design",
      "STA"
    ]
  },
  {
    "category": "VLSI",
    "difficulty": "Hard",
    "question": "Why are hold violations dangerous even at low frequency?",
    "answer": "Hold checks are same-edge requirements. Lowering the clock frequency does not fix insufficient minimum data-path delay.",
    "tags": [
      "hold",
      "timing"
    ]
  },
  {
    "category": "Computer Architecture",
    "difficulty": "Easy",
    "question": "What is the difference between latency and throughput?",
    "answer": "Latency is the time to complete one operation. Throughput is the number of operations completed per unit time.",
    "tags": [
      "performance"
    ]
  },
  {
    "category": "Computer Architecture",
    "difficulty": "Easy",
    "question": "Why is cache faster than main memory?",
    "answer": "It is smaller, closer to the CPU, and optimized for low-latency access, exploiting temporal and spatial locality.",
    "tags": [
      "cache"
    ]
  },
  {
    "category": "Computer Architecture",
    "difficulty": "Medium",
    "question": "What are structural, data, and control hazards?",
    "answer": "Structural hazards come from resource conflicts, data hazards from dependencies, and control hazards from branch-related uncertainty.",
    "tags": [
      "pipeline"
    ]
  },
  {
    "category": "Computer Architecture",
    "difficulty": "Medium",
    "question": "What is branch prediction?",
    "answer": "It is a technique to guess branch outcomes early so the pipeline keeps useful work in flight.",
    "tags": [
      "pipeline",
      "branch"
    ]
  },
  {
    "category": "Computer Architecture",
    "difficulty": "Hard",
    "question": "How does out-of-order execution improve performance?",
    "answer": "It allows independent instructions to execute when their operands are ready instead of strictly following program order, improving functional unit utilization.",
    "tags": [
      "OoO",
      "microarchitecture"
    ]
  },
  {
    "category": "Computer Architecture",
    "difficulty": "Hard",
    "question": "What is cache coherence?",
    "answer": "Cache coherence ensures multiple cached copies of shared data remain consistent across cores or processors.",
    "tags": [
      "multicore"
    ]
  },
  {
    "category": "Semiconductor",
    "difficulty": "Easy",
    "question": "What is threshold voltage in a MOSFET?",
    "answer": "It is the gate-source voltage at which a strong inversion channel forms and significant drain current starts to flow.",
    "tags": [
      "device physics"
    ]
  },
  {
    "category": "Semiconductor",
    "difficulty": "Easy",
    "question": "What is body effect?",
    "answer": "Threshold voltage increases when source-to-body voltage increases because the depletion region changes.",
    "tags": [
      "MOSFET"
    ]
  },
  {
    "category": "Semiconductor",
    "difficulty": "Medium",
    "question": "What is DIBL?",
    "answer": "Drain-induced barrier lowering is a short-channel effect where higher drain voltage lowers threshold, increasing leakage.",
    "tags": [
      "short-channel"
    ]
  },
  {
    "category": "Semiconductor",
    "difficulty": "Medium",
    "question": "Why does scaling increase leakage challenges?",
    "answer": "Smaller geometries weaken gate electrostatic control and make short-channel and tunneling effects more significant.",
    "tags": [
      "scaling"
    ]
  },
  {
    "category": "Semiconductor",
    "difficulty": "Hard",
    "question": "What is subthreshold conduction?",
    "answer": "It is current that flows even below threshold due to diffusion mechanisms, and it becomes important in low-power nanoscale design.",
    "tags": [
      "leakage"
    ]
  },
  {
    "category": "Semiconductor",
    "difficulty": "Hard",
    "question": "Why is mobility degradation important in MOSFET modeling?",
    "answer": "At high vertical fields carrier mobility reduces, affecting current, transconductance, and delay predictions.",
    "tags": [
      "device model"
    ]
  }
];

const behavioralQuestions = [
  {
    "question": "Tell me about yourself.",
    "framework": "Present → past → future. Start with your current role or degree, add 1-2 relevant hardware projects, then connect to why this role is the natural next step.",
    "tip": "Keep it under 90 seconds and focused on semiconductor, RTL, verification, or design relevance."
  },
  {
    "question": "Describe a challenging bug you solved.",
    "framework": "Use STAR: context, signal of failure, debug path, tools used, root cause, fix, validation, and learning.",
    "tip": "Mention waveforms, logs, simulation, board bring-up, or lab data when possible."
  },
  {
    "question": "How do you handle deadline pressure?",
    "framework": "Explain how you break scope, identify critical path, communicate risks early, and validate incrementally.",
    "tip": "Interviewers want calm prioritization, not heroic chaos."
  },
  {
    "question": "Tell me about a time you disagreed technically with a teammate.",
    "framework": "Show data-driven disagreement: compare options, run experiments, align on goals, and keep it respectful.",
    "tip": "Never frame it as ego; frame it as engineering decision quality."
  },
  {
    "question": "Describe a time you learned a new tool quickly.",
    "framework": "Explain why the tool mattered, how you ramped up, what resource you used, and what outcome improved.",
    "tip": "Mention initiative and speed."
  },
  {
    "question": "What is your biggest weakness?",
    "framework": "Pick a real but manageable weakness, show the system you built to improve it, and share progress.",
    "tip": "Avoid fake strengths disguised as weaknesses."
  },
  {
    "question": "Why do you want to work in hardware/VLSI?",
    "framework": "Connect fascination with systems or silicon to concrete project work and long-term career fit.",
    "tip": "Make it personal and technical."
  },
  {
    "question": "Walk me through a project on your resume.",
    "framework": "Problem, architecture, your role, trade-offs, validation approach, and measurable outcome.",
    "tip": "Be ready for deep follow-up on anything you claim."
  },
  {
    "question": "Describe failure and recovery.",
    "framework": "Discuss a real miss, ownership, correction, and process change after the event.",
    "tip": "The best answers show maturity and prevention."
  },
  {
    "question": "How do you communicate with cross-functional teams?",
    "framework": "Explain how you translate detail for firmware, validation, layout, or product stakeholders while preserving accuracy.",
    "tip": "Good hardware engineers communicate beyond their silo."
  }
];

const quizBank = [
  {
    "category": "Verilog",
    "question": "Which assignment style is preferred for sequential always blocks?",
    "options": [
      "Blocking",
      "Non-blocking",
      "Continuous assign only",
      "Either randomly"
    ],
    "correct": 1,
    "explanation": "Non-blocking assignments best model simultaneous register updates."
  },
  {
    "category": "Verilog",
    "question": "An incomplete if statement in combinational logic most often infers a:",
    "options": [
      "Counter",
      "Latch",
      "Tri-state buffer",
      "Clock divider"
    ],
    "correct": 1,
    "explanation": "Missing assignment paths in combinational logic infer latches."
  },
  {
    "category": "Digital Logic",
    "question": "Hold time refers to data stability:",
    "options": [
      "Before the clock edge",
      "After the clock edge",
      "At any random time",
      "Only during reset"
    ],
    "correct": 1,
    "explanation": "Hold time is the minimum stable period after the clock edge."
  },
  {
    "category": "Digital Logic",
    "question": "A two-flop synchronizer is mainly used for:",
    "options": [
      "Power reduction",
      "CDC mitigation",
      "Clock generation",
      "State encoding"
    ],
    "correct": 1,
    "explanation": "A two-flop synchronizer lowers metastability propagation probability for single-bit asynchronous signals."
  },
  {
    "category": "Analog Design",
    "question": "Negative feedback in an op-amp generally improves:",
    "options": [
      "Predictability and linearity",
      "Random noise generation",
      "Leakage current",
      "Package cost"
    ],
    "correct": 0,
    "explanation": "Negative feedback stabilizes gain and improves linearity."
  },
  {
    "category": "Analog Design",
    "question": "If phase margin is too low, a closed-loop amplifier may:",
    "options": [
      "Consume zero power",
      "Oscillate or ring",
      "Become ideal",
      "Ignore input"
    ],
    "correct": 1,
    "explanation": "Low phase margin causes ringing or oscillation."
  },
  {
    "category": "VLSI",
    "question": "Dynamic power is proportional to:",
    "options": [
      "CV^2f activity",
      "Only temperature",
      "Only transistor count",
      "Only package inductance"
    ],
    "correct": 0,
    "explanation": "Classically, dynamic power depends on switching activity, capacitance, voltage squared, and frequency."
  },
  {
    "category": "VLSI",
    "question": "Reducing clock frequency can directly fix:",
    "options": [
      "All hold violations",
      "Many setup issues",
      "DIBL",
      "IR drop completely"
    ],
    "correct": 1,
    "explanation": "Lower frequency relaxes setup timing but does not inherently solve hold timing."
  },
  {
    "category": "Computer Architecture",
    "question": "A cache miss penalty affects mainly:",
    "options": [
      "Average memory access time",
      "Threshold voltage",
      "Clock duty cycle",
      "PCB trace width"
    ],
    "correct": 0,
    "explanation": "Cache misses increase average memory access time."
  },
  {
    "category": "Computer Architecture",
    "question": "A branch predictor helps reduce:",
    "options": [
      "Control hazard cost",
      "Wire resistance",
      "Leakage power only",
      "Package warpage"
    ],
    "correct": 0,
    "explanation": "Better branch prediction reduces control-hazard stalls."
  },
  {
    "category": "Semiconductor",
    "question": "Body effect usually causes threshold voltage to:",
    "options": [
      "Decrease strongly",
      "Increase",
      "Become zero",
      "Oscillate"
    ],
    "correct": 1,
    "explanation": "Higher source-body bias generally increases threshold voltage."
  },
  {
    "category": "Semiconductor",
    "question": "DIBL is associated with:",
    "options": [
      "Very long channels only",
      "Short-channel effects",
      "Mechanical stress testing",
      "Solder failures"
    ],
    "correct": 1,
    "explanation": "Drain-induced barrier lowering is a short-channel effect."
  },
  {
    "category": "Verilog",
    "question": "What is the difference between blocking and non-blocking assignment?",
    "options": [
      "Blocking '=' executes in order within the current procedural flow and is commonly used for combinational logic.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "Blocking '=' executes in order within the current procedural flow and is commonly used for combinational logic. Non-blocking '<=' schedules the update for the end of the current time step and is preferred for sequential clocked logic."
  },
  {
    "category": "Verilog",
    "question": "Why do we prefer non-blocking assignments in clocked always blocks?",
    "options": [
      "They model parallel register updates more faithfully and reduce race conditions in simulation.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "They model parallel register updates more faithfully and reduce race conditions in simulation."
  },
  {
    "category": "Verilog",
    "question": "What causes latch inference and how do you avoid it?",
    "options": [
      "A latch is inferred when combinational logic does not assign outputs in every possible path.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "A latch is inferred when combinational logic does not assign outputs in every possible path. Avoid it by using default assignments and complete case/if coverage."
  },
  {
    "category": "Verilog",
    "question": "What is the purpose of a testbench?",
    "options": [
      "A testbench applies stimulus, checks DUT behavior, and helps validate functionality before synthesis or silicon.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "A testbench applies stimulus, checks DUT behavior, and helps validate functionality before synthesis or silicon."
  },
  {
    "category": "Verilog",
    "question": "What is a race condition in RTL simulation?",
    "options": [
      "A race condition happens when multiple procedural blocks update and read signals in an order-dependent way within the same simulation time, producing unpredictable results.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "A race condition happens when multiple procedural blocks update and read signals in an order-dependent way within the same simulation time, producing unpredictable results."
  },
  {
    "category": "Verilog",
    "question": "How is a synchronous reset different from an asynchronous reset?",
    "options": [
      "A synchronous reset is sampled only on the active clock edge, while an asynchronous reset can reset state immediately when asserted independent of the clock.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "A synchronous reset is sampled only on the active clock edge, while an asynchronous reset can reset state immediately when asserted independent of the clock."
  },
  {
    "category": "Digital Logic",
    "question": "What is the difference between combinational and sequential logic?",
    "options": [
      "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state."
  },
  {
    "category": "Digital Logic",
    "question": "Define setup time and hold time.",
    "options": [
      "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge."
  },
  {
    "category": "Digital Logic",
    "question": "Why can metastability occur in a flip-flop?",
    "options": [
      "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time."
  },
  {
    "category": "Digital Logic",
    "question": "When would you choose a Mealy FSM over a Moore FSM?",
    "options": [
      "When faster output response is useful because Mealy outputs can depend immediately on input as well as state.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "When faster output response is useful because Mealy outputs can depend immediately on input as well as state."
  },
  {
    "category": "Digital Logic",
    "question": "How do you mitigate clock domain crossing issues?",
    "options": [
      "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks."
  },
  {
    "category": "Digital Logic",
    "question": "What is logic minimization and why is it useful?",
    "options": [
      "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing."
  },
  {
    "category": "Analog Design",
    "question": "What is the virtual short concept in an op-amp?",
    "options": [
      "Under high gain and negative feedback, the op-amp input voltages are approximately equal even though little current flows into the inputs.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "Under high gain and negative feedback, the op-amp input voltages are approximately equal even though little current flows into the inputs."
  },
  {
    "category": "Analog Design",
    "question": "Why is a current mirror widely used in analog design?",
    "options": [
      "It replicates a reference current into multiple branches, enabling predictable biasing with compact circuitry.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "It replicates a reference current into multiple branches, enabling predictable biasing with compact circuitry."
  },
  {
    "category": "Analog Design",
    "question": "What is gain-bandwidth product?",
    "options": [
      "For a single-pole op-amp, gain-bandwidth product is approximately constant: higher closed-loop gain usually means proportionally lower bandwidth.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "For a single-pole op-amp, gain-bandwidth product is approximately constant: higher closed-loop gain usually means proportionally lower bandwidth."
  },
  {
    "category": "Analog Design",
    "question": "What does phase margin indicate?",
    "options": [
      "It indicates loop stability margin at unity gain.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "It indicates loop stability margin at unity gain. Higher phase margin generally means better damping and less ringing."
  },
  {
    "category": "Analog Design",
    "question": "Why does channel length modulation matter in MOS amplifiers?",
    "options": [
      "It causes drain current to vary with Vds, reducing output resistance and gain compared with the ideal square-law model.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "It causes drain current to vary with Vds, reducing output resistance and gain compared with the ideal square-law model."
  },
  {
    "category": "Analog Design",
    "question": "What are common causes of amplifier instability?",
    "options": [
      "Extra poles, parasitic capacitance, inadequate compensation, and excessive loop gain near 180 degrees phase shift can all reduce phase margin and cause oscillation.",
      "It is mainly a packaging issue unrelated to the circuit.",
      "It applies only after tapeout and never in design interviews.",
      "It means the design has no timing constraints."
    ],
    "correct": 0,
    "explanation": "Extra poles, parasitic capacitance, inadequate compensation, and excessive loop gain near 180 degrees phase shift can all reduce phase margin and cause oscillation."
  }
];

const flashcards = [
  {
    "category": "Verilog",
    "front": "Blocking vs non-blocking",
    "back": "Use blocking '=' for combinational style and non-blocking '<=' for clocked sequential logic."
  },
  {
    "category": "Verilog",
    "front": "Latch inference trigger",
    "back": "Missing assignment in some branches of combinational logic."
  },
  {
    "category": "Digital Logic",
    "front": "Setup time",
    "back": "Minimum time data must be stable before the active clock edge."
  },
  {
    "category": "Digital Logic",
    "front": "Hold time",
    "back": "Minimum time data must remain stable after the active clock edge."
  },
  {
    "category": "Digital Logic",
    "front": "Metastability fix",
    "back": "Use synchronizers, async FIFOs, and safe CDC design practices."
  },
  {
    "category": "Analog Design",
    "front": "Virtual short",
    "back": "In a stable negative-feedback op-amp, input voltages are approximately equal."
  },
  {
    "category": "Analog Design",
    "front": "Phase margin",
    "back": "Stability margin measured at unity loop gain; more margin usually means less ringing."
  },
  {
    "category": "Analog Design",
    "front": "Current mirror use",
    "back": "Copies a reference current to create stable bias currents."
  },
  {
    "category": "VLSI",
    "front": "Dynamic power formula",
    "back": "P ≈ α C V² f."
  },
  {
    "category": "VLSI",
    "front": "Static power",
    "back": "Power due to leakage currents when logic is not switching."
  },
  {
    "category": "VLSI",
    "front": "PVT",
    "back": "Process, voltage, and temperature corners used for robust signoff."
  },
  {
    "category": "VLSI",
    "front": "Hold violation",
    "back": "Minimum delay too short; frequency reduction alone will not fix it."
  },
  {
    "category": "Architecture",
    "front": "Latency vs throughput",
    "back": "Latency is time per operation; throughput is operations per unit time."
  },
  {
    "category": "Architecture",
    "front": "Cache locality",
    "back": "Temporal locality and spatial locality justify small fast caches."
  },
  {
    "category": "Semiconductor",
    "front": "Threshold voltage",
    "back": "The Vgs at which strong inversion begins in a MOSFET."
  },
  {
    "category": "Semiconductor",
    "front": "Body effect",
    "back": "Higher source-body bias raises threshold voltage."
  },
  {
    "category": "Verilog",
    "front": "Sensitivity list",
    "back": "For combinational logic, include all read signals or use always_comb in SystemVerilog."
  },
  {
    "category": "Verilog",
    "front": "Synchronous reset",
    "back": "Reset is sampled on the active clock edge."
  },
  {
    "category": "Verilog",
    "front": "Asynchronous reset",
    "back": "Reset takes effect immediately when asserted."
  },
  {
    "category": "Verilog",
    "front": "One-hot FSM",
    "back": "Only one state bit should be high at a time."
  },
  {
    "category": "Digital Logic",
    "front": "Mealy FSM",
    "back": "Output depends on state and input."
  },
  {
    "category": "Digital Logic",
    "front": "Moore FSM",
    "back": "Output depends only on state."
  },
  {
    "category": "Digital Logic",
    "front": "Gray code",
    "back": "Adjacent codes differ by only one bit."
  },
  {
    "category": "Digital Logic",
    "front": "Critical path",
    "back": "Longest delay path limiting max clock frequency."
  },
  {
    "category": "Analog Design",
    "front": "gm",
    "back": "Small-signal transconductance; change in Id for change in Vgs."
  },
  {
    "category": "Analog Design",
    "front": "ro",
    "back": "Small-signal output resistance related to channel length modulation."
  },
  {
    "category": "Analog Design",
    "front": "CMRR",
    "back": "Ability to reject common-mode input signals."
  },
  {
    "category": "Analog Design",
    "front": "PSRR",
    "back": "Ability to reject supply variations."
  },
  {
    "category": "VLSI",
    "front": "IR drop",
    "back": "Voltage drop in power grid due to current through resistance."
  },
  {
    "category": "VLSI",
    "front": "Electromigration",
    "back": "Metal degradation due to high current density over time."
  },
  {
    "category": "VLSI",
    "front": "Clock skew",
    "back": "Clock arrival difference between sequential elements."
  },
  {
    "category": "VLSI",
    "front": "Clock jitter",
    "back": "Short-term variation in clock edge timing."
  },
  {
    "category": "Architecture",
    "front": "Structural hazard",
    "back": "Resource conflict in pipeline."
  },
  {
    "category": "Architecture",
    "front": "Data hazard",
    "back": "Instruction dependency hazard."
  },
  {
    "category": "Architecture",
    "front": "Control hazard",
    "back": "Branch/jump related hazard."
  },
  {
    "category": "Architecture",
    "front": "Write-back",
    "back": "Pipeline stage where result is committed to register file."
  },
  {
    "category": "Semiconductor",
    "front": "DIBL",
    "back": "Drain-induced barrier lowering in short-channel MOSFETs."
  },
  {
    "category": "Semiconductor",
    "front": "Subthreshold slope",
    "back": "Measure of how effectively current decreases below threshold."
  },
  {
    "category": "Semiconductor",
    "front": "Velocity saturation",
    "back": "Carrier velocity stops increasing linearly with field."
  },
  {
    "category": "Semiconductor",
    "front": "Leakage current",
    "back": "Undesired current when device is nominally off."
  },
  {
    "category": "Behavioral",
    "front": "STAR",
    "back": "Situation, Task, Action, Result."
  },
  {
    "category": "Behavioral",
    "front": "Project pitch",
    "back": "Problem, architecture, your role, trade-offs, validation, result."
  },
  {
    "category": "Behavioral",
    "front": "Good weakness answer",
    "back": "Real weakness plus concrete improvement system."
  },
  {
    "category": "Behavioral",
    "front": "Conflict answer",
    "back": "Respectful disagreement resolved with data and alignment."
  },
  {
    "category": "Mixed",
    "front": "FIFO purpose",
    "back": "Buffers producer-consumer timing and rate mismatch."
  },
  {
    "category": "Mixed",
    "front": "Setup slack",
    "back": "Required arrival time minus actual arrival time for setup check."
  },
  {
    "category": "Mixed",
    "front": "Hold slack",
    "back": "Actual arrival time minus required minimum delay for hold check."
  },
  {
    "category": "Mixed",
    "front": "Scan chain",
    "back": "DFT structure enabling easier controllability and observability."
  }
];

const revisionNotes = [
  {
    "title": "RTL Coding Checklist",
    "bullets": [
      "Use non-blocking assignments in clocked logic.",
      "Give default assignments in combinational blocks.",
      "Separate combinational next-state logic from sequential state update when possible.",
      "Be explicit about reset behavior.",
      "Write simple self-checking testbenches."
    ]
  },
  {
    "title": "Timing Essentials",
    "bullets": [
      "Setup violations limit maximum frequency.",
      "Hold violations are minimum-delay problems.",
      "Clock skew can hurt or help depending on the path.",
      "CDC requires dedicated design patterns, not optimism.",
      "Review constraints before blaming synthesis."
    ]
  },
  {
    "title": "Analog Interview Reminders",
    "bullets": [
      "Start from bias point, then move to small-signal view.",
      "Mention gain, bandwidth, output swing, linearity, and stability trade-offs.",
      "Current mirrors and differential pairs appear frequently.",
      "Know phase margin and compensation basics.",
      "State assumptions clearly."
    ]
  },
  {
    "title": "Architecture Quick Revision",
    "bullets": [
      "Explain why pipelines need hazard handling.",
      "Know cache hit, miss, and miss penalty ideas.",
      "Differentiate ISA from microarchitecture.",
      "Branch prediction and out-of-order execution are performance tools.",
      "Use CPI and AMAT language confidently."
    ]
  },
  {
    "title": "Behavioral Round Tips",
    "bullets": [
      "Use STAR for problem-solving stories.",
      "Stay concise and structured.",
      "Own mistakes without self-destruction.",
      "Tie examples back to engineering impact.",
      "Be ready to explain your exact role on projects."
    ]
  }
];

const companyTracks = [
  {
    "id": "nvidia",
    "name": "NVIDIA",
    "focus": "Strong digital design, computer architecture, performance reasoning, and debugging depth.",
    "prep": [
      "Pipeline and cache reasoning",
      "RTL quality and timing awareness",
      "System thinking and performance trade-offs"
    ]
  },
  {
    "id": "intel",
    "name": "Intel",
    "focus": "Core digital logic, microarchitecture fundamentals, timing, and methodical debugging.",
    "prep": [
      "FSM and timing questions",
      "Design-for-test and signoff awareness",
      "Project depth and clarity"
    ]
  },
  {
    "id": "amd",
    "name": "AMD",
    "focus": "Architecture plus RTL problem solving with emphasis on correctness and trade-offs.",
    "prep": [
      "Hazards, cache, performance",
      "Robust RTL style",
      "Interview calm under follow-up pressure"
    ]
  },
  {
    "id": "qualcomm",
    "name": "Qualcomm",
    "focus": "Mixed system-level reasoning, RTL, SoC blocks, and communication strength.",
    "prep": [
      "Protocols and interfaces",
      "Clock/reset discipline",
      "Behavioral clarity for cross-functional work"
    ]
  },
  {
    "id": "apple",
    "name": "Apple Hardware",
    "focus": "Depth on fundamentals, crisp communication, and strong ownership stories.",
    "prep": [
      "Precise explanation of projects",
      "Strong basics in digital/VLSI",
      "No hand-wavy answers"
    ]
  },
  {
    "id": "broadcom",
    "name": "Broadcom",
    "focus": "Solid hardware fundamentals, data-path reasoning, and practical implementation detail.",
    "prep": [
      "Timing and throughput reasoning",
      "Verification awareness",
      "Design edge cases"
    ]
  }
];

const companyTests = {
  "nvidia": [
    {
      "category": "Computer Architecture",
      "question": "A cache miss penalty affects mainly:",
      "options": [
        "Average memory access time",
        "Threshold voltage",
        "Clock duty cycle",
        "PCB trace width"
      ],
      "correct": 0,
      "explanation": "Cache misses increase average memory access time."
    },
    {
      "category": "Computer Architecture",
      "question": "A branch predictor helps reduce:",
      "options": [
        "Control hazard cost",
        "Wire resistance",
        "Leakage power only",
        "Package warpage"
      ],
      "correct": 0,
      "explanation": "Better branch prediction reduces control-hazard stalls."
    },
    {
      "category": "Digital Logic",
      "question": "Hold time refers to data stability:",
      "options": [
        "Before the clock edge",
        "After the clock edge",
        "At any random time",
        "Only during reset"
      ],
      "correct": 1,
      "explanation": "Hold time is the minimum stable period after the clock edge."
    },
    {
      "category": "Digital Logic",
      "question": "A two-flop synchronizer is mainly used for:",
      "options": [
        "Power reduction",
        "CDC mitigation",
        "Clock generation",
        "State encoding"
      ],
      "correct": 1,
      "explanation": "A two-flop synchronizer lowers metastability propagation probability for single-bit asynchronous signals."
    },
    {
      "category": "Digital Logic",
      "question": "What is the difference between combinational and sequential logic?",
      "options": [
        "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state."
    },
    {
      "category": "Digital Logic",
      "question": "Define setup time and hold time.",
      "options": [
        "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge."
    },
    {
      "category": "Digital Logic",
      "question": "Why can metastability occur in a flip-flop?",
      "options": [
        "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time."
    },
    {
      "category": "Digital Logic",
      "question": "When would you choose a Mealy FSM over a Moore FSM?",
      "options": [
        "When faster output response is useful because Mealy outputs can depend immediately on input as well as state.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "When faster output response is useful because Mealy outputs can depend immediately on input as well as state."
    },
    {
      "category": "Digital Logic",
      "question": "How do you mitigate clock domain crossing issues?",
      "options": [
        "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks."
    },
    {
      "category": "Digital Logic",
      "question": "What is logic minimization and why is it useful?",
      "options": [
        "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing."
    }
  ],
  "intel": [
    {
      "category": "Digital Logic",
      "question": "Hold time refers to data stability:",
      "options": [
        "Before the clock edge",
        "After the clock edge",
        "At any random time",
        "Only during reset"
      ],
      "correct": 1,
      "explanation": "Hold time is the minimum stable period after the clock edge."
    },
    {
      "category": "Digital Logic",
      "question": "A two-flop synchronizer is mainly used for:",
      "options": [
        "Power reduction",
        "CDC mitigation",
        "Clock generation",
        "State encoding"
      ],
      "correct": 1,
      "explanation": "A two-flop synchronizer lowers metastability propagation probability for single-bit asynchronous signals."
    },
    {
      "category": "Digital Logic",
      "question": "What is the difference between combinational and sequential logic?",
      "options": [
        "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state."
    },
    {
      "category": "Digital Logic",
      "question": "Define setup time and hold time.",
      "options": [
        "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge."
    },
    {
      "category": "Digital Logic",
      "question": "Why can metastability occur in a flip-flop?",
      "options": [
        "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time."
    },
    {
      "category": "Digital Logic",
      "question": "When would you choose a Mealy FSM over a Moore FSM?",
      "options": [
        "When faster output response is useful because Mealy outputs can depend immediately on input as well as state.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "When faster output response is useful because Mealy outputs can depend immediately on input as well as state."
    },
    {
      "category": "Digital Logic",
      "question": "How do you mitigate clock domain crossing issues?",
      "options": [
        "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks."
    },
    {
      "category": "Digital Logic",
      "question": "What is logic minimization and why is it useful?",
      "options": [
        "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing."
    },
    {
      "category": "VLSI",
      "question": "Dynamic power is proportional to:",
      "options": [
        "CV^2f activity",
        "Only temperature",
        "Only transistor count",
        "Only package inductance"
      ],
      "correct": 0,
      "explanation": "Classically, dynamic power depends on switching activity, capacitance, voltage squared, and frequency."
    },
    {
      "category": "VLSI",
      "question": "Reducing clock frequency can directly fix:",
      "options": [
        "All hold violations",
        "Many setup issues",
        "DIBL",
        "IR drop completely"
      ],
      "correct": 1,
      "explanation": "Lower frequency relaxes setup timing but does not inherently solve hold timing."
    }
  ],
  "amd": [
    {
      "category": "Computer Architecture",
      "question": "A cache miss penalty affects mainly:",
      "options": [
        "Average memory access time",
        "Threshold voltage",
        "Clock duty cycle",
        "PCB trace width"
      ],
      "correct": 0,
      "explanation": "Cache misses increase average memory access time."
    },
    {
      "category": "Computer Architecture",
      "question": "A branch predictor helps reduce:",
      "options": [
        "Control hazard cost",
        "Wire resistance",
        "Leakage power only",
        "Package warpage"
      ],
      "correct": 0,
      "explanation": "Better branch prediction reduces control-hazard stalls."
    },
    {
      "category": "Verilog",
      "question": "Which assignment style is preferred for sequential always blocks?",
      "options": [
        "Blocking",
        "Non-blocking",
        "Continuous assign only",
        "Either randomly"
      ],
      "correct": 1,
      "explanation": "Non-blocking assignments best model simultaneous register updates."
    },
    {
      "category": "Verilog",
      "question": "An incomplete if statement in combinational logic most often infers a:",
      "options": [
        "Counter",
        "Latch",
        "Tri-state buffer",
        "Clock divider"
      ],
      "correct": 1,
      "explanation": "Missing assignment paths in combinational logic infer latches."
    },
    {
      "category": "Verilog",
      "question": "What is the difference between blocking and non-blocking assignment?",
      "options": [
        "Blocking '=' executes in order within the current procedural flow and is commonly used for combinational logic.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Blocking '=' executes in order within the current procedural flow and is commonly used for combinational logic. Non-blocking '<=' schedules the update for the end of the current time step and is preferred for sequential clocked logic."
    },
    {
      "category": "Verilog",
      "question": "Why do we prefer non-blocking assignments in clocked always blocks?",
      "options": [
        "They model parallel register updates more faithfully and reduce race conditions in simulation.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "They model parallel register updates more faithfully and reduce race conditions in simulation."
    },
    {
      "category": "Verilog",
      "question": "What causes latch inference and how do you avoid it?",
      "options": [
        "A latch is inferred when combinational logic does not assign outputs in every possible path.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "A latch is inferred when combinational logic does not assign outputs in every possible path. Avoid it by using default assignments and complete case/if coverage."
    },
    {
      "category": "Verilog",
      "question": "What is the purpose of a testbench?",
      "options": [
        "A testbench applies stimulus, checks DUT behavior, and helps validate functionality before synthesis or silicon.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "A testbench applies stimulus, checks DUT behavior, and helps validate functionality before synthesis or silicon."
    },
    {
      "category": "Verilog",
      "question": "What is a race condition in RTL simulation?",
      "options": [
        "A race condition happens when multiple procedural blocks update and read signals in an order-dependent way within the same simulation time, producing unpredictable results.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "A race condition happens when multiple procedural blocks update and read signals in an order-dependent way within the same simulation time, producing unpredictable results."
    },
    {
      "category": "Verilog",
      "question": "How is a synchronous reset different from an asynchronous reset?",
      "options": [
        "A synchronous reset is sampled only on the active clock edge, while an asynchronous reset can reset state immediately when asserted independent of the clock.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "A synchronous reset is sampled only on the active clock edge, while an asynchronous reset can reset state immediately when asserted independent of the clock."
    }
  ],
  "qualcomm": [
    {
      "category": "Digital Logic",
      "question": "Hold time refers to data stability:",
      "options": [
        "Before the clock edge",
        "After the clock edge",
        "At any random time",
        "Only during reset"
      ],
      "correct": 1,
      "explanation": "Hold time is the minimum stable period after the clock edge."
    },
    {
      "category": "Digital Logic",
      "question": "A two-flop synchronizer is mainly used for:",
      "options": [
        "Power reduction",
        "CDC mitigation",
        "Clock generation",
        "State encoding"
      ],
      "correct": 1,
      "explanation": "A two-flop synchronizer lowers metastability propagation probability for single-bit asynchronous signals."
    },
    {
      "category": "Digital Logic",
      "question": "What is the difference between combinational and sequential logic?",
      "options": [
        "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state."
    },
    {
      "category": "Digital Logic",
      "question": "Define setup time and hold time.",
      "options": [
        "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge."
    },
    {
      "category": "Digital Logic",
      "question": "Why can metastability occur in a flip-flop?",
      "options": [
        "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time."
    },
    {
      "category": "Digital Logic",
      "question": "When would you choose a Mealy FSM over a Moore FSM?",
      "options": [
        "When faster output response is useful because Mealy outputs can depend immediately on input as well as state.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "When faster output response is useful because Mealy outputs can depend immediately on input as well as state."
    },
    {
      "category": "Digital Logic",
      "question": "How do you mitigate clock domain crossing issues?",
      "options": [
        "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks."
    },
    {
      "category": "Digital Logic",
      "question": "What is logic minimization and why is it useful?",
      "options": [
        "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing."
    },
    {
      "category": "Verilog",
      "question": "Which assignment style is preferred for sequential always blocks?",
      "options": [
        "Blocking",
        "Non-blocking",
        "Continuous assign only",
        "Either randomly"
      ],
      "correct": 1,
      "explanation": "Non-blocking assignments best model simultaneous register updates."
    },
    {
      "category": "Verilog",
      "question": "An incomplete if statement in combinational logic most often infers a:",
      "options": [
        "Counter",
        "Latch",
        "Tri-state buffer",
        "Clock divider"
      ],
      "correct": 1,
      "explanation": "Missing assignment paths in combinational logic infer latches."
    }
  ],
  "apple": [
    {
      "category": "Digital Logic",
      "question": "Hold time refers to data stability:",
      "options": [
        "Before the clock edge",
        "After the clock edge",
        "At any random time",
        "Only during reset"
      ],
      "correct": 1,
      "explanation": "Hold time is the minimum stable period after the clock edge."
    },
    {
      "category": "Digital Logic",
      "question": "A two-flop synchronizer is mainly used for:",
      "options": [
        "Power reduction",
        "CDC mitigation",
        "Clock generation",
        "State encoding"
      ],
      "correct": 1,
      "explanation": "A two-flop synchronizer lowers metastability propagation probability for single-bit asynchronous signals."
    },
    {
      "category": "Digital Logic",
      "question": "What is the difference between combinational and sequential logic?",
      "options": [
        "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Combinational logic depends only on current inputs; sequential logic depends on current inputs and stored state."
    },
    {
      "category": "Digital Logic",
      "question": "Define setup time and hold time.",
      "options": [
        "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Setup time is how long data must be stable before the clock edge; hold time is how long it must remain stable after the edge."
    },
    {
      "category": "Digital Logic",
      "question": "Why can metastability occur in a flip-flop?",
      "options": [
        "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "It occurs when asynchronous data changes too close to the capturing clock edge, violating setup or hold time and causing uncertain settling time."
    },
    {
      "category": "Digital Logic",
      "question": "When would you choose a Mealy FSM over a Moore FSM?",
      "options": [
        "When faster output response is useful because Mealy outputs can depend immediately on input as well as state.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "When faster output response is useful because Mealy outputs can depend immediately on input as well as state."
    },
    {
      "category": "Digital Logic",
      "question": "How do you mitigate clock domain crossing issues?",
      "options": [
        "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Use synchronizers for single-bit controls, async FIFOs for data, handshake schemes, CDC constraints, and dedicated verification checks."
    },
    {
      "category": "Digital Logic",
      "question": "What is logic minimization and why is it useful?",
      "options": [
        "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Logic minimization reduces gate count or literal count while preserving function, improving area, power, and possibly timing."
    },
    {
      "category": "VLSI",
      "question": "Dynamic power is proportional to:",
      "options": [
        "CV^2f activity",
        "Only temperature",
        "Only transistor count",
        "Only package inductance"
      ],
      "correct": 0,
      "explanation": "Classically, dynamic power depends on switching activity, capacitance, voltage squared, and frequency."
    },
    {
      "category": "VLSI",
      "question": "Reducing clock frequency can directly fix:",
      "options": [
        "All hold violations",
        "Many setup issues",
        "DIBL",
        "IR drop completely"
      ],
      "correct": 1,
      "explanation": "Lower frequency relaxes setup timing but does not inherently solve hold timing."
    }
  ],
  "broadcom": [
    {
      "category": "Verilog",
      "question": "Which assignment style is preferred for sequential always blocks?",
      "options": [
        "Blocking",
        "Non-blocking",
        "Continuous assign only",
        "Either randomly"
      ],
      "correct": 1,
      "explanation": "Non-blocking assignments best model simultaneous register updates."
    },
    {
      "category": "Verilog",
      "question": "An incomplete if statement in combinational logic most often infers a:",
      "options": [
        "Counter",
        "Latch",
        "Tri-state buffer",
        "Clock divider"
      ],
      "correct": 1,
      "explanation": "Missing assignment paths in combinational logic infer latches."
    },
    {
      "category": "Verilog",
      "question": "What is the difference between blocking and non-blocking assignment?",
      "options": [
        "Blocking '=' executes in order within the current procedural flow and is commonly used for combinational logic.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "Blocking '=' executes in order within the current procedural flow and is commonly used for combinational logic. Non-blocking '<=' schedules the update for the end of the current time step and is preferred for sequential clocked logic."
    },
    {
      "category": "Verilog",
      "question": "Why do we prefer non-blocking assignments in clocked always blocks?",
      "options": [
        "They model parallel register updates more faithfully and reduce race conditions in simulation.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "They model parallel register updates more faithfully and reduce race conditions in simulation."
    },
    {
      "category": "Verilog",
      "question": "What causes latch inference and how do you avoid it?",
      "options": [
        "A latch is inferred when combinational logic does not assign outputs in every possible path.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "A latch is inferred when combinational logic does not assign outputs in every possible path. Avoid it by using default assignments and complete case/if coverage."
    },
    {
      "category": "Verilog",
      "question": "What is the purpose of a testbench?",
      "options": [
        "A testbench applies stimulus, checks DUT behavior, and helps validate functionality before synthesis or silicon.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "A testbench applies stimulus, checks DUT behavior, and helps validate functionality before synthesis or silicon."
    },
    {
      "category": "Verilog",
      "question": "What is a race condition in RTL simulation?",
      "options": [
        "A race condition happens when multiple procedural blocks update and read signals in an order-dependent way within the same simulation time, producing unpredictable results.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "A race condition happens when multiple procedural blocks update and read signals in an order-dependent way within the same simulation time, producing unpredictable results."
    },
    {
      "category": "Verilog",
      "question": "How is a synchronous reset different from an asynchronous reset?",
      "options": [
        "A synchronous reset is sampled only on the active clock edge, while an asynchronous reset can reset state immediately when asserted independent of the clock.",
        "It is mainly a packaging issue unrelated to the circuit.",
        "It applies only after tapeout and never in design interviews.",
        "It means the design has no timing constraints."
      ],
      "correct": 0,
      "explanation": "A synchronous reset is sampled only on the active clock edge, while an asynchronous reset can reset state immediately when asserted independent of the clock."
    },
    {
      "category": "VLSI",
      "question": "Dynamic power is proportional to:",
      "options": [
        "CV^2f activity",
        "Only temperature",
        "Only transistor count",
        "Only package inductance"
      ],
      "correct": 0,
      "explanation": "Classically, dynamic power depends on switching activity, capacitance, voltage squared, and frequency."
    },
    {
      "category": "VLSI",
      "question": "Reducing clock frequency can directly fix:",
      "options": [
        "All hold violations",
        "Many setup issues",
        "DIBL",
        "IR drop completely"
      ],
      "correct": 1,
      "explanation": "Lower frequency relaxes setup timing but does not inherently solve hold timing."
    }
  ]
};

const videoSections = [
  {
    "topic": "Verilog / RTL basics",
    "summary": "Good for syntax, always blocks, testbenches, FSMs, and coding style.",
    "links": [
      {
        "title": "YouTube search: Verilog tutorial for beginners",
        "url": "https://www.youtube.com/results?search_query=verilog+tutorial+for+beginners"
      },
      {
        "title": "YouTube search: FSM design in Verilog",
        "url": "https://www.youtube.com/results?search_query=fsm+design+in+verilog"
      },
      {
        "title": "YouTube search: Verilog testbench tutorial",
        "url": "https://www.youtube.com/results?search_query=verilog+testbench+tutorial"
      }
    ]
  },
  {
    "topic": "Digital logic fundamentals",
    "summary": "Brush up Boolean algebra, K-maps, flip-flops, counters, timing, and FSM basics.",
    "links": [
      {
        "title": "YouTube search: Digital logic design full course",
        "url": "https://www.youtube.com/results?search_query=digital+logic+design+full+course"
      },
      {
        "title": "YouTube search: Setup and hold time explained",
        "url": "https://www.youtube.com/results?search_query=setup+hold+time+explained"
      },
      {
        "title": "YouTube search: Flip flop and latch tutorial",
        "url": "https://www.youtube.com/results?search_query=flip+flop+and+latch+tutorial"
      }
    ]
  },
  {
    "topic": "Analog design basics",
    "summary": "Focus on op-amps, current mirrors, MOSFET models, differential pair, and stability.",
    "links": [
      {
        "title": "YouTube search: Analog electronics op-amp tutorial",
        "url": "https://www.youtube.com/results?search_query=analog+electronics+opamp+tutorial"
      },
      {
        "title": "YouTube search: Current mirror explained",
        "url": "https://www.youtube.com/results?search_query=current+mirror+explained"
      },
      {
        "title": "YouTube search: Phase margin compensation tutorial",
        "url": "https://www.youtube.com/results?search_query=phase+margin+compensation+tutorial"
      }
    ]
  },
  {
    "topic": "VLSI / STA / physical design",
    "summary": "Good for timing closure, PVT, clocking, power, floorplan and signoff concepts.",
    "links": [
      {
        "title": "YouTube search: Static timing analysis tutorial",
        "url": "https://www.youtube.com/results?search_query=static+timing+analysis+tutorial"
      },
      {
        "title": "YouTube search: VLSI physical design basics",
        "url": "https://www.youtube.com/results?search_query=vlsi+physical+design+basics"
      },
      {
        "title": "YouTube search: CMOS dynamic and static power",
        "url": "https://www.youtube.com/results?search_query=cmos+dynamic+static+power"
      }
    ]
  },
  {
    "topic": "Computer architecture basics",
    "summary": "Cover pipelines, cache, branch prediction, AMAT, hazards, and multicore concepts.",
    "links": [
      {
        "title": "YouTube search: Computer architecture full course",
        "url": "https://www.youtube.com/results?search_query=computer+architecture+full+course"
      },
      {
        "title": "YouTube search: Cache memory explained",
        "url": "https://www.youtube.com/results?search_query=cache+memory+explained"
      },
      {
        "title": "YouTube search: Pipeline hazards tutorial",
        "url": "https://www.youtube.com/results?search_query=pipeline+hazards+tutorial"
      }
    ]
  },
  {
    "topic": "Behavioral and communication prep",
    "summary": "Useful for STAR answers, project storytelling, and MNC interview soft skills.",
    "links": [
      {
        "title": "YouTube search: STAR interview method engineering",
        "url": "https://www.youtube.com/results?search_query=STAR+interview+method+engineering"
      },
      {
        "title": "YouTube search: How to explain projects in interviews",
        "url": "https://www.youtube.com/results?search_query=how+to+explain+projects+in+interviews"
      },
      {
        "title": "YouTube search: Behavioral interview for engineers",
        "url": "https://www.youtube.com/results?search_query=behavioral+interview+for+engineers"
      }
    ]
  }
];

const analyticalQuestions = [
  {
    "category": "Series",
    "question": "What is the next number in the series: 5, 8, 11, 14, ?",
    "options": [
      "17",
      "16",
      "20",
      "15"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 6, 9, 12, 15, ?",
    "options": [
      "18",
      "17",
      "21",
      "16"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 7, 10, 13, 16, ?",
    "options": [
      "19",
      "18",
      "22",
      "17"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 8, 11, 14, 17, ?",
    "options": [
      "20",
      "19",
      "23",
      "18"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 9, 12, 15, 18, ?",
    "options": [
      "21",
      "20",
      "24",
      "19"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 10, 13, 16, 19, ?",
    "options": [
      "22",
      "21",
      "25",
      "20"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 11, 14, 17, 20, ?",
    "options": [
      "23",
      "22",
      "26",
      "21"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 12, 15, 18, 21, ?",
    "options": [
      "24",
      "23",
      "27",
      "22"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 13, 16, 19, 22, ?",
    "options": [
      "25",
      "24",
      "28",
      "23"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 14, 17, 20, 23, ?",
    "options": [
      "26",
      "25",
      "29",
      "24"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 15, 18, 21, 24, ?",
    "options": [
      "27",
      "26",
      "30",
      "25"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 16, 19, 22, 25, ?",
    "options": [
      "28",
      "27",
      "31",
      "26"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 17, 20, 23, 26, ?",
    "options": [
      "29",
      "28",
      "32",
      "27"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 18, 21, 24, 27, ?",
    "options": [
      "30",
      "29",
      "33",
      "28"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Series",
    "question": "What is the next number in the series: 19, 22, 25, 28, ?",
    "options": [
      "31",
      "30",
      "34",
      "29"
    ],
    "correct": 0,
    "explanation": "It is an arithmetic progression with common difference 3."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 30, how many are design engineers?",
    "options": [
      "12",
      "18",
      "24",
      "6"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 35, how many are design engineers?",
    "options": [
      "14",
      "21",
      "28",
      "7"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 40, how many are design engineers?",
    "options": [
      "16",
      "24",
      "32",
      "8"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 45, how many are design engineers?",
    "options": [
      "18",
      "27",
      "36",
      "9"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 50, how many are design engineers?",
    "options": [
      "20",
      "30",
      "40",
      "10"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 55, how many are design engineers?",
    "options": [
      "22",
      "33",
      "44",
      "11"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 60, how many are design engineers?",
    "options": [
      "24",
      "36",
      "48",
      "12"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 65, how many are design engineers?",
    "options": [
      "26",
      "39",
      "52",
      "13"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 70, how many are design engineers?",
    "options": [
      "28",
      "42",
      "56",
      "14"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 75, how many are design engineers?",
    "options": [
      "30",
      "45",
      "60",
      "15"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 80, how many are design engineers?",
    "options": [
      "32",
      "48",
      "64",
      "16"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 85, how many are design engineers?",
    "options": [
      "34",
      "51",
      "68",
      "17"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 90, how many are design engineers?",
    "options": [
      "36",
      "54",
      "72",
      "18"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 95, how many are design engineers?",
    "options": [
      "38",
      "57",
      "76",
      "19"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Ratios",
    "question": "A chip team has design:verification engineers in ratio 2:3. If total engineers are 100, how many are design engineers?",
    "options": [
      "40",
      "60",
      "80",
      "20"
    ],
    "correct": 0,
    "explanation": "Design fraction is 2/5 of total."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Logic",
    "question": "Only one of the four statements is true. A: 'B is true' B: 'C is true' C: 'D is false' D: 'A is false'. Which statement is true?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": 3,
    "explanation": "Assuming D is true makes A false, then B false, then C false, so exactly one statement is true."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 3 hours and Engineer B in 4 hours. Working together, approximately how many hours do they need?",
    "options": [
      "1.71",
      "3",
      "4",
      "3.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 4 hours and Engineer B in 5 hours. Working together, approximately how many hours do they need?",
    "options": [
      "2.22",
      "4",
      "5",
      "4.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 5 hours and Engineer B in 6 hours. Working together, approximately how many hours do they need?",
    "options": [
      "2.73",
      "5",
      "6",
      "5.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 6 hours and Engineer B in 7 hours. Working together, approximately how many hours do they need?",
    "options": [
      "3.23",
      "6",
      "7",
      "6.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 7 hours and Engineer B in 8 hours. Working together, approximately how many hours do they need?",
    "options": [
      "3.73",
      "7",
      "8",
      "7.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 8 hours and Engineer B in 9 hours. Working together, approximately how many hours do they need?",
    "options": [
      "4.24",
      "8",
      "9",
      "8.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 9 hours and Engineer B in 10 hours. Working together, approximately how many hours do they need?",
    "options": [
      "4.74",
      "9",
      "10",
      "9.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 10 hours and Engineer B in 11 hours. Working together, approximately how many hours do they need?",
    "options": [
      "5.24",
      "10",
      "11",
      "10.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 11 hours and Engineer B in 12 hours. Working together, approximately how many hours do they need?",
    "options": [
      "5.74",
      "11",
      "12",
      "11.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 12 hours and Engineer B in 13 hours. Working together, approximately how many hours do they need?",
    "options": [
      "6.24",
      "12",
      "13",
      "12.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 13 hours and Engineer B in 14 hours. Working together, approximately how many hours do they need?",
    "options": [
      "6.74",
      "13",
      "14",
      "13.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 14 hours and Engineer B in 15 hours. Working together, approximately how many hours do they need?",
    "options": [
      "7.24",
      "14",
      "15",
      "14.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 15 hours and Engineer B in 16 hours. Working together, approximately how many hours do they need?",
    "options": [
      "7.74",
      "15",
      "16",
      "15.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 16 hours and Engineer B in 17 hours. Working together, approximately how many hours do they need?",
    "options": [
      "8.24",
      "16",
      "17",
      "16.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  },
  {
    "category": "Work / Speed",
    "question": "Engineer A finishes a debug task in 17 hours and Engineer B in 18 hours. Working together, approximately how many hours do they need?",
    "options": [
      "8.74",
      "17",
      "18",
      "17.5"
    ],
    "correct": 0,
    "explanation": "Use combined rate = 1/a + 1/b, then invert."
  }
];

