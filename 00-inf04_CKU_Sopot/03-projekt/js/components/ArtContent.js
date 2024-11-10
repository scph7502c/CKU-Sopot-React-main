import React from "react";
import ArtFooter from "./ArtFooter";

const ArtContent = (props) => {
  return (
    <>
      <div className="art-content">
       {props.article}
      </div>
    </>
  );
};

export default ArtContent;
