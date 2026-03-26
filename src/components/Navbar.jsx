import React, { useState } from "react";

export default function Navbar({ setActiveTab, activeTab }) {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setDark(!dark);
  };

  const linkClass = (key) =>
    `px-3 py-2 rounded-md cursor-pointer ${
      activeTab === key
        ? "bg-indigo-600 text-white font-semibold"
        : "text-gray-700 hover:text-indigo-600"
    }`;

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg shadow-md border-b border-white/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-teal-400 flex items-center justify-center text-white font-bold">
            UC
          </div>
          <div>
            <div className="font-semibold text-gray-800">Universal Converter</div>
            <div className="text-xs text-gray-500">Multi-tool · Client-side</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {["text", "spread", "image", "audio", "video", "code"].map((k) => (
            <div key={k} onClick={() => setActiveTab(k)} className={linkClass(k)}>
              {k.charAt(0).toUpperCase() + k.slice(1)}
            </div>
          ))}

          <button onClick={toggleTheme} className="btn btn-outline-secondary btn-sm">
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
