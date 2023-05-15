import { useContext } from "react";
import { StoreContext } from "@/context/storeContext";

function Basket() {
  const state = useContext(StoreContext);
  console.log(state);
  return (
    <>
      <h2>Basket </h2>
      <ul>
        {state.basket.map((item) => {
          return <li key={item.}>{item.price}</li>;
        })}
      </ul>
    </>
  );
}

export default Basket;
