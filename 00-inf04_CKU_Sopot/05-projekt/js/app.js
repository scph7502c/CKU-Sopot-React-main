import { availableMemory } from "process";
import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const handleClick = () => {
    const numberA = Number(prompt("Podaj a: "));
    const numberB = Number(prompt("Podaj b: "));
    console.log(numberA * numberB);
  };

  const handleScreen = () => {
    const widthScreen = screen.availWidth;
    const heightScreen = screen.availHeight;
    alert(widthScreen + "\n" + heightScreen);
    console.log(widthScreen + "\n" + heightScreen);
  };

  return (
    <>
      <p>
        <button onClick={handleClick}>Kliknij!</button>
      </p>
      <button onClick={handleScreen}>Pobierz dane ekranu</button>
    </>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
