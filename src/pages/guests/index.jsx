import React, { useContext, useState } from "react";
import FlowLayout from "@/components/FlowLayout";
import Anchor from "@/components/Anchor";
import GuestAccordion from "@/components/GuestAccordian";
import { DispatchContext, StoreContext } from "@/context/storeContext";

export default function Guests() {
  const state = useContext(StoreContext);
  const dispatch = useContext(DispatchContext);
  const [guestInfo, setGuestInfo] = useState([]);

  function getTotalTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }
  const handleGuestInfoChange = (index, field, value) => {
    setGuestInfo((prevGuestInfo) => {
      const updatedGuestInfo = [...prevGuestInfo];
      const updatedGuest = {
        ...updatedGuestInfo[index],
        [field]: value,
      };
      updatedGuestInfo[index] = updatedGuest;
      return updatedGuestInfo;
    });
  };

  const handleSaveGuestInfo = () => {
    dispatch({ action: "UPDATE_GUEST_INFO", payload: guestInfo });
  };

  const totalTickets = getTotalTickets();

  return (
    <FlowLayout>
      <h1>Step 3</h1>
      <p>This is the content for Step 3.</p>

      {[...Array(totalTickets)].map((_, i) => (
        <GuestAccordion
          key={i}
          index={i}
          handleGuestInfoChange={handleGuestInfoChange}
        />
      ))}
      <Anchor onClick={handleSaveGuestInfo} href="/payment/">
        GO TO PAYMENT
      </Anchor>
    </FlowLayout>
  );
}
