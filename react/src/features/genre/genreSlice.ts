import { createSlice } from "@reduxjs/toolkit";
export type genreSliceType = {
  genre: string;
  correctWord: string;
  guessWord: string;
  initialGuess: string;
};
const initialState: genreSliceType = {
  genre: "",
  correctWord: "",
  guessWord: "",
  initialGuess: "",
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setCorrectWord: (state, action) => {
      state.correctWord = action.payload.toLowerCase();
    },
    setInitialGuess: (state, action) => {
      const array = action.payload.split("");
      const word = array.map(() => "_");
      state.initialGuess = word.join("");
    },
    setInitialState1: () => initialState,
  },
});

export const { setGenre, setCorrectWord, setInitialGuess, setInitialState1 } =
  genreSlice.actions;
export default genreSlice.reducer;
