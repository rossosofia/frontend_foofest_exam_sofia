import { useContext } from "react";
import { StoreContext, DispatchContext } from "@/context/storeContext";
import { v4 as uuidv4 } from "uuid";
import calculateTents from "./CalculateTentss";

export default function TestTentCard() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);

  const twoTent = state.tentBasket.find((tent) => tent.tentName === "2PERSON");
  const threeTent = state.tentBasket.find(
    (tent) => tent.tentName === "3PERSON"
  );
  const hasTent = state.tentBasket.some((tent) => tent.hasTent);

  function getTotalBasketTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }

  const totalBasketTickets = getTotalBasketTickets();

  //this function prioritize the 3tent people. so it first divide the tickets with
  //3tents and after the remaining with two

  function addTwoPersonTent() {
    if (canAddMoreTents && num2PersonTents < tents.num2PersonTents) {
      dispatch({
        action: "ADD_TENT",
        payload: {
          tentName: "2PERSON",
          tentID: uuidv4(),
          tentAmount: 1,
          tentAmountPeople: 2,
          price: 299,
        },
      });
    }
  }

  function addThreePersonTent() {
    if (canAddMoreTents && num3PersonTents < tents.num3PersonTents) {
      dispatch({
        action: "ADD_TENT",
        payload: {
          tentName: "3PERSON",
          tentID: uuidv4(),
          tentAmount: 1,
          tentAmountPeople: 3,
          price: 399,
        },
      });
    }
  }

  function removeOneTwoPersonTent() {
    if (twoTent && twoTent.tentAmount > 0) {
      dispatch({
        action: "REMOVE_TENT",
        payload: {
          tentName: "2PERSON",
        },
      });
    }
  }

  function removeOneThreePersonTent() {
    if (threeTent && threeTent.tentAmount > 0) {
      dispatch({
        action: "REMOVE_TENT",
        payload: {
          tentName: "3PERSON",
        },
      });
    }
  }

  const getTotalBasketTents = () => {
    return state.tentBasket.reduce((total, tent) => total + tent.tentAmount, 0);
  };

  const totalBasketTents = getTotalBasketTents();
  const maxTents =
    Math.floor(totalBasketTickets / 3) +
    Math.floor((totalBasketTickets % 3) / 2);
  const tents = calculateTents(totalBasketTickets);
  let canAddMoreTents = totalBasketTents + 5 < maxTents;

  if (hasTent && tents !== null) {
    const { num3PersonTents, num2PersonTents } = tents;
    canAddMoreTents = true;
    console.log(`Number of 3-person tents: ${num3PersonTents}`);
    console.log(`Number of 2-person tents: ${num2PersonTents}`);
  } else {
    canAddMoreTents = false;
    console.log(" canAddMoreTents = false");
  }

  const num2PersonTents = twoTent ? twoTent.tentAmount : 0;
  const num3PersonTents = threeTent ? threeTent.tentAmount : 0;

  return (
    <>
      <h2>2-person tent</h2>
      <div>
        <label htmlFor="Quantity" className="sr-only">
          Quantity
        </label>

        <div className="flex items-center border border-gray-200 rounded">
          <button
            onClick={removeOneTwoPersonTent}
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            -
          </button>

          <input
            type="number"
            id="Quantity"
            value={num2PersonTents}
            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />

          <button
            type="button"
            onClick={addTwoPersonTent}
            disabled={!canAddMoreTents || !hasTent}
            className={`w-10 h-10 leading-10 transition hover:opacity-75 ${
              canAddMoreTents && hasTent
                ? "text-gray-600"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            +
          </button>
        </div>
      </div>

      <h2>3-person tent</h2>
      <div>
        <label htmlFor="Quantity" className="sr-only">
          Quantity
        </label>

        <div className="flex items-center border border-gray-200 rounded">
          <button
            onClick={removeOneThreePersonTent}
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
          >
            -
          </button>

          <input
            type="number"
            id="Quantity"
            value={num3PersonTents}
            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />

          <button
            type="button"
            onClick={addThreePersonTent}
            disabled={!canAddMoreTents || !hasTent}
            className={`w-10 h-10 leading-10 transition hover:opacity-75 ${
              canAddMoreTents && hasTent
                ? "text-gray-600"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
