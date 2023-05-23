import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/storeContext";

function Timer() {
  const state = useContext(StoreContext);
  const timeout = state.timeout;
  console.log("Timeout from store:", timeout); 
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timeRemaining]);

  const formatTime = (timeout) => {
    const minutes = Math.floor(timeout / 60);
    const seconds = timeout % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return <div>Timer: {formatTime(timeRemaining)}</div>;
}

export default Timer;
