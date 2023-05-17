import { useContext } from "react";
import { StoreContext } from "@/context/storeContext";

function Basket() {
  const state = useContext(StoreContext);
  console.log(state);
  return (
    <>
      <h2>Basket</h2>
      <ul>
        {state.ticketBasket.map((item) => {
          return (
            <li key={item.id}>
              Tickets:
              {item.price} x {item.amount}
            </li>
          );
        })}
         {state.tentBasket.map((item) => {
          return (
            <li key={item.id}>
              Tents:
              {item.price} x {item.tentAmount}
            </li>
          );
        })}
          {state.greenFee.map((item) => {
          return (
            <li key={item.id}>
              Green Fee: {item.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Basket;
