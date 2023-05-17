import { useContext } from "react";
import { StoreContext } from "@/context/storeContext";

function Basket() {
  const state = useContext(StoreContext);
  console.log(state);
  return (
    <>
      <h2>Basket </h2>
      <ul>
        {state.ticketBasket.map((item) => {
          return (
            <li key={item.id}>
              {item.price} x {item.amount}
            </li>
          );
        })}
         {state.tentBasket.map((item) => {
          return (
            <li key={item.id}>
              {item.price} x {item.tentAmount}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Basket;
