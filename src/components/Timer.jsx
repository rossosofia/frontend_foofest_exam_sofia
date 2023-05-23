import React, { useContext, useEffect, useState } from "react";
import { TimerContext } from "@/context/TimerContext";


function Timer() {
  const { timeRemaining, setTimeRemaining } = useContext(TimerContext);

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1000); // Decrease by 1 second (1000 milliseconds)
      }, 1000); // Update every second (1000 milliseconds)

      return () => {
        clearInterval(interval);
      };
    }
  }, [timeRemaining, setTimeRemaining]);
  

  const isLessThanMinute = timeRemaining < 60000; // Check if timeRemaining is less than a minute

  const timeClass = isLessThanMinute ? "text-2xl text-red-500" : "text-2xl";

  const formatTime = (timeInMilliseconds) => {
    const seconds = Math.floor(timeInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
   
  <div className={timeClass}>{formatTime(timeRemaining)}</div>

  )
}

export default Timer;




  

