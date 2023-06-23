import { useEffect, useState } from "react";
import Anchor from "@/components/Anchor";
import Layout from "@/components/Layout";

export default function Schedule() {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState("mon");

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

  // Formatting
  function formatDay(day) {
    const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);
    return <>{formattedDay}</>;
  }

  // loader
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
            Foofest Extravaganza Schedule
          </h1>
          <h2 className="text-2xl md:text-2xl text-white font-light pb-10 w-full lg:w-1/2">
            FooFest Extravaganza offers three distinct scenes, each with its own
            unique atmosphere.
          </h2>
        </div>
        {/* buttons wrapper */}
        <section className="flex flex-col justify-center items-center px-10 h-full">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(schedule[Object.keys(schedule)[0]]).map((day) => (
              <button
                key={day}
                className={`inline-block border-2 border-black transition-transform duration-500 ease-in-out transform hover:-translate-x-1 hover:-translate-y-1 font-bold py-4 px-6 rounded ${
                  selectedDay === day
                    ? "bg-gray-900 text-white"
                    : "text-black bg-gray-200"
                }`}
                onClick={() => setSelectedDay(day)}
              >
                {formatDay(day)}
              </button>
            ))}
          </div>
        </section>
      </section>
      {/* responsive design for stages' columns */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* This maps over the schedule object and iterates through its entries. For each stage, a div element is created with a unique key attribute set to the stage value.
           */}
          {Object.entries(schedule).map(([stage, days]) => (
            <div key={stage} className="text-white p-4 text-center">
              <h2 className="text-5xl font-bold mb-4">{stage}</h2>
              {/* A conditional rendering check selectedDay && (...). If a selectedDay is present (not null), the code inside the parentheses will be executed. */}
              {selectedDay && (
                <div>
                  {days[selectedDay].map((event, index) => {
                    // Exclude "break" entries
                    if (event.act === "break") {
                      return null;
                    }

                    return (
                      <div role="listitem" key={index} className="mb-3 p-3">
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
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
