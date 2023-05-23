import React, { createContext, useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/storeContext";

const TimerContext = createContext();

function TimerProvider({ children }) {
  const { reserveSpot } = useContext(StoreContext);
  const timeout = reserveSpot[0]?.timeout || 0;
  const [timeRemaining, setTimeRemaining] = useState(timeout);


  //If the timeout value in your StoreContext changes dynamically and you want to update the 
  //timeRemaining value in the TimerProvider accordingly, you can modify the TimerProvider 
  //component to include a useEffect hook that listens for changes in the timeout value.
  useEffect(() => {
    setTimeRemaining(timeout); // Update timeRemaining when timeout changes
  }, [timeout]);

  return (
    <TimerContext.Provider value={{ timeRemaining, setTimeRemaining }}>
      {children}
    </TimerContext.Provider>
  );
}

export { TimerContext, TimerProvider };
