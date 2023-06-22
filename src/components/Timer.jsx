import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TimerContext } from "@/context/TimerContext";
import { DispatchContext } from "@/context/storeContext";

function Timer() {
  const { timeRemaining, setTimeRemaining } = useContext(TimerContext);
  const dispatch = useContext(DispatchContext);
  const router = useRouter();

  useEffect(() => {
    // if the time remaning is more than 0, just keep counting
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1000);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      // Timer has run out, navigate back to "/"
      //  router.push("/");
    }
  }, [timeRemaining, setTimeRemaining, router]);

  const lastSec = timeRemaining == 1000;

  if (lastSec) {
    dispatch({ action: "EMPTY_BASKET" });
    router.push("/");
  }

  const isLessThanMinute = timeRemaining > 1000 && timeRemaining <= 60000;
  const timeClass = isLessThanMinute
    ? "text-2xl text-red-500 ml-2"
    : "text-2xl ml-2";

  const formatTime = (timeInMilliseconds) => {
    if (timeInMilliseconds <= 0) {
      return "05:00"; // Placeholder text when time is 00:00
    }
    const seconds = Math.floor(timeInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return <div className={timeClass}>{formatTime(timeRemaining)}</div>;
}

export default Timer;
