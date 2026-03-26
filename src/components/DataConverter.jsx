import React, { useState } from "react";

// ✅ DataConverter — JSON ↔ CSV ↔ XML
export default function DataConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [fileName, setFileName] = useState("converted_data.json");

  const handleConvert = () => {
    try {
      const json = JSON.parse(input);
      const csv = Object.keys(json[0])
        .join(",") +
        "\n" +
        json.map((row) => Object.values(row).join(",")).join("\n");
      setOutput(csv);
    } catch {
      alert("⚠️ Invalid JSON format!");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-3">
        🗃️ Data Converter
      </h2>

      {/* File name + button */}
      <div className="flex justify-between items-center gap-3">
        <input
          type="text"
          className="form-control w-full rounded-md border border-gray-300 p-2"
          placeholder="Enter file name (e.g. data.csv)"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <button
          className="btn btn-primary px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>

      <textarea
        className="form-control w-full h-48 p-3 border rounded-md text-sm"
        placeholder="Paste JSON data here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      {output && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Converted CSV:</h4>
          <textarea
            className="form-control w-full h-48 p-3 border rounded-md bg-gray-50 text-sm"
            value={output}
            readOnly
          ></textarea>

          <div className="text-right mt-3">
            <button
              className="btn btn-success px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white"
              onClick={handleDownload}
            >
              ⬇️ Download File
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
