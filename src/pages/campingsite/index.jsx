import CampingCard from "@/components/CampingCard";
import Layout from "@/components/Layout";

export default function Campingsite({ data }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 p-4">
        {data.map((areas) => (
          <CampingCard key={areas.area} {...areas} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
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
