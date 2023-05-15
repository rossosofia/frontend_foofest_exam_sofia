import React, { useContext } from "react";
import FlowLayout from "@/components/FlowLayout";
import TicketsCard from "@/components/CampingCard";
import { StoreContext } from "@/context/storeContext";

export default function Tickets() {
  const state = useContext(StoreContext);
  const { area } = state; // Deconstruct area from your state

  return (
    <FlowLayout>
      <h1>Buy Tickets for {area}</h1>
      <p>
        A variety of ticket options are available, including Regular and VIP
        passes, which grant access to the entire seven-day festival.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <TicketsCard
          title="V.I.P."
          description="VIP ticket holders will enjoy additional perks, such as exclusive lounge areas, priority access to festival attractions, and special events."
        />
        <TicketsCard title="Standard" description="write something" />
      </div>
    </FlowLayout>
  );
}
