import React from "react";
import ArtTitle from "./ArtTitle";
import ArtContent from "./ArtContent";
import ArtFooter from "./ArtFooter";

const Art = (props) => {
  return (
    <>
      <div className="art">
        <ArtTitle title={props.title}
		/>
        <ArtContent article={props.article}/>
        <ArtFooter
		 like={props.likes}
		 author={props.author}
		 views={props.views}
		 />
      </div>
    </>
  );
};

export default Art;
