import FlowLayout from "@/components/FlowLayout";
import Anchor from "@/components/Anchor";
import GuestAccordion from "@/components/GuestAccordian";
import { useContext, useState } from "react";
import { StoreContext } from "@/context/storeContext";

export default function Guests() {
  const state = useContext(StoreContext);
  const [guestInfo, setGuestInfo] = useState([]);

  function getTotalTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }

  function handleBasketSubmission() {
    dispatch({
      action: "UPDATE_GUEST_INFO",
      payload: state.guestInfo, // Pass the guestInfo array from the context
    });
  }

  function updateGuestInfo({ index, firstName, lastName, email }) {
    setGuestInfo((prevGuestInfo) => {
      const updatedGuestInfo = [...prevGuestInfo];
      updatedGuestInfo[index] = { firstName, lastName, email };
      return updatedGuestInfo;
    });
  }

  // function updateGuestInfo({ index, firstName, lastName, email }) {
  //   setGuestInfo((prevGuestInfo) => {
  //     const updatedGuestInfo = [...prevGuestInfo];
  //     updatedGuestInfo[index] = { firstName, lastName, email };
  //     return updatedGuestInfo;
  //   });
  // }

  const totalTickets = getTotalTickets();

  return (
    <FlowLayout>
      <h1>Step 3</h1>
      <p>This is the content for Step 3.</p>

      {[...Array(totalTickets)].map((_, i) => (
        <GuestAccordion key={i} index={i} onUpdateGuestInfo={updateGuestInfo} />
      ))}
      <Anchor href="/payment/" onClick={handleBasketSubmission}>
        GO TO PAYMENT
      </Anchor>
    </FlowLayout>
  );
}
