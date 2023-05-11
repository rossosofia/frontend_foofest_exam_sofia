import FlowLayout from "@/components/FlowLayout";
import SelectCard from "@/components/SelectCard";

export default function Tickets() {
  return (
    <FlowLayout>
      <h1>Buy Tickets</h1>
      <p>
        A variety of ticket options are available, including Regular and VIP
        passes, which grant access to the entire seven-day festival.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <SelectCard
          title="V.I.P."
          description="VIP ticket holders will enjoy additional perks, such as exclusive lounge areas, priority access to festival attractions, and special events."
        />
        <SelectCard title="Standard" description="write something" />
      </div>
    </FlowLayout>
  );
}
