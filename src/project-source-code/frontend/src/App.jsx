const API_BASE_URL = "http://11.11.2.155:8000"; // TODO: move to .env (VITE_API_URL)

const analyzeDataset = async () => {
  if (!file) {
    alert("Please upload a dataset first.");
    return;
  }

  setLoading(true);

  const formData = new FormData();
  formData.append("file", file); // must match the backend's expected field name

  try {
    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();
    console.log("Backend Response:", data);

    // Actually use the response instead of showing hardcoded mock data
    setAnalysisResult(data);
    setAnalyzed(true);

    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  } catch (error) {
    console.error("Connection failed:", error);
    alert("Could not connect to Parag's backend. Check if his server is running!");
  } finally {
    setLoading(false);
  }
};
