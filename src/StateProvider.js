//Setup data layer
// we need this to track Basket
import React from "react";
import { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

// Build Provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this how we use it inside a component

export const useStateValue = () => useContext(StateContext);
