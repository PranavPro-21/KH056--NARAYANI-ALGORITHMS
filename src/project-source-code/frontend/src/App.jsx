import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import "./App.css";

/* =====================================================
   DEMO DATA
===================================================== */

const districtData = [
  { name: "Pune", hospitals: 82 },
  { name: "Nashik", hospitals: 68 },
  { name: "Nagpur", hospitals: 75 },
  { name: "Satara", hospitals: 42 },
  { name: "Solapur", hospitals: 35 },
  { name: "Kolhapur", hospitals: 71 },
];

const healthTrend = [
  { name: "Jan", value: 52 },
  { name: "Feb", value: 58 },
  { name: "Mar", value: 55 },
  { name: "Apr", value: 64 },
  { name: "May", value: 69 },
  { name: "Jun", value: 73 },
];

const quickQuestions = [
  "Which districts show unusual healthcare patterns?",
  "Which districts have the lowest healthcare availability?",
  "What are the major anomalies in this dataset?",
  "Show me the most important trends.",
];

/* =====================================================
   DATASENSE AI LOGO
===================================================== */

function DataSenseLogo({ small = false }) {
  return (
    <div className={`datasense-logo ${small ? "logo-small" : ""}`}>
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="DataSense AI Logo"
      >
        <defs>
          <linearGradient
            id="logoGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#30246b" />
            <stop offset="45%" stopColor="#5b3cc4" />
            <stop offset="75%" stopColor="#168cc4" />
            <stop offset="100%" stopColor="#20c6cf" />
          </linearGradient>

          <radialGradient id="logoGlow">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#b8ffff" />
            <stop offset="100%" stopColor="#42dde6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer logo */}
        <circle
          cx="150"
          cy="150"
          r="124"
          fill="url(#logoGradient)"
        />

        {/* Inner circle */}
        <circle
          cx="150"
          cy="150"
          r="98"
          fill="none"
          stroke="white"
          strokeWidth="10"
        />

        {/* Small data node */}
        <circle
          cx="78"
          cy="105"
          r="15"
          fill="white"
        />

        {/* AI network */}
        <g
          fill="none"
          stroke="#61d8e8"
          strokeWidth="3"
        >
          <path d="M135 130 L155 105 L178 116 L198 92 L220 105" />
          <path d="M155 105 L165 82 L188 72 L205 58" />
          <path d="M178 116 L188 138 L210 125 L225 110" />
          <path d="M198 92 L214 78 L230 76" />
        </g>

        {/* Network nodes */}
        <g fill="#e4ffff">
          <circle cx="135" cy="130" r="5" />
          <circle cx="155" cy="105" r="5" />
          <circle cx="178" cy="116" r="5" />
          <circle cx="198" cy="92" r="5" />
          <circle cx="220" cy="105" r="5" />
          <circle cx="165" cy="82" r="5" />
          <circle cx="188" cy="72" r="5" />
          <circle cx="205" cy="58" r="5" />
          <circle cx="188" cy="138" r="5" />
          <circle cx="210" cy="125" r="5" />
          <circle cx="225" cy="110" r="5" />
        </g>

        {/* Data table */}
        <g
          fill="none"
          stroke="white"
          strokeWidth="7"
        >
          <path d="M48 168 H230" />
          <path d="M48 190 H230" />
          <path d="M48 212 H230" />
          <path d="M48 234 H220" />

          <path d="M82 168 V248" />
          <path d="M117 168 V248" />
          <path d="M152 168 V248" />
          <path d="M187 168 V244" />
        </g>

        {/* AI light */}
        <circle
          cx="145"
          cy="155"
          r="42"
          fill="url(#logoGlow)"
        />

        <circle
          cx="145"
          cy="155"
          r="6"
          fill="white"
        />
      </svg>
    </div>
  );
}

/* =====================================================
   MAIN APP
===================================================== */

