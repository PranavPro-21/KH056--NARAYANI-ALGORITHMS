import React, { useState, useRef } from 'react';
import { Upload, FileSpreadsheet, BarChart3, AlertOctagon, BrainCircuit, RefreshCw, Layers, ShieldCheck } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function App() {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const fileInputRef = useRef(null);

  // Simulated API handler matching the Python pipeline execution
  const processDatasetPipeline = (selectedFile) => {
    setFile(selectedFile);
    setIsProcessing(true);

    // Mimic API payload roundtrip delay
    setTimeout(() => {
      setIsProcessing(false);
      setDashboardData({
        metrics: {
          totalRows: 5412,
          cleanedRows: 5394,
          nullsFixed: 18,
          anomalyCount: 23
        },
        chartData: [
          { name: 'P1', MetricValue: 410, Anomalies: 0 },
          { name: 'P2', MetricValue: 490, Anomalies: 0 },
          { name: 'P3', MetricValue: 580, Anomalies: 1 },
          { name: 'P4', MetricValue: 320, Anomalies: 0 },
          { name: 'P5', MetricValue: 810, Anomalies: 4 },
          { name: 'P6', MetricValue: 930, Anomalies: 0 },
          { name: 'P7', MetricValue: 740, Anomalies: 2 }
        ],
        aiResponse: `DATASENSE AI EXECUTIVE INSIGHT REPORT:
        
        [1] REGRESSION & TREND SUMMARY:
        The uploaded dataset processing completed successfully. The metrics display a steady 24% systemic scale growth between evaluation windows P2 and P6. 
        
        [2] ANOMALY BREAKDOWN & HAZARDS:
        Isolation Forest computation flagged 23 data indices running outside standard deviations. A critical density vector is confirmed at window P5. These spikes correlate directly with outlier entries in your metric tracking.
        
        [3] AUTONOMOUS RESOLUTION ACTION:
        Missing data fields (18 items) were programmatically imputed utilizing mathematical column medians. We recommend checking raw operational data capture setups active during your P5 tracking frame to isolate hardware signal variance.`
      });
    }, 2200);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processDatasetPipeline(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased font-sans">
      {/* Top Application Navbar */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-600/30">
            <BrainCircuit className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white">DataSense AI</h1>
            <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Autonomous Data Analyst Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <ShieldCheck className="w-4 h-4" /> System Guard Active
        </div>
      </nav>

      {/* Main UI Container Workspace */}
      <main className="max-w-7xl mx-auto p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Interactive Control Panel Area */}
        <section className="space-y-6">
          <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" /> Pipeline Workspace
            </h2>
            <p className="text-xs text-slate-400 mb-4">Ingest system records to initiate unsupervised AI scrubbing and inference execution loops.</p>
            
            {/* Custom Interactive Drag-and-Drop Dropzone Drop area element */}
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
              className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 group
                ${isProcessing ? 'border-amber-500 bg-amber-500/5' : 'border-slate-700 hover:border-indigo-500 hover:bg-indigo-500/5'}`}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={(e) => e.target.files[0] && processDatasetPipeline(e.target.files[0])}
                accept=".csv, .xls, .xlsx" 
                className="hidden" 
              />
              
              {isProcessing ? (
                <RefreshCw className="w-12 h-12 text-amber-500 animate-spin mb-3" />
              ) : (
                <Upload className="w-12 h-12 text-slate-500 group-hover:text-indigo-400 transition-colors mb-3" />
              )}
              
              <span className="text-sm font-semibold text-slate-200">
                {isProcessing ? "Processing Engine Arrays..." : "Ingest Dataset Source File"}
              </span>
              <span className="text-xs text-slate-400 mt-1">Drag file here or click to browse</span>
              <span className="text-[10px] text-slate-500 mt-3 font-mono bg-slate-900 px-2 py-0.5 rounded">CSV, XLS, XLSX formats supported</span>
            </div>

            {/* Ingested File Details Status Block widget layout row view components */}
            {file && (
              <div className="mt-4 p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-2.5 min-w-0">
                  <FileSpreadsheet className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono font-medium text-slate-300 truncate">{file.name}</span>
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${isProcessing ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                  {isProcessing ? 'Parsing' : 'Ready'}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Right Dashboard Visualization Output Area */}
        <section className="lg:col-span-2 space-y-6">
          {!dashboardData ? (
            /* System Empty State Placeholder UI layout */
            <div className="h-96 flex flex-col items-center justify-center bg-slate-950/20 border border-dashed border-slate-800 rounded-2xl text-center p-6">
              <BarChart3 className="w-14 h-14 text-slate-700 stroke-[1.5] mb-3 animate-pulse" />
              <h3 className="text-base font-bold text-slate-400">Awaiting Ingestion Pipeline File</h3>
              <p className="text-xs text-slate-500 max-w-sm mt-1">Once a valid dataset file is loaded, autonomous tracking insights and statistical charting panels will render here dynamically.</p>
            </div>
          ) : (
            <>
              {/* Dynamic Analytical KPI Cards row component blocks visual */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fadeIn">
                <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Rows Tracked</p>
                  <p className="text-2xl font-black text-white mt-1 font-mono">{dashboardData.metrics.totalRows}</p>
                </div>
                <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Scrubbed & Passed</p>
                  <p className="text-2xl font-black text-emerald-400 mt-1 font-mono">{dashboardData.metrics.cleanedRows}</p>
                </div>
                <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Null Cells Fixed</p>
                  <p className="text-2xl font-black text-indigo-400 mt-1 font-mono">{dashboardData.metrics.nullsFixed}</p>
                </div>
                <div className="bg-slate-950/40 border border-slate-800 p-4 rounded-xl flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Anomalies Isolated</p>
                    <p className="text-2xl font-black text-rose-500 mt-1 font-mono">{dashboardData.metrics.anomalyCount}</p>
                  </div>
                  <AlertOctagon className="w-4 h-4 text-rose-500 animate-bounce" />
                </div>
              </div>

              {/* Data Visualization Graphic Dashboard Row Container views */}
              <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl animate-fadeIn">
                <h3 className="text-sm font-bold text-white mb-4 tracking-wide uppercase">Engine Pipeline Trend Overlay</h3>
                <div className="h-64 w-100">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dashboardData.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="metricGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
