import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import Box from "./components/Box";
import Witaj from "./components/Witaj";
import Suma from "./components/Suma";
import Iloczyn from "./components/Iloczyn";
import Art from "./components/Art";

const App = () => {
  return (
    <>
    <Art
    title={"Obwodnica trójmiasta zawsze..."}
    article={"Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet "}
    likes={12583}
    author={"Piotr Nowak"}
    views={2908764}
    />
     <Art
    title={"Skandal w kancelarii premiera"}
    article={"Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet Lorem ipsum dolr sit amet "}
    likes={60}
    author={"Rafał Nowak"}
    views={64}
    />
      <Box />
      <Witaj />
      <Suma />
      <Iloczyn a={18} b={12} />
    </>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
