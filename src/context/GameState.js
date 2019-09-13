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
        src: "./images/K.png",
        clicked: false,
        name: "K"
      },
      {
        id: 4,
        src: "./images/terry.jpg",
        clicked: false,
        name: "Terry"
      },
      {
        id: 5,
        src: "./images/benimaru.png",
        clicked: false,
        name: "Benimaru"
      },
      {
        id: 6,
        src: "./images/robert.png",
        clicked: false,
        name: "Robert"
      },
      {
        id: 7,
        src: "./images/kim.png",
        clicked: false,
        name: "Kim"
      },
      {
        id: 8,
        src: "./images/choi.jpg",
        clicked: false,
        name: "Choi"
      },
      {
        id: 9,
        src: "./images/ryo.jpg",
        clicked: false,
        name: "Ryo"
      },
      {
        id: 10,
        src: "./images/daimon.jpg",
        clicked: false,
        name: "Daimon"
      },
      {
        id: 11,
        src: "./images/chang.png",
        clicked: false,
        name: "Chang"
      },
      {
        id: 12,
        src: "./images/geese.jpg",
        clicked: false,
        name: "Geese"
      },
      {
        id: 13,
        src: "./images/yuri.png",
        clicked: false,
        name: "Yuri"
      },
      {
        id: 14,
        src: "./images/iori.png",
        clicked: false,
        name: "Iori"
      },
      {
        id: 15,
        src: "./images/maxima.png",
        clicked: false,
        name: "Maxima"
      },
      {
        id: 16,
        src: "./images/takuma.jpg",
        clicked: false,
        name: "Takuma"
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
        return dispatch({
          type: INCREMENT_SCORE,
          payload: Number(e.target.getAttribute("identity"))
        });
      } else if (
        state.images[i].id === Number(e.target.getAttribute("identity")) &&
        state.images[i].clicked === true
      ) {
        return dispatch({
          type: SET_HIGH_SCORE,
          payload: state.score
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
