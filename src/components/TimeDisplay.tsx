"use client";

import { useState, useEffect } from "react";

export default function TimeDisplay() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="font-sans text-[0.80rem] text-secondary tabular-nums"
      suppressHydrationWarning
    >
      {time}
    </span>
  );
}
