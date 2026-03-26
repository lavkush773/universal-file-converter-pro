import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextDocConverter from "./components/TextDocConverter";
import SpreadsheetConverter from "./components/SpreadsheetConverter";
import CodeTools from "./components/CodeTools";
import ImageTools from "./components/ImageTools";
import AudioTools from "./components/AudioTools";
import VideoTools from "./components/VideoTools";
import FileCompressor from "./components/FileCompressor";
import DataConverter from "./components/DataConverter";
import Footer from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("text");

  const tools = [
    { id: "text", name: "Text & Docs", icon: "📝" },
    { id: "spread", name: "Spreadsheets", icon: "📊" },
    { id: "image", name: "Images", icon: "🖼️" },
    { id: "audio", name: "Audio", icon: "🎵" },
    { id: "video", name: "Video", icon: "🎬" },
    { id: "code", name: "Code", icon: "💻" },
    { id: "zip", name: "Zip", icon: "🗜️" },
    { id: "data", name: "Data", icon: "📁" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Navbar */}
      <Navbar activeTab={active} setActiveTab={setActive} />

      {/* Converter Section */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="converter-card p-6 bg-white text-gray-800 rounded-2xl shadow-xl">
          {active === "text" && <TextDocConverter />}
          {active === "spread" && <SpreadsheetConverter />}
          {active === "code" && <CodeTools />}
          {active === "image" && <ImageTools />}
          {active === "audio" && <AudioTools />}
          {active === "video" && <VideoTools />}
          {active === "zip" && <FileCompressor />}
          {active === "data" && <DataConverter />}
        </div>
      </main>

      {/* Slider Section */}
      <section className="mt-2 mb-8 px-4 text-center">
        <h2 className="text-lg font-semibold mb-3">🔧 Explore More Tools</h2>
        <div className="flex justify-center gap-4 overflow-x-auto pb-3 px-1 hide-scrollbar">
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setActive(tool.id)}
              className={`flex-shrink-0 w-44 h-36 rounded-2xl cursor-pointer transform transition-all hover:scale-105 ${
                active === tool.id
                  ? "bg-white text-indigo-700 font-semibold shadow-lg"
                  : "bg-white/30 text-white border border-white/40 backdrop-blur-sm"
              } flex flex-col justify-center items-center`}
            >
              <span className="text-3xl mb-2">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
