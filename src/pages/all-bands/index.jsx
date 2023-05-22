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
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">All Bands</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bands.map((band) => (
            <div key={band.name} className="bg-white rounded shadow p-4">
              <h2 className="text-xl font-bold mb-2">{band.name}</h2>
              <p className="text-gray-600">Genre: {band.genre}</p>
              <Anchor
                href={`/bands/${band.slug}`}
                className="text-blue-500 mt-2"
              >
                View Details
              </Anchor>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
