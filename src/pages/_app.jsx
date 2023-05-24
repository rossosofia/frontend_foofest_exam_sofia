import "@/styles/globals.css";
import { StoreProvider } from "@/context/storeContext";
import { TimerProvider } from "@/context/TimerContext";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  // We did this so the timer is only counting down in these pages
  const router = useRouter();
  const timerPages = ["/accomodations", "/guests", "/payment"];
  const isTimerActive = timerPages.includes(router.pathname);
  
  return (
    <StoreProvider>
      {isTimerActive && (
        <TimerProvider>
          <Component {...pageProps} />
        </TimerProvider>
      )}
      {!isTimerActive && <Component {...pageProps} />}
    </StoreProvider>
  );
}
