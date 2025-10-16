import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function HeartButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50">
      <motion.button
        whileTap={{ scale: 1.3 }}
        onClick={() => setLiked(!liked)}
        className="p-2"
      >
        <Heart
          size={50}
          className={`transition-colors duration-300 ${
            liked ? "fill-red-500 text-red-500" : "text-white"
          }`}
        />
      </motion.button>
    </div>
  );
}