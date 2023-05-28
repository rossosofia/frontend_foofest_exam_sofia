import CampingCard from "@/components/CampingCard";
import Layout from "@/components/Layout";
import { useContext, useEffect } from "react";
import { DispatchContext } from "@/context/storeContext";

export default function Campingsite({ data }) {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({ action: "EMPTY_BASKET" });
  }, [dispatch]);

  return (
    <Layout>
      <section className="flex flex-col justify-between px-10 h-full">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white py-4 pt-10 mt-[5rem]">
            Discover our camping areas
          </h1>
          <h2 className="text-2xl md:text-2xl text-white font-light pb-10 w-full lg:w-1/2">
            FooFest Extravaganza offers five distinct camping areas, each with
            its own unique atmosphere and amenities.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 py-5 items-end">
          {data.map((areas) => (
            <CampingCard key={areas.area} {...areas} />
          ))}
        </div>
      </section>
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
