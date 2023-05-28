import React from "react";
import Anchor from "./Anchor";
import { useContext } from "react";
import { DispatchContext } from "@/context/storeContext";
import { useRouter } from "next/router";

const campingAreaDescriptions = [
  {
    area: "Svartheim",
    description:
      "A Nordic-themed camping area, transporting guests to the days of the Vikings with longhouses and rune-carved totems.",
  },
  {
    area: "Nilfheim",
    description:
      "A tranquil camping area featuring mesmerizing light installations, creating a magical ambiance reminiscent of the Northern Lights.",
  },
  {
    area: "Helheim",
    description:
      "A serene, forested area where campers can immerse themselves in nature, inspired by the beauty of Scandinavian landscapes.",
  },
  {
    area: "Muspelheim",
    description:
      "A whimsical camping area, filled with colorful tents and playful sculptures inspired by Scandinavian folklore and mythology.",
  },
  {
    area: "Alfheim",
    description:
      "A premium camping area offering upgraded facilities, wellness activities, and a soothing ambiance, reminiscent of the Scandinavian summer nights.",
  },
];

const CampingCard = (props) => {
  const dispatch = useContext(DispatchContext);
  const router = useRouter();

  function chooseArea() {
    dispatch({
      action: "CHOOSE_AREA",
      payload: {
        area: props.area,
        spots: props.spots,
        available: props.available,
      },
    });
    router.push({
      pathname: "/tickets",
    });
  }

  const isAvailable = props.available > 0;
  const description = campingAreaDescriptions.find(
    (item) => item.area === props.area
  )?.description;

  return (
    <>
      <div className="group relative block max-h-[80vh]">
        <span className="absolute inset-0 border-2 border-dashed border-blue"></span>

        <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <h2 className="m-2 text-xl font-medium sm:text-2xl">
              {props.area}
            </h2>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">
              {props.area}
            </h3>

            <p className="mt-4 mb-4 text-sm sm:text-base">
              Spots available {props.available} / {props.spots}
            </p>

            <p className="mt-4 mb-4 text-sm sm:text-base">{description}</p>

            <Anchor
              href="/tickets/"
              onClick={chooseArea}
              disabled={!isAvailable}
            >
              Find Tickets
            </Anchor>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampingCard;
