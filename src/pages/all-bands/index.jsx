import { useEffect, useState } from "react";
import Anchor from "@/components/Anchor";
import Layout from "@/components/Layout";

export default function AllBands() {
  const [bands, setBands] = useState(null);

  useEffect(() => {
    fetch("https://brazen-fortune-fight.glitch.me/bands")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(setBands)
      .catch(console.error);
  }, []);

  if (bands === null) {
    return "Loading...";
  }

  return (
    <Layout>
      <section className="flex flex-col justify-between px-10 h-full">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white py-4 pt-10 mt-[5rem]">
            Discover all bands
          </h1>
          <h2 className="text-2xl md:text-2xl text-white font-light pb-10 w-full lg:w-1/2">
            FooFest Extravaganza offers distinct music, each band with its own
            unique atmosphere.
          </h2>
        </div>
      </section>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bands.map((band) => (
            <div key={band.name} className="bg-white rounded shadow p-4">
              <h2 className="text-xl font-bold mb-2">{band.name}</h2>
              <p className="text-gray-600">Genre: {band.genre}</p>
              <Anchor href={`/bands/${band.slug}`}>View Details</Anchor>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
