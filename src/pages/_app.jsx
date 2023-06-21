import "@/styles/globals.css";
import { StoreProvider } from "@/context/storeContext";
import { TimerProvider } from "@/context/TimerContext";
import { useRouter } from "next/router";

// This code snippet shows an example of using useRouter to conditionally render components based on the current route's pathname. If the current route matches the specified timer pages, the TimerProvider is included, which will activate the timer for those specific pages. Otherwise, the Component is rendered without the timer.

export default function App({ Component, pageProps }) {
  // We did this so the timer is only counting down in these pages
  const router = useRouter();
  const timerPages = ["/accomodations", "/guests", "/payment"];
  const isTimerActive = timerPages.includes(router.pathname);
  //checks if the current route's pathname is present in timerPages array, determining whether the timer should be active or not.

  return (
    // The return statement uses conditional rendering to determine whether the timer-related components should be included based on isTimerActive value.
    <StoreProvider>
      {/* If isTimerActive is true, the TimerProvider component wraps the Component, which means the timer will be active for routes specified in timerPages. */}
      {isTimerActive && (
        <TimerProvider>
          <Component {...pageProps} />
        </TimerProvider>
      )}
      {/* If isTimerActive is false, the Component is rendered without the TimerProvider, indicating that the timer is not active for other routes. */}
      {!isTimerActive && <Component {...pageProps} />}
    </StoreProvider>
  );
}
