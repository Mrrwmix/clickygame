import { INCREMENT_SCORE, SET_HIGH_SCORE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
        images: state.images.map(img =>
          img.id === action.payload
            ? { id: img.id, src: img.src, name: img.name, clicked: true }
            : img
        )
      };
    default:
      return state;
  }
};
