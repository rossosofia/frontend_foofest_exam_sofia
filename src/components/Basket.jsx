import { useContext } from "react";
import { StoreContext } from "@/context/storeContext";
import Anchor from "./Anchor";

function Basket() {
  const state = useContext(StoreContext);
  console.log(state);

  const bookingFee = 99;

  const formattedAmount = (amount) => {
    const formatted = amount.toLocaleString("en", {
      minimumFractionDigits: 0,
      useGrouping: true,
    });
    return formatted.replace(/(\.\d*?)0+$/, "$1").replace(",", ".");
  };

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
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-8xl p-8 mb-4">
      <h2 className="text-2xl">
        BASKET
      </h2>

      <div>
        {/* ------------------TICKETS------------------------- */}
        {state.ticketBasket.length > 0 && (
          <>
            <h3 className="mt-2 text-gray-500 font-semibold">Tickets</h3>
            <ul>
              {state.ticketBasket.map((item) => (
                <li key={item.id}>
                  {item.amount} x {item.name}
                </li>
              ))}
            </ul>
            {/* <p>Total Ticket Price: {formattedAmount(ticketTotalPrice)} DKK</p> */}
          </>
        )}
        {/* ------------------TENTS------------------------- */}
        {state.tentBasket.length > 0 && (
          <>
            <h3 className="mt-2 text-gray-500 font-semibold">Tents</h3>
            <ul>
              {state.tentBasket.slice(1).map((item, index) => {
                if (item.tentAmount === 0) {
                  return null; // Skip rendering the item
                }
                return (
                  <li key={item.id || index}>
                    {item.tentAmount} x {item.tentName}
                  </li>
                );
              })}
            </ul>
            {/* <p>Total Tent Price: {formattedAmount(tentTotalPrice)} DKK</p> */}
          </>
        )}
        {/* ------------------GREEN FEE------------------------- */}
        {state.greenFee.length > 0 && state.greenFee[0].hasGreen && (
          <ul>
            <li>1 x Green Fee</li>
          </ul>
        )}

        {/* ------------------BOOKING FEE------------------------- */}
        {state.ticketBasket.length > 0 && (
          <p className="mt-2 text-gray-500 font-sm">
          Booking Fee   {bookingFee} DKK
        </p>
      )}

       
         {/* ------------------TOTAL------------------------- */}
         {state.ticketBasket.length > 0 && (
           <div className="mt-2">
             <h2 className="inline-block text-xl ">Total</h2>
             <p className="inline-block ml-2 text-xl font-semibold">{formattedAmount(totalPrice)} DKK</p>
           </div>
         )}
        {state.ticketBasket.length > 0 && (
        <div className="mt-4">
          <Anchor href="/"  >
          Cancel Booking 
          </Anchor>
        </div>
        )}
      </div>
    </div>
  );
}

export default Basket;
