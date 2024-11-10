import React from "react";
import ArtFooterLike from "./ArtFooterLike";
import ArtFooterView from "./ArtFooterView";
import ArtFooterAuthor from "./ArtFooterAuthor";

const ArtFooter = (props) => {
  return (
    <>
      <div className="art-footer">
		<ArtFooterLike lik={props.like}/>
		<ArtFooterView views={props.views}/>
		<ArtFooterAuthor author={props.author}/>

	  </div>
    </>
  );
};

export default ArtFooter;
