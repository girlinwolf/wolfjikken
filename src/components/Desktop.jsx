import React, { useState, useRef } from "react";
import Folder from "./Folder";

export default function Desktop() {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  const folders = [
    { name: "Diary", content: "📔 여기에 다이어리 내용이 들어갑니다." },
    { name: "Gallery", content: "🖼️ 그림, 사진 모음 공간입니다." },
    { name: "Music", content: "🎵 좋아하는 음악 플레이리스트!" },
    { name: "Secret", content: "🔑 숨겨진 메시지: nya nya nya..." },
  ];

  const toggleAudio = () => {
    if (audioRef.current) {
      if (muted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setMuted(!muted);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 text-slate-800 p-10">
      <h1 className="text-5xl font-bold mb-12 text-center tracking-wider">
        💻 girlinwolf’s desktop
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {folders.map((f, i) => (
          <Folder key={i} name={f.name} content={f.content} />
        ))}
      </div>

      {/* 오디오 컨트롤 */}
      <audio
        ref={audioRef}
        src="https://www.myinstants.com/media/sounds/its-raining-tacos.mp3"
        loop
      />
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 px-4 py-2 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition"
      >
        {muted ? "🔇 Play BGM" : "🔊 Pause BGM"}
      </button>
    </div>
  );
}
