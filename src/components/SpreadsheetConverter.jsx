import React, { useState } from "react";

// ✅ SpreadsheetConverter: Converts CSV ↔ TSV or cleans spreadsheet data
export default function SpreadsheetConverter() {
  const [inputData, setInputData] = useState("");
  const [convertedData, setConvertedData] = useState("");
  const [fileName, setFileName] = useState("converted_data.csv");

  // Convert CSV to TSV (or vice versa)
  const handleConvert = () => {
    if (!inputData.trim()) {
      alert("⚠️ Please paste spreadsheet data first!");
      return;
    }

    // Simple logic: toggle between CSV and TSV
    let output = inputData.includes(",")
      ? inputData.replace(/,/g, "\t")
      : inputData.replace(/\t/g, ",");

    setConvertedData(output);
  };

  // Download converted spreadsheet
  const handleDownload = () => {
    const blob = new Blob([convertedData], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-3">
        📊 Spreadsheet Converter
      </h2>

      {/* File name input + Convert button */}
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

      {/* Input spreadsheet data */}
      <textarea
        className="form-control w-full h-48 p-3 border rounded-md text-sm"
        placeholder="Paste CSV or TSV data here..."
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      ></textarea>

      {/* Output and download */}
      {convertedData && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Converted Output:</h4>
          <textarea
            className="form-control w-full h-48 p-3 border rounded-md bg-gray-50 text-sm"
            value={convertedData}
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
