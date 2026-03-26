import React, { useState } from "react";

export default function CodeTools() {
  const [code, setCode] = useState("");
  const [minified, setMinified] = useState("");

  const handleMinify = () => {
    // Simple minifier: remove newlines and extra spaces
    const min = code
      .replace(/\n/g, "")
      .replace(/\s+/g, " ")
      .replace(/\s?([{};,:])\s?/g, "$1")
      .trim();
    setMinified(min);
  };

  const handleDownload = () => {
    const blob = new Blob([minified], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "minified_code.txt";
    link.click();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">
        💻 Code Minifier
      </h2>

      <div className="drop-zone mb-4">
        <input
          type="file"
          accept=".js,.css,.html,.json"
          className="mb-3"
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => setCode(event.target.result);
            reader.readAsText(file);
          }}
        />
        <textarea
          className="w-full h-48 p-3 border rounded-lg"
          placeholder="Paste your JS/CSS/HTML code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
      </div>

      <div className="flex gap-3 justify-center">
        <button className="btn-primary" onClick={handleMinify}>
          Minify Code
        </button>
        {minified && (
          <button className="btn-primary" onClick={handleDownload}>
            Download Minified
          </button>
        )}
      </div>

      {minified && (
        <div className="mt-4 bg-gray-100 p-3 rounded-lg">
          <h3 className="font-semibold mb-1 text-gray-700">Minified Output:</h3>
          <pre className="whitespace-pre-wrap">{minified}</pre>
        </div>
      )}
    </div>
  );
}
