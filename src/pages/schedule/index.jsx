import { useEffect, useState } from "react";
import Anchor from "@/components/Anchor";
import Layout from "@/components/Layout";

export default function Schedule() {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://brazen-fortune-fight.glitch.me/schedule")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setSchedule(data);
          setLoading(false);
        }, 1200);
      })
      .catch(console.error);
  }, []);

  function getSlug(bandName) {
    return bandName
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
  }

  function formatDay(day) {
    const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);
    return formattedDay;
  }

  if (schedule === null) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-2xl bg-gradient-to-r from-custom-purple via-custom-yellow to-custom-red">
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
            Discover our line-up
          </h1>
          <h2 className="text-2xl md:text-2xl text-white font-light pb-10 w-full lg:w-1/2">
            FooFest Extravaganza offers three distinct scenes, each with its own
            unique atmosphere.
          </h2>
        </div>
      </section>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(schedule).map(([stage, days]) => (
            <div key={stage} className="text-white p-4 text-center">
              <h2 className="text-5xl font-bold mb-4">{stage}</h2>
              {Object.entries(days).map(([day, events], index) => (
                <div key={day}>
                  {index > 0 && <hr className="my-4" />}
                  <h3 className="text-3xl mb-2">{formatDay(day)}</h3>{" "}
                  {/* Format the day name */}
                  <div role="list" className="mb-4">
                    {events.map((event, index) => {
                      // Exclude "break" entries
                      if (event.act === "break") {
                        return null;
                      }

                      return (
                        <div role="listitem" key={index} className="mb-3 p-3 ">
                          <p className="text-xl font-medium text-center">
                            {event.start} - {event.end}
                          </p>
                          <Anchor
                            className="flex justify-center"
                            href={`/bands/${getSlug(event.act)}`}
                          >
                            {event.act}
                          </Anchor>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
