import { useContext } from "react";
import { StoreContext } from "@/context/storeContext";

function Basket() {
  const state = useContext(StoreContext);
  console.log(state);

  const bookingFee = 99;

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

  const totalPrice = tentTotalPrice + ticketTotalPrice + greenFeeTotalPrice  + bookingFee;

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
        <p>Total Ticket Price: {ticketTotalPrice} DKK</p>

        <h2>Tents</h2>
        <ul>
          {/* {i did this because tentBasket[0]= hasTent} */}
          {[...state.tentBasket.slice(1)].map((item, index) => {
            const totalTentPrice =
              item.tentAmount !== 0 ? item.price * item.tentAmount : 0;
            return (
              <li key={item.id || index}>
                {item.tentName} tent: {item.price} x {item.tentAmount} ={" "}
                {totalTentPrice} DKK
              </li>
            );
          })}
        </ul>
        <p>Total Tent Price: {tentTotalPrice} DKK</p>

        <ul>
          {state.greenFee.map((item, index) => (
            <li key={item.id || index}>Green Fee: {item.price} DKK</li>
          ))}
        </ul>
        <p>Booking Fee {bookingFee} DKK</p>
        <p>Total: {totalPrice} DKK</p>

        {/* <ul>
          {state.guestInfo.map((item, index) => (
            <li key={item.id || index}>Gest {index +1}: {item.firstName} {item.lastName}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
}

export default Basket;
