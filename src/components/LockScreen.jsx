import React, { useState } from "react";

export default function LockScreen({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkPassword = (e) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === "nya") {
      onUnlock();
    } else {
      setError("❌ Access Denied");
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-6 tracking-wider">🔒 GIRLINWOLF</h1>
      <form onSubmit={checkPassword} className="flex flex-col gap-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 rounded bg-slate-800 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter password..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
        >
          Unlock
        </button>
      </form>
      {error && <p className="mt-4 text-red-400">{error}</p>}
    </div>
  );
}
