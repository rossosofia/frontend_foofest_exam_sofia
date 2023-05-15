import React from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DispatchContext } from "@/context/storeContext";
import { v4 as uuidv4 } from "uuid";
import { StoreContext } from "@/context/storeContext";

const TicketCard = (props) => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);
  const vipTicket = state.basket.find((ticket) => ticket.name === "VIP");
  const regularTicket = state.basket.find(
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

  return (
    <>
      {/* <Button onClick={addRegularTicket} variant="contained">
        Regular{" "}
      </Button>
      <Button onClick={addVIPTicket} variant="contained">
        VIP
      </Button> */}
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
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
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
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