function App() {
  const [file, setFile] = useState(null);

  const [question, setQuestion] = useState(
    "Which districts show unusual healthcare patterns?"
  );

  const [loading, setLoading] = useState(false);

  const [analyzed, setAnalyzed] = useState(false);

  const [dragActive, setDragActive] = useState(false);

  /* ===================================================
     FILE VALIDATION
  =================================================== */

  const processFile = (selectedFile) => {
    if (!selectedFile) return;

    const fileName = selectedFile.name.toLowerCase();

    const isCsv = fileName.endsWith(".csv");
    const isExcel =
      fileName.endsWith(".xlsx") ||
      fileName.endsWith(".xls");

    if (!isCsv && !isExcel) {
      alert("Please upload a CSV or Excel file.");
      return;
    }

    setFile(selectedFile);
    setAnalyzed(false);
  };

  /* ===================================================
     NORMAL FILE UPLOAD
  =================================================== */

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    processFile(selectedFile);
  };

  /* ===================================================
     DRAG & DROP
  =================================================== */

  const handleDrop = (event) => {
    event.preventDefault();

    setDragActive(false);

    const droppedFile =
      event.dataTransfer.files[0];

    processFile(droppedFile);
  };

  /* ===================================================
     ANALYZE DATASET
  =================================================== */

  const analyzeDataset = async () => {
    if (!file) {
      alert("Please upload a dataset first.");
      return;
    }

    setLoading(true);

    /*
      Later connect this section to your Python backend.

      Example:

      const formData = new FormData();

      formData.append("file", file);
      formData.append("question", question);

      const response = await fetch(
        "http://localhost:8000/analyze",
        {
          method: "POST",
          body: formData
        }
      );

      const result = await response.json();
    */

    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 1500);
  };

  /* ===================================================
     RESET
  =================================================== */

  const resetAnalysis = () => {
    setFile(null);
    setAnalyzed(false);

    setQuestion(
      "Which districts show unusual healthcare patterns?"
    );
  };

  return (
    <div className="app">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">

        <div className="brand">

          <DataSenseLogo />

          <div className="brand-text">
            <h2>
              DataSense <span>AI</span>
            </h2>

            <p>
              Autonomous Data Analyst
            </p>
          </div>

        </div>

        <div className="status">
          <span className="status-dot"></span>
          AI Agent Online
        </div>

      </header>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero">

        {/* Animated background grid */}
        <div className="hero-grid"></div>

        {/* Floating particles */}
        <div className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="hero-orb orb-one"></div>
        <div className="hero-orb orb-two"></div>

        <div className="hero-content">

          {/* Left side */}
          <div className="hero-copy">

            <div className="hero-tag">
              <span className="pulse-dot"></span>
              ✨ AI + DATA SCIENCE
            </div>

            <h1>
              Analyze your data
              <span>
                automatically.
              </span>
            </h1>

            <p>
              Upload a CSV or Excel dataset and let
              the autonomous data analyst inspect,
              clean, analyze and explain your data.
            </p>

            <div className="hero-features">

              <div>
                <span>✓</span>
                Automatic analysis
              </div>

              <div>
                <span>✓</span>
                Anomaly detection
              </div>

              <div>
                <span>✓</span>
                AI explanations
              </div>

            </div>

          </div>


          {/* Right side analytics visualization */}
          <div className="hero-visual">

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="analytics-panel">

              <div className="analytics-header">

                <div>
                  <small>LIVE ANALYSIS</small>
                  <h3>Data Intelligence</h3>
                </div>

                <div className="live-status">
                  <span></span>
                  LIVE
                </div>

              </div>

              <div className="mini-chart">

                <div className="chart-grid"></div>

                <div className="bars">

                  <span style={{ height: "35%" }}></span>
                  <span style={{ height: "52%" }}></span>
                  <span style={{ height: "42%" }}></span>
                  <span
                    className="active"
                    style={{ height: "78%" }}
                  ></span>
                  <span style={{ height: "62%" }}></span>
                  <span style={{ height: "88%" }}></span>
                  <span style={{ height: "70%" }}></span>

                </div>

                <svg
                  className="trend"
                  viewBox="0 0 400 180"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 145 C50 125, 75 145, 110 105 C145 65, 165 110, 200 90 C240 70, 250 100, 285 60 C320 25, 345 65, 400 25"
                    fill="none"
                    stroke="#67e8f9"
                    strokeWidth="4"
                  />

                  <circle
                    cx="400"
                    cy="25"
                    r="6"
                    fill="#ffffff"
                  />
                </svg>

              </div>

              <div className="analytics-footer">

                <div>
                  <span className="tiny-dot"></span>
                  Patterns detected
                </div>

                <strong>+24.8%</strong>

              </div>

            </div>


            {/* Floating cards */}

            <div className="floating-data-card card-top">

              <div className="floating-icon">
                📊
              </div>

              <div>
                <strong>650</strong>
                <small>Rows analyzed</small>
              </div>

            </div>


            <div className="floating-data-card card-right">

              <div className="floating-icon">
                ⚡
              </div>

              <div>
                <strong>7</strong>
                <small>Anomalies found</small>
              </div>

            </div>


            <div className="floating-data-card card-bottom">

              <div className="floating-icon">
                🧠
              </div>

              <div>
                <strong>AI Insight</strong>
                <small>Pattern detected</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="container">


        {/* =================================================
            UPLOAD
        ================================================= */}

        <section className="card upload-card">

          <div className="section-title">

            <div className="number">
              01
            </div>

            <div>
              <h2>Upload Dataset</h2>

              <p>
                CSV and Excel files are supported.
              </p>
            </div>

          </div>


          <label
            className={`upload-area ${
              dragActive ? "drag-active" : ""
            }`}

            onDragOver={(event) => {
              event.preventDefault();
              setDragActive(true);
            }}

            onDragLeave={() => {
              setDragActive(false);
            }}

            onDrop={handleDrop}
          >

            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileChange}
            />

            <div className="upload-icon">

              {dragActive ? "⬇️" : "📁"}

            </div>

            <h3>

              {dragActive
                ? "Drop your dataset here"
                : file
                ? file.name
                : "Choose your dataset"}

            </h3>

            <p>

              {file
                ? "Dataset ready for analysis"
                : "Click to browse or drag & drop CSV / Excel"}

            </p>

          </label>


          {file && (

            <div className="file-info">

              <div>

                <strong>
                  Dataset selected
                </strong>

                <span>
                  {file.name}
                </span>

              </div>

              <button
                className="remove-btn"
                onClick={resetAnalysis}
              >
                Remove
              </button>

            </div>

          )}

        </section>


        {/* =================================================
            QUESTION
        ================================================= */}

        <section className="card">

          <div className="section-title">

            <div className="number">
              02
            </div>

            <div>
              <h2>
                Ask the Data Analyst
              </h2>

              <p>
                Ask a natural-language question
                about your dataset.
              </p>
            </div>

          </div>


          {/* Quick questions */}

          <div className="quick-questions">

            <span>
              QUICK QUESTIONS
            </span>

            <div className="question-chips">

              {quickQuestions.map(
                (item, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setQuestion(item)
                    }
                  >
                    {item}
                  </button>

                )
              )}

            </div>

          </div>


          <textarea
            value={question}
            onChange={(event) =>
              setQuestion(event.target.value)
            }
            placeholder="Ask something about your dataset..."
          />


          <button
            className="analyze-btn"
            onClick={analyzeDataset}
            disabled={loading}
          >

            {loading ? (
              <>
                <span className="spinner"></span>
                Analyzing dataset...
              </>
            ) : (
              <>
                🔍 Analyze Dataset
              </>
            )}

          </button>

        </section>


        {/* =================================================
            RESULTS
        ================================================= */}

        {analyzed && (

          <section className="results">


            <div className="result-heading">

              <div>

                <div className="result-tag">
                  ANALYSIS COMPLETE
                </div>

                <h2>
                  Analysis Results
                </h2>

                <p>
                  The autonomous agent inspected
                  the dataset and identified
                  important patterns.
                </p>

              </div>

              <button className="report-btn">
                📄 Download Report
              </button>

            </div>


            {/* Statistics */}

            <div className="stats-grid">

              <div className="stat-card">
                <span>Rows</span>
                <strong>650</strong>
                <small>
                  Records analyzed
                </small>
              </div>

              <div className="stat-card">
                <span>Columns</span>
                <strong>12</strong>
                <small>
                  Features detected
                </small>
              </div>

              <div className="stat-card">
                <span>Missing Values</span>
                <strong>18</strong>
                <small>
                  Values cleaned
                </small>
              </div>

              <div className="stat-card anomaly">
                <span>Anomalies</span>
                <strong>7</strong>
                <small>
                  Unusual patterns
                </small>
              </div>

            </div>


            {/* Dataset Understanding */}

            <div className="card">

              <div className="section-title">

                <div className="number">
                  03
                </div>

                <div>
                  <h2>
                    Dataset Understanding
                  </h2>

                  <p>
                    Automatically detected
                    structure and data quality.
                  </p>
                </div>

              </div>


              <div className="quality-grid">

                <div>
                  <span>Dataset</span>
                  <strong>
                    {file?.name}
                  </strong>
                </div>

                <div>
                  <span>Data Type</span>
                  <strong>
                    Healthcare
                  </strong>
                </div>

                <div>
                  <span>Numeric Columns</span>
                  <strong>9</strong>
                </div>

                <div>
                  <span>Categorical Columns</span>
                  <strong>3</strong>
                </div>

              </div>

            </div>


            {/* Charts */}

            <div className="charts-grid">

              <div className="card chart-card">

                <div className="chart-header">

                  <div>
                    <h3>
                      Healthcare Availability
                    </h3>

                    <p>
                      Hospital availability
                      by district
                    </p>
                  </div>

                  <span>📊</span>

                </div>


                <ResponsiveContainer
                  width="100%"
                  height={300}
                >

                  <BarChart
                    data={districtData}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e8eaf0"
                    />

                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#667085" }}
                    />

                    <YAxis
                      tick={{ fill: "#667085" }}
                    />

                    <Tooltip />

                    <Bar
                      dataKey="hospitals"
                      fill="#6366f1"
                      radius={[
                        7,
                        7,
                        0,
                        0,
                      ]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>


              <div className="card chart-card">

                <div className="chart-header">

                  <div>
                    <h3>
                      Healthcare Trend
                    </h3>

                    <p>
                      Monthly health indicator
                    </p>
                  </div>

                  <span>📈</span>

                </div>


                <ResponsiveContainer
                  width="100%"
                  height={300}
                >

                  <LineChart
                    data={healthTrend}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e8eaf0"
                    />

                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#667085" }}
                    />

                    <YAxis
                      tick={{ fill: "#667085" }}
                    />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#06b6d4"
                      strokeWidth={4}
                      dot={{
                        r: 5,
                        fill: "#06b6d4",
                      }}
                    />

                  </LineChart>

                </ResponsiveContainer>

              </div>

            </div>


            {/* Anomalies */}

            <div className="card anomaly-section">

              <div className="section-title">

                <div className="number">
                  04
                </div>

                <div>

                  <h2>
                    Unusual Patterns Detected
                  </h2>

                  <p>
                    Potential anomalies
                    identified by the agent.
                  </p>

                </div>

              </div>


              <div className="anomaly-list">

                <div className="anomaly-item">

                  <span className="warning">
                    !
                  </span>

                  <div>

                    <strong>
                      Solapur
                    </strong>

                    <p>
                      Hospital availability
                      is significantly lower
                      than the dataset average.
                    </p>

                  </div>

                  <span className="severity">
                    High
                  </span>

                </div>


                <div className="anomaly-item">

                  <span className="warning">
                    !
                  </span>

                  <div>

                    <strong>
                      Satara
                    </strong>

                    <p>
                      Healthcare indicators
                      show an unusual deviation
                      from nearby districts.
                    </p>

                  </div>

                  <span className="severity medium">
                    Medium
                  </span>

                </div>


                <div className="anomaly-item">

                  <span className="warning">
                    !
                  </span>

                  <div>

                    <strong>
                      District pattern
                    </strong>

                    <p>
                      Multiple healthcare
                      variables show correlated
                      unusual values.
                    </p>

                  </div>

                  <span className="severity">
                    High
                  </span>

                </div>

              </div>

            </div>


            {/* AI Explanation */}

            <div className="card ai-summary">

              <div className="ai-icon">
                🧠
              </div>

              <div>

                <div className="result-tag">
                  AI EXPLANATION
                </div>

                <h2>
                  What the agent found
                </h2>

                <p>
                  Based on the analysis, several
                  districts show healthcare patterns
                  that differ significantly from the
                  overall dataset. Solapur and Satara
                  have comparatively lower healthcare
                  availability. These districts should
                  be investigated further because their
                  values are outside the normal
                  distribution observed across
                  the dataset.
                </p>

              </div>

            </div>


            {/* Workflow */}

            <div className="card">

              <div className="section-title">

                <div className="number">
                  05
                </div>

                <div>

                  <h2>
                    Agent Workflow
                  </h2>

                  <p>
                    How the autonomous analyst
                    reached the result.
                  </p>

                </div>

              </div>


              <div className="pipeline">

                <div className="pipeline-item">
                  <span>1</span>
                  <strong>Inspect</strong>
                  <small>
                    Dataset structure
                  </small>
                </div>

                <div className="arrow">
                  →
                </div>

                <div className="pipeline-item">
                  <span>2</span>
                  <strong>Clean</strong>
                  <small>
                    Missing values
                  </small>
                </div>

                <div className="arrow">
                  →
                </div>

                <div className="pipeline-item">
                  <span>3</span>
                  <strong>Analyze</strong>
                  <small>
                    Statistics
                  </small>
                </div>

                <div className="arrow">
                  →
                </div>

                <div className="pipeline-item">
                  <span>4</span>
                  <strong>Detect</strong>
                  <small>
                    Anomalies
                  </small>
                </div>

                <div className="arrow">
                  →
                </div>

                <div className="pipeline-item">
                  <span>5</span>
                  <strong>Explain</strong>
                  <small>
                    AI report
                  </small>
                </div>

              </div>

            </div>

          </section>

        )}

      </main>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <div className="footer-brand">

          <DataSenseLogo small />

          <div>
            <strong>
              DataSense AI
            </strong>

            <span>
              Autonomous Data Analyst
            </span>
          </div>

        </div>

        <span>
          PS05 • Autonomous Data Analyst Agent
        </span>

      </footer>

    </div>
  );
}

export default App;
