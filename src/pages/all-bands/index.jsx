import { useEffect, useState } from "react";
import Anchor from "@/components/Anchor";
import Layout from "@/components/Layout";

export default function AllBands() {
  const [bands, setBands] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://brazen-fortune-fight.glitch.me/bands")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setBands(data);
          setLoading(false);
        }, 1200);
      })
      .catch(console.error);
  }, []);

  if (bands === null) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white bg-gradient-to-r from-custom-purple via-custom-yellow to-custom-red">
        <span className="animate-bounce200 text-8xl">.</span>
        <span className="animate-bounce400 text-8xl">.</span>
        <span className="animate-bounce600 text-8xl">.</span>
      </div>
    );
  }

  return (
    <Layout>
      <section className="flex flex-col justify-between px-10 h-full">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white py-4 pt-10 mt-[5rem]">
            Discover our Line-up
          </h1>
          <h2 className="text-2xl md:text-2xl text-white font-light pb-10 w-full lg:w-1/2">
            FooFest Extravaganza offers distinct music, each band with its own
            unique atmosphere. Here you can see our full line-up for 2023.
          </h2>
        </div>
      </section>
      <section className="container mx-auto p-4 text-center">
        <div className="grid grid-cols-12 gap-4 text-center items-center">
          {bands.map((band, index) => {
            let textStyle;
            let gridColumn;

            // Check the index and set the textStyle accordingly
            if (index < 1) {
              textStyle = "text-5xl font-bold text-center"; // large
              gridColumn = "span 12";
            } else if (index < 16) {
              textStyle = "text-4xl font-medium"; // medium
              gridColumn = "span 4";
            } else if (index < 28) {
              textStyle = "text-3xl"; // smaller
              gridColumn = "span 3"; // spans 1 column
            } else if (index < 50) {
              textStyle = "text-1xl"; // normal
              gridColumn = "span 2"; // spans 1 column
            } else {
              textStyle = "text-1xl"; // normal
              gridColumn = "span 1"; // spans 1 column
            }

            return (
              <a
                href={`/bands/${band.slug}`}
                key={band.name}
                className={`text-white p-4 ${textStyle}`}
                style={{ gridColumn }} // apply gridColumn value here
              >
                <h2 className="text-center">{band.name}</h2>
              </a>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
