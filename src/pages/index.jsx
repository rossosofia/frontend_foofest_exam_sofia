import SelectCard from "@/components/SelectCard";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-500 py-4">
        FooFest Extravaganza
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <SelectCard
          title="Viking Village"
          description="A Nordic-themed camping area, transporting guests to the days of the Vikings with longhouses and rune-carved totems."
        />
        <SelectCard
          title="Auora Acres"
          description="A tranquil camping area featuring mesmerizing light installations, creating a magical ambiance reminiscent of the Northern Lights."
        />
        <SelectCard
          title="Fjord Forest"
          description="A serene, forested area where campers can immerse themselves in nature, inspired by the beauty of Scandinavian landscapes."
        />
        <SelectCard
          title="Mytich Meadows"
          description="A whimsical camping area, filled with colorful tents and playful sculptures inspired by Scandinavian folklore and mythology."
        />
        <SelectCard
          title="Midnight Sun Santuary"
          description="A premium camping area offering upgraded facilities, wellness activities, and a soothing ambiance, reminiscent of the Scandinavian summer nights."
        />
      </div>
    </>
  );
}
