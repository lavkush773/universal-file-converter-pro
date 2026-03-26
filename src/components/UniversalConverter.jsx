// UniversalConverter.jsx — Main Conversion Component
// Includes Drag-Drop area, File Format selector, Convert & Download button

import React, { useState } from "react";

export default function UniversalConverter({ activeTool }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [targetFormat, setTargetFormat] = useState("");

  // ---- Format options by tool ----
  const formatOptions = {
    text: [".txt", ".html", ".docx", ".pdf", ".md"],
    spread: [".csv", ".xls", ".xlsx"],
    image: [".png", ".jpg", ".jpeg", ".webp"],
    audio: [".mp3", ".wav"],
    video: [".mp4", ".avi", ".mkv"],
    code: [".js", ".css", ".html"],
    zip: [".zip", ".tar", ".rar"],
    data: [".json", ".xml", ".sql"],
  };

  // ---- Handle file select ----
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // ---- Simulate Conversion ----
  const handleConvert = () => {
    if (!selectedFile || !targetFormat) {
      alert("Please select file and format first!");
      return;
    }
    alert(`✅ ${selectedFile.name} converted to ${targetFormat} successfully!`);
  };

  return (
    <div className="text-center">
      {/* ---- Converter Header ---- */}
      <h2 className="text-2xl font-bold text-indigo-700 mb-2">
        {activeTool === "text" && "📝 Text & Document Converter"}
        {activeTool === "spread" && "📊 Spreadsheet Converter"}
        {activeTool === "image" && "🖼️ Image Converter"}
        {activeTool === "audio" && "🎵 Audio Converter"}
        {activeTool === "video" && "🎬 Video Converter"}
        {activeTool === "code" && "💻 Code Tools"}
        {activeTool === "zip" && "🗜️ File Compressor"}
        {activeTool === "data" && "📁 Data Format Converter"}
      </h2>

      {/* ---- Supported formats ---- */}
      <p className="text-sm text-gray-600 mb-6">
        {formatOptions[activeTool]?.join(" ↔ ")}
      </p>

      {/* ---- Drag-drop area ---- */}
      <div className="border-2 border-dashed border-indigo-400 rounded-xl p-10 mb-5 bg-gradient-to-br from-gray-100 via-indigo-50 to-purple-100 hover:from-indigo-100 transition">
        <p className="text-gray-700 mb-3">
          Drag & Drop your file here, or choose manually
        </p>
        <input
          type="file"
          className="block mx-auto text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <p className="mt-3 text-gray-800 font-medium">
            Selected: {selectedFile.name}
          </p>
        )}
      </div>

      {/* ---- Format selector ---- */}
      <div className="mb-6">
        <select
          className="px-4 py-2 rounded-lg border border-indigo-300 shadow-sm text-gray-700"
          value={targetFormat}
          onChange={(e) => setTargetFormat(e.target.value)}
        >
          <option value="">Select output format</option>
          {formatOptions[activeTool]?.map((fmt) => (
            <option key={fmt} value={fmt}>
              Convert to {fmt}
            </option>
          ))}
        </select>
      </div>

      {/* ---- Convert button ---- */}
      <button
        onClick={handleConvert}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
      >
        ⚙️ Convert File
      </button>
    </div>
  );
}

