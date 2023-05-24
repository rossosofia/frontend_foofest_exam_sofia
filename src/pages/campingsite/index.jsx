import { useEffect, useContext } from "react";
import CampingCard from "@/components/CampingCard";
import Layout from "@/components/Layout";
import { DispatchContext } from "@/context/storeContext";

export default function Campingsite({ data }) {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({ action: "EMPTY_BASKET" });
  }, [dispatch]);

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
