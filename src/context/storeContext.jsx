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
      // console.log(state, action);
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
      // console.log(state, action);
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
//---------------------TENT--------------------------------------
    case "ADD_TENT":
      // console.log(state, action);
      const existTent = state.basket.find(
        (item) => item.tentName === action.payload.tentName
      );
      if (existTent) {
        const tentBasket = state.basket.map((item) => {
          if (item.tentName === action.payload.tentName) {
            const copy = { ...item };
            copy.tentAmount++;
            return copy;
          } else {
            return item;
          }
        });
        return { ...state, basket: tentBasket };
      } else {
        const newItem = action.payload;
        newItem.tentAmount = 1;
        return { ...state, basket: state.basket.concat(action.payload) };
      }

    case "REMOVE_TENT":
      // console.log(state, action);
      const tentBasket = state.basket.map((item) => {
        if (item.tentName === action.payload.tentName) {
          const copy = { ...item };
          copy.tentAmount--;
          return copy;
        } else {
          return item;
        }
      });
      const finalBasketTent = tentBasket.filter((item) => item.tentAmount > 0);
      return { ...state, basket: finalBasketTent };

    case "SET_TIMEOUT":
      return {
        ...state,
        timeout: action.payload.timeout,
      };
  
      case "TENT_OPTION":
        const hasTent = action.payload.isChosentent;
        const existingIndex = state.basket.findIndex(item => typeof item === "object" && item.hasOwnProperty("hasTent"));
        
        if (existingIndex !== -1) {
          // If an object with "hasTent" property exists, replace it with the new value
          const updatedBasket = [...state.basket];
          updatedBasket[existingIndex] = { hasTent };
          
          return {
            ...state,
            basket: updatedBasket,
          };
        } else {
          // If an object with "hasTent" property doesn't exist, append it to the basket
          return {
            ...state,
            basket: state.basket.concat({ hasTent }),
          };
        }
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
}
