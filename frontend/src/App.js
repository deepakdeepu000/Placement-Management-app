import React, { useState } from "react";
import UploadForm from "./Pages/studentpage/Studentpage";
import ResultDisplay from "./Pages/studentpage/studentNavBar";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="App">
       <h1>E-commerce Churn Prediction</h1>
            <UploadForm setResult={setResult} />
            <ResultDisplay result={result} />
    </div>
  );
}

export default App;
