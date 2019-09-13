import React, { useContext } from "react";
import GameContext from "../context/gameContext";

const Header = () => {
  const gameContext = useContext(GameContext);
  const { score, highScore, guess } = gameContext;
  return (
    <div className='row py-3 bg-dark text-center text-primary'>
      <h1 className='col-md-4 text-info'>Score: {score}</h1>
      {guess === null && <h1 className='col-md-4'>Click to get started!</h1>}
      {guess && (
        <h1 className='col-md-4 text-success'>You guessed correctly!</h1>
      )}
      {guess === false && <h1 className='col-md-4 text-danger'>Ruh roh!</h1>}
      <h1 className='col-md-4 text-info'>Top Score: {highScore}</h1>
    </div>
  );
};

export default Header;
