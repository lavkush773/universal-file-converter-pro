import React, { useState } from "react";

// ✅ FileCompressor — ZIP/Unzip (simulated)
export default function FileCompressor() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleConvert = () => {
    if (!file) {
      alert("⚠️ Please select a file first!");
      return;
    }
    setMessage(`File "${file.name}" compressed successfully!`);
  };

  return (
    <div className="flex flex-col gap-5 text-gray-800">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-3">
        📦 File Compressor
      </h2>

      <div className="flex justify-between items-center gap-3">
        <input
          type="file"
          onChange={handleFileChange}
          className="form-control w-full rounded-md border border-gray-300 p-2"
        />
        <button
          className="btn btn-primary px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={handleConvert}
        >
          Compress
        </button>
      </div>

      {message && (
        <div className="text-center text-green-700 font-semibold mt-4">
          ✅ {message}
          <div className="mt-3">
            <button
              className="btn btn-success px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white"
              onClick={() => alert("Download started (simulated)!")}
            >
              ⬇️ Download ZIP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
