import React, { useReducer } from 'react';
import gameContext from './gameContext';
import gameReducer from './gameReducer';
import {
  INCREMENT_SCORE,
  SHUFFLE,
  SET_HIGH_SCORE,
  CLICKED_IMAGE
} from './types';

const GameState = props => {
  const initialState = {
    images: [
      {
        id: 1,
        src: './images/maylee.png',
        clicked: false,
        random: Math.random() * 1000,
        name: 'May Lee'
      },
      {
        id: 2,
        src: './images/kula.png',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Kula Diamond'
      },
      {
        id: 3,
        src: './images/aganos.png',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Aganos'
      },
      {
        id: 4,
        src: './images/thunder.png',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Thunder'
      },
      {
        id: 5,
        src: './images/rogerjr.jpeg',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Roger Jr.'
      },
      {
        id: 6,
        src: './images/dk.png',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Donkey Kong'
      },
      {
        id: 7,
        src: './images/piranhaplant.jpg',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Piranha Plant'
      },
      {
        id: 8,
        src: './images/kingdedede.png',
        clicked: false,
        random: Math.random() * 1000,
        name: 'King Dedede'
      },
      {
        id: 9,
        src: './images/mario.jpeg',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Mario'
      },
      {
        id: 10,
        src: './images/kairi.jpg',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Kairi'
      },
      {
        id: 11,
        src: './images/bang.jpg',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Bang'
      },
      {
        id: 12,
        src: './images/nightmare.jpg',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Nightmare'
      },
      {
        id: 13,
        src: './images/lei.jpg',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Lei Fei'
      },
      {
        id: 14,
        src: './images/blackheart.gif',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Blackheart'
      },
      {
        id: 15,
        src: './images/zero.jpg',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Zero'
      },
      {
        id: 16,
        src: './images/venom.jpg',
        clicked: false,
        random: Math.random() * 1000,
        name: 'Venom'
      }
    ],
    score: 0,
    highScore: 0
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  //actions for the reducer

  return (
    <gameContext.Provider
      value={{
        score: state.score,
        highScore: state.highScore,
        images: state.images
      }}
    >
      {props.children}
    </gameContext.Provider>
  );
};

export default GameState;
