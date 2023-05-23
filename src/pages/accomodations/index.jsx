import FlowLayout from "@/components/FlowLayout";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import TentCard from "@/components/TentCard";
<<<<<<< HEAD
import Checkbox from "@mui/material/Checkbox";
import Anchor from "@/components/Anchor";
import { useContext } from "react";
import { StoreContext, DispatchContext } from "@/context/storeContext";
import Timer from "@/components/Timer"
import CalculateTents from "@/components/CalculateTents";
import { v4 as uuidv4 } from "uuid";

=======
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Anchor from "@/components/Anchor";
import { useContext } from "react";
import { StoreContext } from "@/context/storeContext";
import { DispatchContext } from "@/context/storeContext";
import Timer from "@/components/Timer";
>>>>>>> 3315ff16c31b0ed26cba5a5aa2395f669eed46c8

export default function Accomodations() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);

<<<<<<< HEAD
  function getTotalBasketTickets() {
    return state.ticketBasket.reduce((total, ticket) => total + ticket.amount, 0);
  }
  const totalBasketTickets = getTotalBasketTickets();
  
=======
  useEffect(() => {
    const timeoutValue = 180; // Example: Set the timeout value to 180 seconds (3 minutes)
    dispatch({ type: "SET_TIMEOUT", payload: { timeout: timeoutValue } });
  }, [dispatch]);

>>>>>>> 3315ff16c31b0ed26cba5a5aa2395f669eed46c8
  function selectGreenOption(event) {
    const { checked } = event.target;
    dispatch({
      action: "GREEN_OPTION",
      payload: {
        hasGreen: checked,
        price: checked ? 249 : 0,
      },
    });
  }

  function chooseTentOption() {
    dispatch({
      action: "TENT_OPTION",
      payload: {
        isChosentent: true,
      },
    });
  
    addTwoPersonTent();
    addThreePersonTent();
  }
  

  function notChooseTentOption() {
    dispatch({
      action: "TENT_OPTION",
      payload: {
        isChosentent: false,
      },
    });
  }
    
  function addTwoPersonTent() {
    const { num2PersonTents } = CalculateTents(totalBasketTickets);
    dispatch({
      action: "ADD_TENT",
      payload: {
        tentName: "2PERSON",
        tentID: uuidv4(),
        tentAmount: num2PersonTents,
        tentAmountPeople: 2,
        price: 299 * num2PersonTents,
      },
    });
  }


function addThreePersonTent() {
  const { num3PersonTents } = CalculateTents(totalBasketTickets);
    dispatch({
      action: "ADD_TENT",
      payload: {
        tentName: "3PERSON",
        tentID: uuidv4(),
        tentAmount: num3PersonTents,
        tentAmountPeople: 3,
        price: 399 * num3PersonTents,
      },
    });
  
}


  function emptyTentBasket() {
    dispatch({ action: "EMPTY_TENT_BASKET" });
  }
  return (
    <FlowLayout>
      <h1>Step 2</h1>
      <p>This is the content for Step 2.</p>
      <FormControlLabel
        control={
          <Checkbox checked={state.checked} onChange={selectGreenOption} />
        }
        label="Green Option / 249-"
      />

      <RadioGroup>
        <label>
          <div>
            {/* we need to create a style to use istead of the "bg-pink-100", so that everything looks "deactivated" */}
            <FormControlLabel
              value="set-up-tent"
              control={<Radio />}
              label="Rent a tent"
              onClick={chooseTentOption}
            />
            <TentCard></TentCard>
            {/* {selectedValue === "set-up-tent" && <TentCard />} */}
          </div>
        </label>

        <FormControlLabel
          value="own-tent"
          control={<Radio />}
          label="No, I'm bringing my own tent"
          onClick={() => {
            notChooseTentOption();
            emptyTentBasket();
          }}
        />
      </RadioGroup>
      <Anchor href="/guests/">GO TO GUESTS</Anchor>
      <Timer />
    </FlowLayout>
  );
}
