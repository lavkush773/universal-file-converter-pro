import React from "react";

export default function AudioTools(){
  return (
    <div className="converter-card p-6 text-center">
      <h3 className="text-xl font-semibold mb-3">🎵 Audio Tools (Coming Soon)</h3>
      <p className="text-sm text-gray-600">MP3 ↔ WAV and bitrate changes will be added via <code>ffmpeg.wasm</code>. For now, this is a placeholder UI ready for integration.</p>
      <div className="mt-4">
        <button className="btn btn-primary" disabled>Upload Audio</button>
        <button className="btn btn-outline-secondary ms-2" disabled>Convert</button>
      </div>
    </div>
  );
}

