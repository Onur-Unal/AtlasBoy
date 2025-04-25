"use client";
import { useEffect, useState } from "react";

export default function AnimatedText() {
  const sentenceArray = "ATLAS 1 YAŞINDA!".split("");
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sentenceArray.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + sentenceArray[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, sentenceArray]);

  return (
    <h1 className="text-[#178eb3] bg-white/70 px-4 py-2 rounded-md text-6xl font-bold text-center flex flex-row justify-center items-center">
      {displayedText}
    </h1>
  );
}
