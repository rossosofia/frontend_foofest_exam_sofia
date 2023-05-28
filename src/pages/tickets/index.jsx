import React, { useContext } from "react";
import FlowLayout from "@/components/FlowLayout";
import TicketCard from "@/components/TicketCard";
import { StoreContext } from "@/context/storeContext";
import Basket from "@/components/Basket";

export default function Tickets() {
  const state = useContext(StoreContext); // use the StoreContext to access the state

  return (
    <FlowLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto items-start">
        <section>
          <h1 className="mb-6 text-2xl">
            You are buying tickets for: {state.area}
          </h1>
          <p className=" mb-6">
            A variety of ticket options are available to tailor your FooFest
            Extravaganza experience. Our Regular pass grants you full access to
            the seven-day festival, immersing you in the vibrant world of music
            and entertainment we have lined up.
          </p>
          <p className="mb-6">
            For those seeking an elevated experience, our VIP passes offer the
            same full access plus added perks. VIP pass holders will enjoy
            expedited entry, access to exclusive VIP-only areas, premium
            restroom facilities, and more. Choose the VIP pass to make your
            FooFest experience truly extraordinary.
          </p>
          <TicketCard />
        </section>

        <section>
          <Basket />
        </section>
      </div>
    </FlowLayout>
  );
}
