import React, { useState } from "react";

export default function Folder({ name, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center group">
      {/* 폴더 아이콘 */}
      <div
        onClick={() => setOpen(true)}
        className="w-24 h-20 bg-yellow-300 rounded-lg cursor-pointer shadow-lg group-hover:scale-110 group-hover:shadow-yellow-400 transition transform"
      ></div>
      <p className="mt-3 text-sm font-semibold">{name}</p>

      {/* 폴더 모달 */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-slate-800 p-6 rounded-lg shadow-2xl w-96 animate-fadeIn">
            <h2 className="text-xl font-bold mb-4">{name}</h2>
            <p>{content}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
