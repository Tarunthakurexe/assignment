import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("progressValue");
    return saved ? Number(saved) : 50;
  });

  useEffect(() => {
    localStorage.setItem("progressValue", progress);
  }, [progress]);

  return (
    <div className="fixed top-4 right-4 w-64 z-50">
      <label className="block mb-1 text-sm font-bold text-green-700">
        Progress
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
        className="w-full accent-green-700 mb-2"
      />
      <div className="w-full h-6 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="h-full bg-green-700 flex items-center justify-center text-xs font-semibold text-white"
        >
          {progress > 0 && `${progress}%`}
        </motion.div>
      </div>
    </div>
  );
}
