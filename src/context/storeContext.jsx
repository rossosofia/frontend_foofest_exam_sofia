import { createContext, useReducer } from "react";
export const StoreContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  basket: [],
  timeLeft: 300000,
};

function reducer(state, action) {
  switch (action.action) {
    case "CHOOSE_AREA":
      return {
        ...state,
        area: action.payload.area,
        spots: action.payload.spots,
        available: action.payload.available,
      };
    case "ADD_TICKET":
      console.log(state, action);
      const exist = state.basket.find(
        (item) => item.name === action.payload.name
      );
      if (exist) {
        const nextBasket = state.basket.map((item) => {
          if (item.name === action.payload.name) {
            const copy = { ...item };
            copy.amount++;
            return copy;
          } else {
            return item;
          }
        });
        return { ...state, basket: nextBasket };
      } else {
        const newItem = action.payload;
        newItem.amount = 1;
        return { ...state, basket: state.basket.concat(action.payload) };
      }

    case "REMOVE_TICKET":
      console.log(state, action);
      const nextBasket = state.basket.map((item) => {
        if (item.name === action.payload.name) {
          const copy = { ...item };
          copy.amount--;
          return copy;
        } else {
          return item;
        }
      });
      const finalBasket = nextBasket.filter((item) => item.amount > 0);
      return { ...state, basket: finalBasket };

    case "SET_TIMEOUT":
      return {
        ...state,
        timeout: action.payload.timeout,
      };
  }
}

export const StoreProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={data}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};
