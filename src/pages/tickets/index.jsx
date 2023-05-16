import React, { useContext } from "react";
import FlowLayout from "@/components/FlowLayout";
import TicketCard from "@/components/TicketCard";
import { StoreContext } from "@/context/storeContext";

export default function Tickets() {
  const state = useContext(StoreContext); // use the StoreContext to access the state

  return (
    <FlowLayout>
      <h1>Buy Tickets for {state.area}</h1>
      <p>
        A variety of ticket options are available, including Regular and VIP
        passes, which grant access to the entire seven-day festival.{" "}
      </p>
      <TicketCard />
    </FlowLayout>
  );
}
