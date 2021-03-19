import React from "react";
import Home from "routes/Home";

const Nweet = ({ nweetObj, isOwner }) => (
  <div>
    <h4>{nweetObj.text}</h4>
    {isOwner && (
      <>
        <button>Delete Nweet</button>
        <button>Edit Nweet</button>
      </>
    )}
  </div>
);

export default Nweet;
