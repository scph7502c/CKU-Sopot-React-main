import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import Art from "./components/Art";

import Article from "./data/article";
import article from "./data/article";

const App = (props) => {
  return (
    <>
    {article.map((art, index)=>{
      return <Art
      key={index}
      title={art.title}
      article={art.article}
      likes={art.likes}
      author={art.author}
      views={art.views}
    />
    })
  }
      {/* <Art
        title={article[0]["title"]}
        article={article[0].article}
        likes={article[0].likes}
        author={article[0].author}
        views={article[0].views}
      /> */}
    </>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
