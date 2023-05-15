import FlowLayout from "@/components/FlowLayout";
import TicketCard from "@/components/TicketCard";

export default function Tickets() {
  return (
    <FlowLayout>
      <h1>Buy Tickets for</h1>
      <p>
        A variety of ticket options are available, including Regular and VIP
        passes, which grant access to the entire seven-day festival.{" "}
      </p>
      <TicketCard />
    </FlowLayout>
  );
}
