import { useEffect, useState } from "react";
import Anchor from "@/components/Anchor";

export default function Schedule() {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    fetch("https://brazen-fortune-fight.glitch.me/schedule")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(setSchedule)
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
    return "Loading...";
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {Object.entries(schedule).map(([stage, days]) => (
        <div key={stage} className="bg-blue-200 p-4 rounded">
          <h2 className="text-2xl mb-4">{stage}</h2>
          {Object.entries(days).map(([day, events], index) => (
            <div key={day}>
              {index > 0 && <hr className="my-4" />} {/* Add a separator */}
              <h3 className="text-xl mb-2">{formatDay(day)}</h3>{" "}
              {/* Format the day name */}
              <ul className="list-disc list-inside mb-4">
                {events.map((event, index) => (
                  <li key={index} className="mb-1">
                    {event.start} - {event.end} :{" "}
                    {event.act === "break" ? (
                      event.act
                    ) : (
                      <Anchor href={`/bands/${getSlug(event.act)}`}>
                        {event.act}
                      </Anchor>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
