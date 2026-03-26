import React, { useState } from "react";

// ✅ ImageTools — Image format converter (PNG ↔ JPG ↔ WEBP)
export default function ImageTools() {
  const [file, setFile] = useState(null);
  const [convertedUrl, setConvertedUrl] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleConvert = async () => {
    if (!file) {
      alert("⚠️ Please upload an image first!");
      return;
    }

    // Convert image using canvas
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const newFormat =
        file.type === "image/png" ? "image/jpeg" : "image/png";
      const converted = canvas.toDataURL(newFormat);
      setConvertedUrl(converted);
    };
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = convertedUrl;
    link.download = "converted_image.png";
    link.click();
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-3">
        🖼️ Image Converter
      </h2>

      {/* Upload + convert */}
      <div className="flex justify-between items-center gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="form-control w-full rounded-md border border-gray-300 p-2"
        />
        <button
          className="btn btn-primary px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>

      {/* Preview */}
      {convertedUrl && (
        <div className="text-center mt-4">
          <img
            src={convertedUrl}
            alt="Converted"
            className="max-h-64 mx-auto rounded-lg shadow-lg"
          />
          <div className="mt-3">
            <button
              className="btn btn-success px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white"
              onClick={handleDownload}
            >
              ⬇️ Download Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
