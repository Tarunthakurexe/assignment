import ProgressBar from "./components/ProgressBar";
import HeartButton from "./components/HeartButton";
import InfoModel from "./components/InfoModel";
import Jumping from "./components/Jumping";
import { Carrot } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gradient-to-br from-orange-300 via-orange-200 to-yellow-200 text-green-700 p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left my-4">
        Hello.. There
      </h1>
      <ProgressBar />
      <Jumping />
      <HeartButton />
      <InfoModel />
    </div>
  );
}