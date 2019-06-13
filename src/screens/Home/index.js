import React, { useState } from "react";

const Home = ({}) => {
  const [name, setName] = useState("");
  const [cardImage, setCardImage] = useState("");
  const mtg = require("mtgsdk");
  const handleSubmit = () => {
    console.log("Submitted", name);
    mtg.card
      .all({
        name: name
      })
      .on("data", card => {
        setCardImage(card);
        console.log(card);
      });
  };
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          value={name}
        />
        <input type="button" value="submit" />
      </form>
      {cardImage.name}
      <img src={cardImage.imageUrl} alt="" />
    </>
  );
};

export default Home;
