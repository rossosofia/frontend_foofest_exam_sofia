import { useContext } from "react";
import { StoreContext } from "@/context/storeContext";

function Basket() {
  const state = useContext(StoreContext);

  const tentTotalPrice = [...state.tentBasket.slice(1)].reduce(
    (total, item) => {
      return total + item.price * item.tentAmount;
    },
    0
  );

  const ticketTotalPrice = state.ticketBasket.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  const greenFeeTotalPrice = state.greenFee.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const totalPrice = tentTotalPrice + ticketTotalPrice + greenFeeTotalPrice;

  return (
    <>
      <h2>Basket</h2>
      <div>
        <h2>Tickets</h2>
        <ul>
          {state.ticketBasket.map((item) => (
            <li key={item.id}>
              {item.name} Ticket: {item.price} x {item.amount}
            </li>
          ))}
        </ul>
        <p>Total Ticket Price: {ticketTotalPrice}</p>

        <h2>Tents</h2>
        <ul>
          {/* {i did this because tentBasket[0]= hasTent} */}
          {[...state.tentBasket.slice(1)].map((item, index) => {
            const totalTentPrice =
              item.tentAmount !== 0 ? item.price * item.tentAmount : 0;
            return (
              <li key={item.id || index}>
                {item.tentName} tent: {item.price} x {item.tentAmount} ={" "}
                {totalTentPrice}
              </li>
            );
          })}
        </ul>
        <p>Total Tent Price: {tentTotalPrice}</p>

        <ul>
          {state.greenFee.map((item, index) => (
            <li key={item.id || index}>Green Fee: {item.price}</li>
          ))}
        </ul>

        <p>Total: {totalPrice}</p>
      </div>
    </>
  );
}

export default Basket;
