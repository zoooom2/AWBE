import axios from 'axios';
import { useContext, createContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/app_reducer';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
