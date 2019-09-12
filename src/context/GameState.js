import React, { useReducer } from "react";
import gameContext from "./gameContext";
import gameReducer from "./gameReducer";
import { INCREMENT_SCORE, SET_HIGH_SCORE } from "./types";

const GameState = props => {
  const initialState = {
    images: [
      {
        id: 1,
        src: "./images/maylee.png",
        clicked: false,
        name: "May Lee"
      },
      {
        id: 2,
        src: "./images/kula.png",
        clicked: false,
        name: "Kula Diamond"
      },
      {
        id: 3,
        src: "./images/aganos.png",
        clicked: false,
        name: "Aganos"
      },
      {
        id: 4,
        src: "./images/thunder.png",
        clicked: false,
        name: "Thunder"
      },
      {
        id: 5,
        src: "./images/rogerjr.jpeg",
        clicked: false,
        name: "Roger Jr."
      },
      {
        id: 6,
        src: "./images/dk.png",
        clicked: false,
        name: "Donkey Kong"
      },
      {
        id: 7,
        src: "./images/piranhaplant.jpg",
        clicked: false,
        name: "Piranha Plant"
      },
      {
        id: 8,
        src: "./images/kingdedede.png",
        clicked: false,
        name: "King Dedede"
      },
      {
        id: 9,
        src: "./images/mario.jpeg",
        clicked: false,
        name: "Mario"
      },
      {
        id: 10,
        src: "./images/kairi.jpg",
        clicked: false,
        name: "Kairi"
      },
      {
        id: 11,
        src: "./images/bang.jpg",
        clicked: false,
        name: "Bang"
      },
      {
        id: 12,
        src: "./images/nightmare.jpg",
        clicked: false,
        name: "Nightmare"
      },
      {
        id: 13,
        src: "./images/lei.jpg",
        clicked: false,
        name: "Lei Fei"
      },
      {
        id: 14,
        src: "./images/blackheart.gif",
        clicked: false,
        name: "Blackheart"
      },
      {
        id: 15,
        src: "./images/zero.jpg",
        clicked: false,
        name: "Zero"
      },
      {
        id: 16,
        src: "./images/venom.jpg",
        clicked: false,
        name: "Venom"
      }
    ],
    score: 0,
    highScore: 0,
    guess: null
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  //actions for the reducer
  const clickedCard = e => {
    for (let i = 0; i < state.images.length; i++) {
      if (
        state.images[i].id === Number(e.target.getAttribute("identity")) &&
        state.images[i].clicked === false
      ) {
        console.log("I was clicked!");
        return dispatch({
          type: INCREMENT_SCORE,
          payload: Number(e.target.getAttribute("identity"))
        });
      } else if (
        state.images[i].id === e.target.getAttribute("identity") &&
        state.images[i].clicked === true
      ) {
        return dispatch({
          type: SET_HIGH_SCORE,
          payload: e.target.getAttribute("identity")
        });
      }
    }
  };

  return (
    <gameContext.Provider
      value={{
        score: state.score,
        highScore: state.highScore,
        images: state.images,
        guess: state.guess,
        clickedCard
      }}
    >
      {props.children}
    </gameContext.Provider>
  );
};

export default GameState;
