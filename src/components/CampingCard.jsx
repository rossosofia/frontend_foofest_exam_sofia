import React from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DispatchContext } from "@/context/storeContext";
import { useRouter } from "next/router";

const SelectCard = (props) => {
  const dispatch = useContext(DispatchContext);
  const router = useRouter();

  function choseArea() {
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

  return (
    <>
      <div className="group relative block h-screen max-h-[80vh]">
        <span className="absolute inset-0 border-2 border-dashed border-blue"></span>

        <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className=" transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <h2 className="mt-4 text-xl font-medium sm:text-2xl">
              {props.area}
            </h2>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">
              {props.area}
            </h3>

            <p className="mt-4 mb-4 text-sm sm:text-base">
              {props.available} / {props.spots}
            </p>

            <Button onClick={choseArea} variant="contained">
              Find Tickets
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCard;
