import { motion, AnimatePresence } from "framer-motion";
import { CarrotIcon, Info, WavesIcon } from "lucide-react";
import { useState } from "react";

export default function InfoModel() {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center text-white">
      <button
        onClick={() => setShow(true)}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg flex items-center gap-2 mx-auto"
      >
        <CarrotIcon /> Click Here
      </button>

      <AnimatePresence>
        {show && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShow(false)}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="fixed bg-white text-black p-6 rounded-2xl shadow-2xl w-80 text-center z-10"
            >
              <h2 className="text-xl font-bold mb-2">Hello..</h2>
              <p className="text-gray-700 mb-1">My Name is Bugs Bunny.</p>
              <p className="text-gray-700 mb-4">I Love Jumping. Click on me to make me jump.</p>
              <button
                onClick={() => setShow(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Close ✖
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}