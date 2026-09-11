import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

/* =========================================================
   DATA (Pranav's placeholder visual data)
========================================================= */

const districtData = [
  { district: "Pune", value: 82 },
  { district: "Nashik", value: 68 },
  { district: "Nagpur", value: 75 },
  { district: "Satara", value: 42 },
  { district: "Solapur", value: 35 },
  { district: "Kolhapur", value: 71 },
];

const healthTrend = [
  { month: "Jan", value: 52 },
  { month: "Feb", value: 58 },
  { month: "Mar", value: 55 },
  { month: "Apr", value: 64 },
  { month: "May", value: 69 },
  { month: "Jun", value: 73 },
];

/* =========================================================
   ICON COMPONENT
========================================================= */

function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    upload: (
      <svg {...common}>
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 20h14" />
      </svg>
    ),

    file: (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h6" />
      </svg>
    ),

    sparkles: (
      <svg {...common}>
        <path d="m12 3-1.4 4.2L6.5 9l4.1 1.8L12 15l1.4-4.2L17.5 9l-4.1-1.8Z" />
        <path d="m19 14-.7 2.3L16 17l2.3.7L19 20l.7-2.3L22 17l-2.3-.7Z" />
        <path d="m5 3-.5 1.5L3 5l1.5.5L5 7l.5-1.5L7 5l-1.5-.5Z" />
      </svg>
    ),

    chart: (
      <svg {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 3-4 3 2 5-7" />
      </svg>
    ),

    database: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </svg>
    ),

    search: (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    ),

    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),

    alert: (
      <svg {...common}>
        <path d="M10.3 3.9 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),

    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),

    brain: (
      <svg {...common}>
        <path d="M9.5 4a3 3 0 0 0-5.5 2c0 .5.1 1 .4 1.4A3.5 3.5 0 0 0 5 14.2V15a3 3 0 0 0 4.5 2.6V20" />
        <path d="M14.5 4a3 3 0 0 1 5.5 2c0 .5-.1 1-.4 1.4a3.5 3.5 0 0 1-.6 6.8V15a3 3 0 0 1-4.5 2.6V20" />
        <path d="M9 7h1" />
        <path d="M14 7h1" />
        <path d="M9 12h1" />
        <path d="M14 12h1" />
        <path d="M12 4v15" />
      </svg>
    ),
  };

  return icons[name] || null;
}

/* =========================================================
   CUSTOM DATASENSE AI LOGO
========================================================= */

