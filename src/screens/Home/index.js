import React, { useState } from "react";
import { connect } from "react-redux";
import { searchCardByName } from "../../redux/actions/mtg.action";

const Home = ({ mtg, searchCardByName }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    const mtg = require("mtgsdk");
    mtg.card
      .where({
        name: name
      })
      .then(cards => {
        if (cards !== "") {
          searchCardByName(cards);
        }
      });
  };

  const { cards } = mtg;
  console.log(cards);
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
      {cards.map(card => {
        return (
          <>
            <div key={card.name + "1"}>
              {card.imageUrl ? (
                <>
                  <div key={card.name + "2"}>{card.name}</div>
                  <img key={card.name + "3"} src={card.imageUrl} alt="" />
                  <div key={card.name + "4"}>{card.text}</div>
                </>
              ) : (
                ""
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default connect(
  ({ mtg }) => ({ mtg }),
  { searchCardByName }
)(Home);
