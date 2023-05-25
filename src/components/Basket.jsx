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

  const totalPrice =
    tentTotalPrice + ticketTotalPrice + greenFeeTotalPrice + bookingFee;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-xl mb-4 mt-4 p-8">
      <h2 className="uppercase tracking-wide text-sm text-black font-semibold">
        Basket
      </h2>
      <div>
        <h2 className="mt-2 text-gray-500">Tickets</h2>
        <ul>
          {state.ticketBasket.map((item) => (
            <li key={item.id}>
              {item.name} Ticket: {item.price} x {item.amount}
            </li>
          ))}
        </ul>
        <p>Total Ticket Price: {ticketTotalPrice} DKK</p>

        <h2 className="mt-2 text-gray-500">Tents</h2>
        <ul>
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
        <h2 className="mt-2 text-gray-500">Booking Fee</h2>
        <p>Booking Fee {bookingFee} DKK</p>
        <h2 className="mt-2 text-gray-500">Total</h2>
        <p>Total: {totalPrice} DKK</p>
      </div>
    </div>
  );
}

export default Basket;
