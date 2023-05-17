import React, { useState } from "react";
import QuantityInput from "./QuantityInput";
import { useContext } from "react";
import { StoreContext } from "@/context/storeContext";
import { DispatchContext } from "@/context/storeContext";
import { v4 as uuidv4 } from "uuid";

export default function TentCard() {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);
  const twoTent = state.basket.find((tent) => tent.tentName === "2PERSON");
  const threeTent = state.basket.find((tent) => tent.tentName === "3PERSON");

  function addTwoPersonTent() {
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

  function addThreePersonTent() {
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

  function removeOneTwoPersonTent() {
    dispatch({
      action: "REMOVE_TENT",
      payload: {
        tentName: "2PERSON",
      },
    });
  }

  function removeOneThreePersonTent() {
    dispatch({
      action: "REMOVE_TENT",
      payload: {
        tentName: "3PERSON",
      },
    });
  }

  const isAvailable = true;
  (twoTent && twoTent.tentAmount > 0) ||
    (threeTent && threeTent.tentAmount > 0);

  function getTotalBasketTents() {
    return state.basket.reduce((total, tent) => total + tent.tentAmount, 0);
  }

  const totalBasketTents = getTotalBasketTents();
  // const canAddMoreTents = totalBasketTents < state.available;
  const canAddMoreTents = true;

  return (
    <section
      className={`flex gap-4 flex-wrap ${isSelected ? "bg-lightblue" : ""}`}
    >
      <article
        className="relative flex items-start justify-between border-2 border-black bg-white p-4 shadow-xl sm:p-6 lg:p-8"
        href="#"
      >
        <div className="pt-4 text-gray-500">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>

          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            2 people tent
          </h3>

          <p className="mt-2 hidden text-sm sm:block">299-</p>

          <QuantityInput
            value={twoTent ? twoTent.tentAmount : 0}
            onClickAdd={addTwoPersonTent}
            onClickRemove={removeOneTwoPersonTent}
            canAddMoreTickets={canAddMoreTents}
          />
        </div>
      </article>

      <article
        className="relative flex items-start justify-between border-2 border-black bg-white p-4 shadow-xl sm:p-6 lg:p-8"
        href="#"
      >
        <div className="pt-4 text-gray-500">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>

          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            3 people tent
          </h3>

          <p className="mt-2 hidden text-sm sm:block">399,-</p>

          <QuantityInput
            value={threeTent ? threeTent.tentAmount : 0}
            onClickAdd={addThreePersonTent}
            onClickRemove={removeOneThreePersonTent}
            canAddMoreTickets={canAddMoreTents}
          />
        </div>
      </article>
    </section>
  );
}
