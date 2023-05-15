import { createContext, useReducer } from "react";

export const StoreContext = createContext();
export const DispatchContext = createContext();

const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.action) {
    case "CHOOSE_AREA":
      console.log(state, action);
      return {
        ...state,
        area: action.payload.area,
        spots: action.payload.spots,
        available: action.payload.available,
      };
    case "ADD_TICKET":
      return { ...state, basket: state.basket.concat(action.payload) };
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
