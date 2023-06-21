import React, { createContext, useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/storeContext";

// create a new context object
const TimerContext = createContext();

function TimerProvider({ children }) {
  // access the store context and extracting the reserveSpot and its values (object destructuring)
  const { reserveSpot } = useContext(StoreContext);
  // Initializing Time Remaining
  const timeout = reserveSpot[0]?.timeout || 0;
  // Managing
  const [timeRemaining, setTimeRemaining] = useState(timeout);

  // Updating.
  // The useEffect hook takes two arguments: a function and a dependency array.
  //  The effect function will be executed whenever any of the values in the dependency array [timeout] change.

  useEffect(() => {
    setTimeRemaining(timeout);
  }, [timeout]);

  return (
    <TimerContext.Provider value={{ timeRemaining, setTimeRemaining }}>
      {children}
    </TimerContext.Provider>
  );
}

export { TimerContext, TimerProvider };
