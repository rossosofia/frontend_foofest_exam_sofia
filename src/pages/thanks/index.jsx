import React, { useEffect, useContext } from "react";
import confetti from "canvas-confetti";
import { useRouter } from "next/router";
import { DispatchContext, StoreContext } from "@/context/storeContext";
import Barcode from "react-barcode";
import { v4 as uuidv4 } from "uuid";

export default function Thanks() {
  const router = useRouter();
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);
  let totalTickets = state.ticketBasket.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  let totalPrice = state.ticketBasket.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );

  useEffect(() => {
    let isMounted = true;
    let duration = 7 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);

    setTimeout(() => {
      dispatch({ action: "EMPTY_BASKET" });
      if (isMounted) {
        // Only push to router if component is still mounted
        router.push("/");
      }
    }, duration);

    return () => {
      isMounted = false; // Update the variable when the component unmounts
      clearInterval(interval);
    };
  }, [dispatch, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-6">Your Festival Tickets</h1>
          <div className="uppercase tracking-wide text-b text-black font-semibold">
            Festival Ticket
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            Congratulations, see you at Foofest Extravaganza!
          </h2>
          <p className="mt-2 text-gray-500">Here are your ticket details:</p>
          <div className="mb-4">
            <h3 className="font-semibold">Total Tickets: {totalTickets}</h3>
            <h3 className="font-semibold">Total Price: {totalPrice} DKK</h3>
            <div className="grid place-items-center align-middle mt-2 max-w-10 sm:block ">
              <Barcode value={uuidv4()} width={1} height={80} margin={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
