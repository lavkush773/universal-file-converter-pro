import React, { useState } from "react";

export default function TextDocConverter() {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const handleConvert = () => {
    // simple format simulation for demo
    setConvertedText(text.toUpperCase());
  };

  const handleDownload = () => {
    const blob = new Blob([convertedText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "converted.txt";
    link.click();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">
        📝 Text & Document Converter
      </h2>

      {/* Upload / Input area */}
      <div className="drop-zone mb-4">
        <input
          type="file"
          accept=".txt,.docx,.pdf"
          className="mb-3"
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => setText(event.target.result);
            reader.readAsText(file);
          }}
        />
        <textarea
          className="w-full h-48 p-3 border rounded-lg"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      {/* Convert & Download Buttons */}
      <div className="flex gap-3 justify-center">
        <button className="btn-primary" onClick={handleConvert}>
          Convert
        </button>
        {convertedText && (
          <button className="btn-primary" onClick={handleDownload}>
            Download File
          </button>
        )}
      </div>

      {convertedText && (
        <div className="mt-4 bg-gray-100 p-3 rounded-lg">
          <h3 className="font-semibold mb-1 text-gray-700">Converted Output:</h3>
          <pre className="whitespace-pre-wrap">{convertedText}</pre>
        </div>
      )}
    </div>
  );
}
