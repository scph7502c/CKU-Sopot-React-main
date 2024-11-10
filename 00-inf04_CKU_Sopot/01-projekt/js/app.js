import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";

const Witaj = () => {
  return (
    <>
      <h1>Przywitanie z komponentu React</h1>
      <p>Lorem ipsum</p>
    </>
  );
};

const Box = () => {
  return (
    <>
      <p>Przycisk</p>
      <button className="btn">Fajna strona!</button>
    </>
  );
};

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
