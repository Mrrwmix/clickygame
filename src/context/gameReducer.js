import { INCREMENT_SCORE, SET_HIGH_SCORE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      return {
        ...state,
        guess: true,
        score: state.score + 1,
        images: state.images.map(img =>
          img.id === action.payload ? { ...img, clicked: true } : img
        )
      };
    case SET_HIGH_SCORE:
      return {
        score: 0,
        highScore:
          action.payload > state.highScore ? action.payload : state.highScore,
        guess: false,
        images: state.images.map(img =>
          img.clicked === true ? { ...img, clicked: false } : img
        )
      };
    default:
      return state;
  }
};
