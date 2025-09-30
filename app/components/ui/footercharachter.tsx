"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FooterCharacter() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + direction * 5;
        if (newPos > window.innerWidth - 32) {
          setDirection(-1);
          return window.innerWidth - 32;
        }
        if (newPos < 0) {
          setDirection(1);
          return 0;
        }
        return newPos;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative w-full h-10 mt-10">
      <Image
        src="/kirby-on-a-warp-star.gif"
        alt="Character"
        style={{
          left: position,
          transform: `scaleX(${direction})`,
        }}
        className="absolute bottom-0 w-16 h-16 transition-transform duration-100"
        width={32}
        height={32}
      />
    </div>
  );
}
