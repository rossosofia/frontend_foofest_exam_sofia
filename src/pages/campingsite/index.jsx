import SelectCard from "@/components/SelectCard";

export default function Campingsite({ data }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-500 py-4">
        Choose your camping site
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
        {data.map((areas) => (
          <SelectCard key={data.area} {...areas} />
        ))}
      </div>

      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "http://brazen-fortune-fight.glitch.me//available-spots"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
