function App() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState(
    "Which districts show unusual healthcare patterns?"
  );

  const [loading, setLoading] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const quickQuestions = [
    "Which districts show unusual healthcare patterns?",
    "Which districts have the lowest healthcare availability?",
    "What are the major anomalies in this dataset?",
    "Show me the most important trends."
  ];

  const processFile = (selectedFile) => {
    if (!selectedFile) return;

    const validTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ];

    const isCsv = selectedFile.name
      .toLowerCase()
      .endsWith(".csv");

    const isExcel =
      selectedFile.name.toLowerCase().endsWith(".xlsx") ||
      selectedFile.name.toLowerCase().endsWith(".xls");

    if (
      !validTypes.includes(selectedFile.type) &&
      !isCsv &&
      !isExcel
    ) {
      alert("Please upload a CSV or Excel file.");
      return;
    }

    setFile(selectedFile);
    setAnalyzed(false);
  };

  const handleFileChange = (event) => {
    processFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    setDragActive(false);

    processFile(event.dataTransfer.files[0]);
  };

  const analyzeDataset = async () => {
    if (!file) {
      alert("Please upload a dataset first.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);

      setTimeout(() => {
        document
          .querySelector(".results")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
      }, 100);
    }, 1500);
  };

  const resetAnalysis = () => {
    setFile(null);
    setAnalyzed(false);

    setQuestion(
      "Which districts show unusual healthcare patterns?"
    );
  };
