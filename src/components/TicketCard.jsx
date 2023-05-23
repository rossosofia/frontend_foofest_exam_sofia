import React from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DispatchContext } from "@/context/storeContext";
import { v4 as uuidv4 } from "uuid";
import { StoreContext } from "@/context/storeContext";
import { useRouter } from "next/router";
import Anchor from "./Anchor";

const TicketCard = () => {
  const router = useRouter();
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);
  const vipTicket = state.ticketBasket.find((ticket) => ticket.name === "VIP");
  const regularTicket = state.ticketBasket.find(
    (ticket) => ticket.name === "Regular"
  );

  function addRegularTicket() {
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: "Regular",
        id: uuidv4(),
        amount: 1,
        price: 799,
      },
    });
  }

  function addVIPTicket() {
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: "VIP",
        id: uuidv4(),
        amount: 1,
        price: 1299,
      },
    });
  }

  function removeOneVIP() {
    dispatch({
      action: "REMOVE_TICKET",
      payload: {
        name: "VIP",
      },
    });
  }

  function removeOneREGULAR() {
    dispatch({
      action: "REMOVE_TICKET",
      payload: {
        name: "Regular",
      },
    });
  }

  async function sendPutRequest() {
    const totalAmount = state.ticketBasket.reduce(
      (acc, ticket) => acc + ticket.amount,
      0
    );
    // console.log(`Area: ${state.area}, Amount: ${totalAmount}`);

    // Send PUT request
    const response = await fetch(
      "http://brazen-fortune-fight.glitch.me/reserve-spot",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          area: state.area,
          amount: totalAmount,
        }),
      }
    );

    // Error handling
    if (!response.ok) {
      // Note: this will only catch network / connection errors
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // If successful, get the response data
    const data = await response.json();

    console.log("PUT response data:", data); // Console log the response data

    // Dispatch all the response data
    dispatch({ action: "SET_RESERVATION_DATA", payload: data });

    router.push("/accomodations");
  }

  const isAvailable =
    (vipTicket && vipTicket.amount > 0) ||
    (regularTicket && regularTicket.amount > 0);

  function getTotalBasketTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }

  const totalBasketTickets = getTotalBasketTickets();
  const canAddMoreTickets = totalBasketTickets < state.available;

  return (
    <>
      <h2>VIP</h2>
      <div>
        <label htmlFor="Quantity" className="sr-only">
          {" "}
          Quantity{" "}
        </label>

        <div className="flex items-center border border-gray-200 rounded">
          <button
            onClick={removeOneVIP}
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            -
          </button>

          <input
            type="number"
            id="Quantity"
            value={vipTicket ? vipTicket.amount : 0}
            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />

          <button
            type="button"
            onClick={addVIPTicket}
            disabled={!canAddMoreTickets}
            className={`w-10 h-10 leading-10 transition hover:opacity-75 ${
              canAddMoreTickets
                ? "text-gray-600"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            +
          </button>
        </div>
      </div>

      <h2>REGULAR</h2>
      <div>
        <label htmlFor="Quantity" className="sr-only">
          {" "}
          Quantity{" "}
        </label>

        <div className="flex items-center border border-gray-200 rounded">
          <button
            onClick={removeOneREGULAR}
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            -
          </button>

          <input
            type="number"
            id="Quantity"
            value={regularTicket ? regularTicket.amount : 0}
            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />

          <button
            type="button"
            onClick={addRegularTicket}
            disabled={!canAddMoreTickets}
            className={`w-10 h-10 leading-10 transition hover:opacity-75 ${
              canAddMoreTickets
                ? "text-gray-600"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            +
          </button>
        </div>
      </div>
      <Anchor
        href="/accomodations/"
        onClick={sendPutRequest}
        disabled={!isAvailable}
      >
        START RESERVATION
      </Anchor>
    </>
  );
};

export default TicketCard;