function DataSenseLogo({ size = 54 }) {
  return (
    <div
      className="datasense-logo"
      style={{ width: size, height: size }}
      aria-label="DataSense AI"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <linearGradient id="logoGradient" x1="15" y1="15" x2="85" y2="85">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="48%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          <linearGradient id="networkGradient" x1="40" y1="70" x2="82" y2="18">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>

          <radialGradient id="logoGlow">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="40%" stopColor="#67E8F9" stopOpacity=".9" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="45"
          fill="#11152A"
          stroke="url(#logoGradient)"
          strokeWidth="3"
        />

        <circle
          cx="50"
          cy="50"
          r="31"
          fill="url(#logoGradient)"
          opacity=".16"
        />

        <path
          d="M22 55C26 72 39 82 55 81C69 80 79 71 83 58"
          stroke="#FFFFFF"
          strokeOpacity=".7"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M25 43C30 28 43 20 58 20C70 20 80 27 84 37"
          stroke="#8B5CF6"
          strokeOpacity=".65"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M30 61L42 52L53 57L63 42L75 48"
          stroke="url(#networkGradient)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="30" cy="61" r="3.5" fill="#22D3EE" />
        <circle cx="42" cy="52" r="3.5" fill="#67E8F9" />
        <circle cx="53" cy="57" r="3.5" fill="#A78BFA" />
        <circle cx="63" cy="42" r="3.5" fill="#C4B5FD" />
        <circle cx="75" cy="48" r="3.5" fill="#22D3EE" />

        <path
          d="M61 39L67 29L73 34L80 22"
          stroke="#67E8F9"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle cx="61" cy="39" r="2.5" fill="#FFFFFF" />
        <circle cx="67" cy="29" r="2.5" fill="#22D3EE" />
        <circle cx="73" cy="34" r="2.5" fill="#A78BFA" />
        <circle cx="80" cy="22" r="3" fill="#67E8F9" />

        <circle cx="49" cy="49" r="12" fill="url(#logoGlow)" opacity=".9" />

        <path
          d="M49 42L51 48L57 50L51 52L49 58L47 52L41 50L47 48Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState(
    "Which districts show unusual healthcare patterns?"
  );
  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  // NEW: State to securely hold Parag's actual backend data!
  const [backendData, setBackendData] = useState(null); 

  const quickQuestions = [
    "Which districts show unusual healthcare patterns?",
    "Which districts have the lowest healthcare availability?",
    "What are the major anomalies in this dataset?",
    "Show me the most important trends.",
  ];

  /* =======================================================
     FILE HANDLING
  ======================================================= */

  const processFile = (selectedFile) => {
    if (!selectedFile) return;

    const validExtensions = [".csv", ".xls", ".xlsx"];
    const fileName = selectedFile.name.toLowerCase();

    const valid = validExtensions.some((extension) =>
      fileName.endsWith(extension)
    );

    if (!valid) {
      alert("Please upload a CSV or Excel file.");
      return;
    }

    setFile(selectedFile);
    setAnalyzed(false);
    setBackendData(null); // Clear old data when a new file is added
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    processFile(selectedFile);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setDragActive(false);

    const droppedFile = event.dataTransfer.files?.[0];
    processFile(droppedFile);
  };

  /* =======================================================
     ANALYZE DATASET (REAL BACKEND CONNECTION TO PARAG)
  ======================================================= */

  const analyzeDataset = async () => {
    if (!file) {
      alert("Please upload a dataset first.");
      return;
    }

    setLoading(true);

    // Prepare the file to be sent to FastAPI
    const formData = new FormData();
    formData.append("file", file); // Must match Parag's FastAPI parameter

    try {
      // Hit Parag's local IP address
      const response = await fetch("http://11.11.2.155:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      // Capture the real data from the backend
      const data = await response.json();
      console.log("SUCCESS! Real data from Parag's backend:", data);
      
      // Save it to state so Pranav can map it to charts later
      setBackendData(data); 

      // Trigger the UI to reveal the results section
      setAnalyzed(true);

      setTimeout(() => {
        document
          .getElementById("results")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);

    } catch (error) {
      console.error("Connection failed:", error);
      alert("Could not connect to Parag's backend. Check if his server is running on 0.0.0.0!");
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     HELPERS
  ======================================================= */

  const formatFileSize = (bytes) => {
    if (!bytes) return "0 KB";

    const kb = bytes / 1024;

    if (kb < 1024) {
      return `${kb.toFixed(1)} KB`;
    }

    return `${(kb / 1024).toFixed(1)} MB`;
  };

  return (
    <div className="app">
      {/* ===================================================
         NAVBAR
      =================================================== */}

      <nav className="navbar">
        <div className="nav-inner">
          <div className="brand">
            <div className="brand-logo">
              <DataSenseLogo size={48} />
            </div>

            <div className="brand-text">
              <strong>DataSense</strong>
              <span>AI ANALYST</span>
            </div>
          </div>

          <div className="nav-right">
            <div className="ai-status">
              <span className="status-dot"></span>
              AI Online
            </div>

            <button className="nav-button">
              <Icon name="brain" size={17} />
              Autonomous Analysis
            </button>
          </div>
        </div>
      </nav>

      {/* ===================================================
         HERO
      =================================================== */}

      <section className="hero">
        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-particle particle-one"></div>
        <div className="hero-particle particle-two"></div>
        <div className="hero-particle particle-three"></div>
        <div className="hero-particle particle-four"></div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">
              <Icon name="sparkles" size={15} />
            </span>

            <span>AI-POWERED DATA INTELLIGENCE</span>

            <span className="badge-live">LIVE</span>
          </div>

          <h1>
            Analyze your data
            <br />
            <span>automatically.</span>
          </h1>

          <p>
            Upload your dataset and let an autonomous AI analyst
            <br className="desktop-break" />
            inspect, clean, analyze and explain your data.
          </p>

          <div className="hero-actions">
            <a href="#workspace" className="hero-primary">
              <Icon name="upload" size={18} />
              Start analyzing
              <Icon name="arrow" size={17} />
            </a>

            <div className="hero-trust">
              <span>
                <Icon name="check" size={14} />
                CSV & Excel
              </span>

              <span>
                <Icon name="check" size={14} />
                AI insights
              </span>

              <span>
                <Icon name="check" size={14} />
                Instant analysis
              </span>
            </div>
          </div>
        </div>

        {/* Floating analytics visual */}

        <div className="hero-dashboard">
          <div className="floating-card floating-card-top">
            <div className="mini-icon">
              <Icon name="chart" size={17} />
            </div>

            <div>
              <small>Data Quality</small>
              <strong>94.8%</strong>
            </div>

            <span className="mini-up">+12%</span>
          </div>

          <div className="hero-data-orb">
            <div className="orb-ring ring-one"></div>
            <div className="orb-ring ring-two"></div>
            <div className="orb-ring ring-three"></div>

            <div className="orb-core">
              <DataSenseLogo size={82} />
            </div>

            <span className="orb-node node-one"></span>
            <span className="orb-node node-two"></span>
            <span className="orb-node node-three"></span>
            <span className="orb-node node-four"></span>
          </div>

          <div className="floating-card floating-card-bottom">
            <div className="mini-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div>
              <small>AI Insights</small>
              <strong>24 detected</strong>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
          <small>Scroll to analyze</small>
        </div>
      </section>

      {/* ===================================================
         WORKSPACE
      =================================================== */}

      <main className="workspace" id="workspace">
        {/* =================================================
            STEP 01
        ================================================= */}

        <section className="workspace-card upload-card">
          <div className="section-heading">
            <div className="step-number">
              <span>01</span>
            </div>

            <div>
              <div className="section-title-row">
                <h2>Upload your dataset</h2>

                <span className="heading-pill">
                  <Icon name="database" size={13} />
                  Secure processing
                </span>
              </div>

              <p>
                CSV and Excel files are supported. Drop your data and let AI
                handle the rest.
              </p>
            </div>
          </div>

          <label
            className={`upload-area ${dragActive ? "drag-active" : ""} ${
              file ? "has-file" : ""
            }`}
            onDragEnter={(event) => {
              event.preventDefault();
              setDragActive(true);
            }}
            onDragOver={(event) => {
              event.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={(event) => {
              event.preventDefault();
              setDragActive(false);
            }}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".csv,.xls,.xlsx"
              onChange={handleFileChange}
            />

            {!file ? (
              <>
                <div className="upload-icon-wrap">
                  <div className="upload-icon-glow"></div>

                  <div className="upload-icon">
                    <Icon name="upload" size={29} />
                  </div>
                </div>

                <h3>Drop your dataset here</h3>

                <p>
                  or <span>browse files</span> from your computer
                </p>

                <div className="file-types">
                  <span>CSV</span>
                  <span>XLS</span>
                  <span>XLSX</span>
                  <em>Maximum 50 MB</em>
                </div>
              </>
            ) : (
              <div className="selected-file">
                <div className="selected-file-icon">
                  <Icon name="file" size={28} />
                </div>

                <div className="selected-file-info">
                  <strong>{file.name}</strong>

                  <span>
                    {formatFileSize(file.size)} • Ready for analysis
                  </span>
                </div>

                <div className="file-ready">
                  <Icon name="check" size={17} />
                </div>
              </div>
            )}
          </label>

          {file && (
            <div className="file-action-row">
              <div className="file-confirmation">
                <span className="confirmation-dot"></span>
                Dataset uploaded successfully
              </div>

              <button
                className={`analyze-button ${loading ? "loading" : ""}`}
                onClick={analyzeDataset}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="button-spinner"></span>
                    Analyzing dataset...
                  </>
                ) : (
                  <>
                    <Icon name="sparkles" size={18} />
                    Analyze with AI
                    <Icon name="arrow" size={17} />
                  </>
                )}
              </button>
            </div>
          )}
        </section>

        {/* =================================================
            STEP 02
        ================================================= */}

        <section className="workspace-card question-card">
          <div className="section-heading">
            <div className="step-number">
              <span>02</span>
            </div>

            <div>
              <div className="section-title-row">
                <h2>Ask the data analyst</h2>

                <span className="heading-pill ai-pill">
                  <span className="tiny-pulse"></span>
                  AI ready
                </span>
              </div>

              <p>
                Ask a natural-language question about your dataset.
              </p>
            </div>
          </div>

          <div className="quick-section">
            <div className="quick-label">
              <span>QUICK QUESTIONS</span>
              <small>Choose an insight to explore</small>
            </div>

            <div className="quick-questions">
              {quickQuestions.map((item, index) => (
                <button
                  key={index}
                  className={`question-chip ${
                    question === item ? "active" : ""
                  }`}
                  onClick={() => setQuestion(item)}
                >
                  <span className="chip-number">0{index + 1}</span>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="question-box">
            <div className="question-icon">
              <Icon name="sparkles" size={19} />
            </div>

            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask anything about your dataset..."
              rows="3"
            />

            <div className="question-footer">
              <span>
                <Icon name="brain" size={14} />
                Natural language analysis
              </span>

              <span className="question-count">
                {question.length}/500
              </span>
            </div>
          </div>
        </section>

        {/* =================================================
            STEP 03
        ================================================= */}

        {analyzed && (
          <section className="results-section" id="results">
            <div className="results-header">
              <div>
                <div className="results-kicker">
                  <span></span>
                  ANALYSIS COMPLETE
                </div>

                <h2>Your data, explained.</h2>

                <p>
                  AI has inspected your dataset and identified the most
                  important patterns and anomalies.
                </p>
              </div>

              <div className="analysis-complete">
                <Icon name="check" size={17} />
                Analysis complete
              </div>
            </div>

            {/* Stats */}

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-top">
                  <span>Rows analyzed</span>

                  <div className="stat-icon purple">
                    <Icon name="database" size={18} />
                  </div>
                </div>

                <strong>12,450</strong>

                <small>
                  <span className="positive">+8.2%</span> vs previous
                </small>
              </div>

              <div className="stat-card">
                <div className="stat-top">
                  <span>Columns</span>

                  <div className="stat-icon cyan">
                    <Icon name="chart" size={18} />
                  </div>
                </div>

                <strong>18</strong>

                <small>All columns detected</small>
              </div>

              <div className="stat-card">
                <div className="stat-top">
                  <span>Data quality</span>

                  <div className="stat-icon green">
                    <Icon name="check" size={18} />
                  </div>
                </div>

                <strong>94.8%</strong>

                <small>
                  <span className="positive">Excellent</span>
                </small>
              </div>

              <div className="stat-card">
                <div className="stat-top">
                  <span>Anomalies</span>

                  <div className="stat-icon orange">
                    <Icon name="alert" size={18} />
                  </div>
                </div>

                <strong>24</strong>

                <small>Require attention</small>
              </div>
            </div>

            {/* Dataset understanding */}

            <div className="insight-card">
              <div className="insight-icon">
                <Icon name="sparkles" size={21} />
              </div>

              <div className="insight-content">
                <span className="insight-label">
                  AI DATASET UNDERSTANDING
                </span>

                <h3>Healthcare Availability Dataset</h3>

                <p>
                  This dataset contains district-level healthcare
                  availability metrics. AI identified meaningful differences
                  between districts, with several regions showing unusually
                  low availability.
                </p>

                <div className="insight-tags">
                  <span>Healthcare</span>
                  <span>District analysis</span>
                  <span>Availability</span>
                  <span>Trend detection</span>
                </div>
              </div>
            </div>

            {/* Charts */}

            <div className="charts-grid">
              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <span className="chart-kicker">DISTRICT ANALYSIS</span>
                    <h3>Healthcare availability</h3>
                  </div>

                  <span className="chart-badge">
                    <span></span>
                    Current
                  </span>
                </div>

                <div className="chart-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={districtData}
                      margin={{
                        top: 10,
                        right: 5,
                        left: -20,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                      />

                      <XAxis
                        dataKey="district"
                        axisLine={false}
                        tickLine={false}
                      />

                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 100]}
                      />

                      <Tooltip
                        cursor={{ opacity: 0.08 }}
                        contentStyle={{
                          borderRadius: "14px",
                          border: "1px solid rgba(124,58,237,.15)",
                          boxShadow: "0 10px 30px rgba(0,0,0,.12)",
                        }}
                      />

                      <Bar
                        dataKey="value"
                        fill="#7c3aed"
                        radius={[8, 8, 0, 0]}
                        barSize={32}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <span className="chart-kicker">TREND DETECTION</span>
                    <h3>Healthcare trend</h3>
                  </div>

                  <span className="trend-value">+40.4%</span>
                </div>

                <div className="chart-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={healthTrend}
                      margin={{
                        top: 10,
                        right: 5,
                        left: -20,
                        bottom: 0,
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="trendGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#06b6d4"
                            stopOpacity={0.35}
                          />
                          <stop
                            offset="100%"
                            stopColor="#06b6d4"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                      />

                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                      />

                      <YAxis
                        axisLine={false}
                        tickLine={false}
                      />

                      <Tooltip
                        contentStyle={{
                          borderRadius: "14px",
                          border: "1px solid rgba(6,182,212,.15)",
                          boxShadow: "0 10px 30px rgba(0,0,0,.12)",
                        }}
                      />

                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#06b6d4"
                        strokeWidth={3}
                        fill="url(#trendGradient)"
                        dot={{
                          r: 4,
                          fill: "#06b6d4",
                        }}
                        activeDot={{
                          r: 6,
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Anomalies */}

            <div className="lower-grid">
              <div className="anomaly-card">
                <div className="card-title-row">
                  <div>
                    <span className="chart-kicker">AI DETECTION</span>
                    <h3>Important anomalies</h3>
                  </div>

                  <span className="count-badge">24 found</span>
                </div>

                <div className="anomaly-list">
                  <div className="anomaly-item">
                    <div className="anomaly-marker critical">
                      <Icon name="alert" size={16} />
                    </div>

                    <div>
                      <strong>Solapur availability is unusually low</strong>
                      <p>
                        Healthcare availability is significantly below the
                        dataset average.
                      </p>
                    </div>

                    <span className="severity high">HIGH</span>
                  </div>

                  <div className="anomaly-item">
                    <div className="anomaly-marker warning">
                      <Icon name="alert" size={16} />
                    </div>

                    <div>
                      <strong>Satara shows a similar pattern</strong>
                      <p>
                        Values are lower than expected compared with nearby
                        districts.
                      </p>
                    </div>

                    <span className="severity medium">MEDIUM</span>
                  </div>

                  <div className="anomaly-item">
                    <div className="anomaly-marker normal">
                      <Icon name="check" size={16} />
                    </div>

                    <div>
                      <strong>Pune is performing above average</strong>
                      <p>
                        Availability levels are consistently stronger than
                        the overall dataset.
                      </p>
                    </div>

                    <span className="severity low">POSITIVE</span>
                  </div>
                </div>
              </div>

              {/* AI Explanation */}

              <div className="explanation-card">
                <div className="explanation-glow"></div>

                <div className="explanation-header">
                  <div className="explanation-icon">
                    <Icon name="sparkles" size={20} />
                  </div>

                  <div>
                    <span>AI EXPLANATION</span>
                    <h3>What should you know?</h3>
                  </div>
                </div>

                <p>
                  The strongest pattern is the large variation in healthcare
                  availability across districts. Pune and Nagpur perform
                  relatively well, while Solapur and Satara require closer
                  attention.
                </p>

                <div className="recommendation">
                  <div className="recommendation-icon">
                    <Icon name="arrow" size={17} />
                  </div>

                  <div>
                    <strong>Recommended focus</strong>
                    <span>
                      Investigate resource distribution in low-performing
                      districts.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pipeline */}

            <div className="pipeline-card">
              <div className="pipeline-header">
                <div>
                  <span className="chart-kicker">AUTONOMOUS PIPELINE</span>
                  <h3>How DataSense analyzed your data</h3>
                </div>

                <span className="pipeline-status">
                  <span></span>
                  Completed
                </span>
              </div>

              <div className="pipeline">
                <div className="pipeline-step completed">
                  <div className="pipeline-number">
                    <Icon name="check" size={15} />
                  </div>

                  <strong>Ingest</strong>
                  <span>Dataset loaded</span>
                </div>

                <div className="pipeline-line completed"></div>

                <div className="pipeline-step completed">
                  <div className="pipeline-number">
                    <Icon name="check" size={15} />
                  </div>

                  <strong>Clean</strong>
                  <span>Quality checked</span>
                </div>

                <div className="pipeline-line completed"></div>

                <div className="pipeline-step completed">
                  <div className="pipeline-number">
                    <Icon name="check" size={15} />
                  </div>

                  <strong>Analyze</strong>
                  <span>Patterns detected</span>
                </div>

                <div className="pipeline-line completed"></div>

                <div className="pipeline-step completed">
                  <div className="pipeline-number">
                    <Icon name="check" size={15} />
                  </div>

                  <strong>Explain</strong>
                  <span>Insights generated</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ===================================================
         FOOTER
      =================================================== */}

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <DataSenseLogo size={38} />

            <div>
              <strong>DataSense</strong>
              <span>Autonomous Data Intelligence</span>
            </div>
          </div>

          <p>
            Turn raw data into clear, actionable insights.
          </p>

          <span className="footer-copy">
            © 2026 DataSense AI
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
