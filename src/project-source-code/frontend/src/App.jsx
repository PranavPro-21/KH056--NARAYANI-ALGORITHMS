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

function App() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState(
    "Which districts show unusual healthcare patterns?"
  );

  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    const isCsv =
      selectedFile.name.toLowerCase().endsWith(".csv");

    const isExcel =
      selectedFile.name.toLowerCase().endsWith(".xlsx") ||
      selectedFile.name.toLowerCase().endsWith(".xls");

    if (!validTypes.includes(selectedFile.type) && !isCsv && !isExcel) {
      alert("Please upload a CSV or Excel file.");
      return;
    }

    setFile(selectedFile);
    setAnalyzed(false);
  };

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

  const resetAnalysis = () => {
    setFile(null);
    setAnalyzed(false);
    setQuestion(
      "Which districts show unusual healthcare patterns?"
    );
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">🤖</div>

          <div>
            <h2>DataSense AI</h2>
            <span>Autonomous Data Analyst</span>
          </div>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          AI Agent Online
        </div>
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <div className="tag">
            ✨ AI + Data Science
          </div>

          <h1>
            Analyze your data
            <span> automatically.</span>
          </h1>

          <p>
            Upload a CSV or Excel dataset and let the autonomous
            data analyst inspect, clean, analyze and explain
            your data.
          </p>

        </div>

      </section>

      {/* MAIN */}
      <main className="container">

        {/* UPLOAD CARD */}
        <section className="card upload-card">

          <div className="section-title">
            <div className="number">01</div>

            <div>
              <h2>Upload Dataset</h2>
              <p>CSV and Excel files are supported.</p>
            </div>
          </div>

          <label className="upload-area">

            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileChange}
            />

            <div className="upload-icon">
              📁
            </div>

            <h3>
              {file
                ? file.name
                : "Choose your dataset"}
            </h3>

            <p>
              Click here to upload CSV / Excel
            </p>

          </label>

          {file && (
            <div className="file-info">

              <div>
                <strong>Dataset selected</strong>

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

        {/* QUESTION */}
        <section className="card">

          <div className="section-title">
            <div className="number">02</div>

            <div>
              <h2>Ask the Data Analyst</h2>

              <p>
                Ask a natural-language question about your dataset.
              </p>
            </div>
          </div>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
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

        {/* RESULTS */}
        {analyzed && (
          <section className="results">

            <div className="result-heading">
              <div>
                <div className="tag">
                  ANALYSIS COMPLETE
                </div>

                <h2>Analysis Results</h2>

                <p>
                  The autonomous agent inspected the dataset
                  and identified important patterns.
                </p>
              </div>

              <button className="report-btn">
                📄 Download Report
              </button>
            </div>

            {/* STATISTICS */}
            <div className="stats-grid">

              <div className="stat-card">
                <span>Rows</span>
                <strong>650</strong>
                <small>Records analyzed</small>
              </div>

              <div className="stat-card">
                <span>Columns</span>
                <strong>12</strong>
                <small>Features detected</small>
              </div>

              <div className="stat-card">
                <span>Missing Values</span>
                <strong>18</strong>
                <small>Values cleaned</small>
              </div>

              <div className="stat-card anomaly">
                <span>Anomalies</span>
                <strong>7</strong>
                <small>Unusual patterns</small>
              </div>

            </div>

            {/* DATASET UNDERSTANDING */}
            <div className="card">

              <div className="section-title">
                <div className="number">03</div>

                <div>
                  <h2>Dataset Understanding</h2>
                  <p>
                    Automatically detected structure and data quality.
                  </p>
                </div>
              </div>

              <div className="quality-grid">

                <div>
                  <span>Dataset</span>
                  <strong>{file?.name}</strong>
                </div>

                <div>
                  <span>Data Type</span>
                  <strong>Healthcare</strong>
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

            {/* CHARTS */}
            <div className="charts-grid">

              <div className="card chart-card">

                <div className="chart-header">
                  <div>
                    <h3>Healthcare Availability</h3>
                    <p>Hospital availability by district</p>
                  </div>

                  <span>📊</span>
                </div>

                <ResponsiveContainer
                  width="100%"
                  height={300}
                >
                  <BarChart data={districtData}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="hospitals"
                      radius={[6, 6, 0, 0]}
                    />

                  </BarChart>
                </ResponsiveContainer>

              </div>

              <div className="card chart-card">

                <div className="chart-header">
                  <div>
                    <h3>Healthcare Trend</h3>
                    <p>Monthly health indicator</p>
                  </div>

                  <span>📈</span>
                </div>

                <ResponsiveContainer
                  width="100%"
                  height={300}
                >
                  <LineChart data={healthTrend}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="value"
                      strokeWidth={3}
                    />

                  </LineChart>
                </ResponsiveContainer>

              </div>

            </div>

            {/* ANOMALIES */}
            <div className="card anomaly-section">

              <div className="section-title">

                <div className="number">
                  04
                </div>

                <div>
                  <h2>Unusual Patterns Detected</h2>

                  <p>
                    Potential anomalies identified by the agent.
                  </p>
                </div>

              </div>

              <div className="anomaly-list">

                <div className="anomaly-item">
                  <span className="warning">!</span>

                  <div>
                    <strong>Solapur</strong>

                    <p>
                      Hospital availability is significantly
                      lower than the dataset average.
                    </p>
                  </div>

                  <span className="severity">
                    High
                  </span>
                </div>

                <div className="anomaly-item">
                  <span className="warning">!</span>

                  <div>
                    <strong>Satara</strong>

                    <p>
                      Healthcare indicators show an unusual
                      deviation from nearby districts.
                    </p>
                  </div>

                  <span className="severity medium">
                    Medium
                  </span>
                </div>

                <div className="anomaly-item">
                  <span className="warning">!</span>

                  <div>
                    <strong>District pattern</strong>

                    <p>
                      Multiple healthcare variables show
                      correlated unusual values.
                    </p>
                  </div>

                  <span className="severity">
                    High
                  </span>
                </div>

              </div>

            </div>

            {/* AI EXPLANATION */}
            <div className="card ai-summary">

              <div className="ai-icon">
                🤖
              </div>

              <div>

                <div className="tag">
                  AI EXPLANATION
                </div>

                <h2>What the agent found</h2>

                <p>
                  Based on the analysis, several districts show
                  healthcare patterns that differ significantly
                  from the overall dataset. Solapur and Satara
                  have comparatively lower healthcare availability.
                  These districts should be investigated further
                  because their values are outside the normal
                  distribution observed across the dataset.
                </p>

              </div>

            </div>

            {/* PIPELINE */}
            <div className="card">

              <div className="section-title">

                <div className="number">
                  05
                </div>

                <div>
                  <h2>Agent Workflow</h2>

                  <p>
                    How the autonomous analyst reached the result.
                  </p>
                </div>

              </div>

              <div className="pipeline">

                <div className="pipeline-item">
                  <span>1</span>
                  <strong>Inspect</strong>
                  <small>Dataset structure</small>
                </div>

                <div className="arrow">→</div>

                <div className="pipeline-item">
                  <span>2</span>
                  <strong>Clean</strong>
                  <small>Missing values</small>
                </div>

                <div className="arrow">→</div>

                <div className="pipeline-item">
                  <span>3</span>
                  <strong>Analyze</strong>
                  <small>Statistics</small>
                </div>

                <div className="arrow">→</div>

                <div className="pipeline-item">
                  <span>4</span>
                  <strong>Detect</strong>
                  <small>Anomalies</small>
                </div>

                <div className="arrow">→</div>

                <div className="pipeline-item">
                  <span>5</span>
                  <strong>Explain</strong>
                  <small>AI report</small>
                </div>

              </div>

            </div>

          </section>
        )}

      </main>

      {/* FOOTER */}
      <footer>
        <strong>DataSense AI</strong>

        <span>
          PS05 • Autonomous Data Analyst Agent
        </span>
      </footer>

    </div>
  );
}

export default App;
