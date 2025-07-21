import { createSlice } from "@reduxjs/toolkit";

type slicetype = {
  image: number;
  index: number[];
  color: string;
  guessWord: string;
};
const initialState: slicetype = {
  image: 1,
  index: [],
  color: "bg-black",
  guessWord: "",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setImage: (state) => {
      state.image += 1;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },

    setIndex: (state, action) => {
      state.index = action.payload;
    },
    setGuessWord: (state, action) => {
      state.guessWord = action.payload;
    },
    setInitialState: () => initialState,
  },
});

export const { setColor, setImage, setIndex, setGuessWord, setInitialState } =
  gameSlice.actions;
export default gameSlice.reducer;
