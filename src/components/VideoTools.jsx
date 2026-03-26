import React from "react";

export default function VideoTools(){
  return (
    <div className="converter-card p-6 text-center">
      <h3 className="text-xl font-semibold mb-3">🎞️ Video Tools (Coming Soon)</h3>
      <p className="text-sm text-gray-600">MP4 ↔ AVI + resolution convert via <code>ffmpeg.wasm</code> — placeholder. Will integrate client-side binary next.</p>
      <div className="mt-4">
        <button className="btn btn-primary" disabled>Upload Video</button>
        <button className="btn btn-outline-secondary ms-2" disabled>Convert</button>
      </div>
    </div>
  );
}

