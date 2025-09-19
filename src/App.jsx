import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Desktop from "./Desktop";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showSequence, setShowSequence] = useState(false);
  const [sequenceDone, setSequenceDone] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    const code = e.target.password.value.trim();
    if (["nya", "냐", "NYA", "냐아"].includes(code)) {
      setUnlocked(true);
      setTimeout(() => setShowSequence(true), 300); // 잠깐 지연 후 시퀀스 시작
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {/* 잠금 페이지 */}
      {!unlocked && (
        <form onSubmit={handleUnlock} className="space-y-4 text-center">
          <h1 className="text-2xl font-bold">Enter Password</h1>
          <input
            type="password"
            name="password"
            className="px-4 py-2 rounded bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500"
          >
            Unlock
          </button>
        </form>
      )}

      {/* 시퀀스 */}
      <AnimatePresence>
        {showSequence && !sequenceDone && (
          <motion.div
            key="sequence"
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
          >
            <motion.img
              src="https://pbs.twimg.com/media/F9CiIj4a8AA8wmy.jpg"
              alt="spin image"
              initial={{ scale: 0.1, rotate: 0, opacity: 0 }}
              animate={{ scale: 3, rotate: 1080, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="rounded-lg shadow-lg"
              onAnimationComplete={() => {
                setTimeout(() => setSequenceDone(true), 1500);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 글씨 효과 */}
      {showSequence && !sequenceDone && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
        </motion.div>
      )}

      {/* 메인 화면 */}
      {sequenceDone && <Desktop />}
    </div>
  );
}
