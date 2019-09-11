import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GameContext from '../context/gameContext';

const Image = ({ image }) => {
  const gameContext = useContext(GameContext);
  // need to import functions here
  const { src, clicked, random, name } = image;
  return (
    <div className='col-sm-3 text-center mt-1'>
      <img
        src={src}
        clicked={clicked}
        random={random}
        alt={name}
        className='img-fluid border'
      />
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired
};

export default Image;
