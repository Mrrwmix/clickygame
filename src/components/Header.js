import React from "react";

const Header = () => {
  return (
    <div className='row py-3 bg-primary text-center text-white'>
      <h1 className='col-md-4'>Clicky Game</h1>
      <h1 className='col-md-4'>You guessed _____</h1>
      <h1 className='col-md-4'>Score: | Top Score: </h1>
    </div>
  );
};

export default Header;
