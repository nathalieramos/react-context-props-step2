import { createContext, useState } from "react";
import horoscopeObj from "../data/horoscopes";

export const HoroscopeContext = createContext();

const HoroscopeProvider = (props) => {
  const [currentSign, getCurrentSign] = useState("Leo");
  const sign = horoscopeObj[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, getCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
