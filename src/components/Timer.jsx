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






// function Timer() {
//   const state = useContext(StoreContext);
//   const timeout = state.timeout;
//   const [timeRemaining, setTimeRemaining] = useState(timeout);
//   const dispatch = useContext(DispatchContext);

//   useEffect(() => {
//     setTimeRemaining(timeout); // Update timeRemaining when timeout changes
//   }, [timeout]);

//   useEffect(() => {
//     if (timeRemaining > 0) {
//       const interval = setInterval(() => {
//         setTimeRemaining((prevTime) => {
//           const updatedTime = prevTime - 1;
//           dispatch({ action: "UPDATE_TIME_REMAINING", payload: updatedTime });
//           return updatedTime;
//         });
//       }, 1); // Update every millisecond
  
//       return () => {
//         clearInterval(interval);
//       };
//     }
//   }, [timeRemaining, dispatch]);
  

