import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import Box from "./components/Box";
import Witaj from "./components/Witaj";

const App = () => {
  return (
    <>
      <Box />
      <Witaj />
    </>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
