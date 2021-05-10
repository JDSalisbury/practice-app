import React, { useState } from "react";
import { connect } from "react-redux";
import { getPokemon } from "../../redux/actions/pkmn.action";

const Pkmn = ({ pkmn, getPokemon }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log('Name', name)
    getPokemon(name);
  };

  const { pokemon } = pkmn;
  console.log("hopefully the thing i need", pokemon);
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
          placeholder="Pokemon Name"
        />
        <input type="button" value="submit" />
      </form>
      <div>
        <h1>{pokemon.name}</h1>
      </div>
    </>
  );
};

export default connect(
  ({ pkmn }) => ({ pkmn }),
  { getPokemon }
)(Pkmn);
