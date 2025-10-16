import { motion } from "framer-motion";
import bunny from "../assets/bunny.png";

export default function Jumping() {
  return (
    <div className="text-center">
<motion.img
        src={bunny}
        alt="Bunny"
        className="w-40 h-40 cursor-pointer"
        whileTap={{ scale: 1.2, y: -30, rotate: 5 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
}