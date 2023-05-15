import React from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DispatchContext } from "@/context/storeContext";
import { v4 as uuidv4 } from "uuid";

const SelectCard = () => {
  const dispatch = useContext(DispatchContext);

  function addRegularTicket() {
    dispatch({
      action: "ADD_TICKET",
      payload: {
        name: "Regular",
        id: uuidv4(),
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
        id: uuidv4(),
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
