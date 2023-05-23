import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/storeContext";

function Timer() {
  const state = useContext(StoreContext);
  const timeout = state.timeout;
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  useEffect(() => {
    setTimeRemaining(timeout); // Update timeRemaining when timeout changes
  }, [timeout]);

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1); // Update every millisecond

      return () => {
        clearInterval(interval);
      };
    }
  }, [timeRemaining]);
  

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

  return <div className={timeClass}>{formatTime(timeRemaining)}</div>;
}

export default Timer;
