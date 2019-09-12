import React, { useContext } from "react";
import GameContext from "../context/gameContext";

const Header = () => {
  const gameContext = useContext(GameContext);
  const { score, highScore, guess } = gameContext;
  return (
    <div className='row py-3 bg-primary text-center text-white'>
      <h1 className='col-md-4'>Clicky Game</h1>
      {guess === null && <h1 className='col-md-4'>Wot</h1>}
      <h1 className='col-md-4'>You guessed </h1>
      <h1 className='col-md-4'>
        Score: {score}| Top Score: {highScore}
      </h1>
    </div>
  );
};

export default Header;
