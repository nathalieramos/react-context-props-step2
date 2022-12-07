import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HoroscopeProvider, {
  HoroscopeContext
} from "./context/HoroscopeContext";

const Root = () => {
  return (
    <HoroscopeProvider value={{ sign: "Leo" }}>
      <App />
    </HoroscopeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
