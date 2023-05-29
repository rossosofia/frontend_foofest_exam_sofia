import FlowLayout from "@/components/FlowLayout";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import TentCard from "@/components/TentCard";
import Checkbox from "@mui/material/Checkbox";
import Anchor from "@/components/Anchor";
import { useContext } from "react";
import { StoreContext, DispatchContext } from "@/context/storeContext";
import Timer from "@/components/Timer";
import CalculateTents from "@/components/CalculateTentss";
import { v4 as uuidv4 } from "uuid";
import Basket from "@/components/Basket";

export default function Accomodations() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StoreContext);

  // store radio button data
  const hasTent = state.tentBasket[0]?.hasTent;
  const hasGreen = state.greenFee[0]?.hasGreen || false;

  //i do that to disable the button
  const tentNotChecked = state.tentBasket.length === 0;

  function getTotalBasketTickets() {
    return state.ticketBasket.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
  }
  const totalBasketTickets = getTotalBasketTickets();

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
    //i decided to put them here instead of the tent component so they are called once when chooseTentOption is called
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
        tentName: "Two Person",
        tentID: uuidv4(),
        tentAmount: num2PersonTents,
        tentAmountPeople: 2,
        price: 299,
      },
    });
  }

  function addThreePersonTent() {
    const { num3PersonTents } = CalculateTents(totalBasketTickets);
    dispatch({
      action: "ADD_TENT",
      payload: {
        tentName: "Three Person",
        tentID: uuidv4(),
        tentAmount: num3PersonTents,
        tentAmountPeople: 3,
        price: 399,
      },
    });
  }

  function emptyTentBasket() {
    dispatch({ action: "EMPTY_TENT_BASKET" });
  }

  return (
    <FlowLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 max-w-7xl mx-auto items-start">
        <section>
          <h1 className="mb-6 text-2xl">Choose your accommodation!</h1>
          <p className="mb-6">
            At FooFest Extravaganza, we offer flexible accommodation options to
            enhance your festival experience.
          </p>
          <p className="mb-6">
            You are welcome to bring your own tent and become part of our
            vibrant camping community. If you are looking for convenience,
            consider our pre-setup tents, ready for your arrival.
          </p>
          <p className="mb-6">
            Additionally, we offer an optional Green Fee to offset the
            environmental impact of the festival. It is all about making choices
            that suit you best!
          </p>

          <Timer />
          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-xl mb-4 mt-4">
            <div className="md:flex">
              <div className="p-8">
                <FormControlLabel
                  control={
                    <Checkbox checked={hasGreen} onChange={selectGreenOption} />
                  }
                  label="Green Option / 249-"
                />

                <RadioGroup>
                  <label>
                    <div>
                      <FormControlLabel
                        value="set-up-tent"
                        control={<Radio />}
                        label="Rent a tent"
                        onClick={chooseTentOption}
                        checked={hasTent}
                      />
                      <TentCard />
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
                    checked={
                      typeof hasTent === "undefined" || hasTent === true
                        ? false
                        : true
                    }
                  />
                </RadioGroup>
              </div>
            </div>
          </div>

          <Anchor
            href="/guests/"
            disabled={tentNotChecked}
            className="w-full text-center"
          >
            GO TO GUESTS
          </Anchor>
        </section>

        <section>
          <Basket />
        </section>
      </div>
    </FlowLayout>
  );
}
