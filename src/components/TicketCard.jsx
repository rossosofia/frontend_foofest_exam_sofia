import React from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DispatchContext } from "@/context/storeContext";

const SelectCard = () => {
  const dispatch = useContext(DispatchContext);

  function addRegularTicket() {
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: "Regular",
        amount: 1,
        price: 799,
      },
    });
  }

  function addVIPTicket() {
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: "VIP",
        amount: 1,
        price: 1299,
      },
    });
  }

  return (
    <>
      <Button onClick={addRegularTicket} variant="contained">
        Regular{" "}
      </Button>
      <Button onClick={addVIPTicket} variant="contained">
        VIP
      </Button>
    </>
  );
};

export default SelectCard;
