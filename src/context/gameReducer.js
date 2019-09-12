import { INCREMENT_SCORE, SET_HIGH_SCORE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      return {
        ...state,
        images: state.images.map(img =>
          img.id === action.payload ? (img.clicked = true) : img
        ),
        score: state.score++
      };
    default:
      return state;
  }
};
