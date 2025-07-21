import { createSlice } from "@reduxjs/toolkit";

type slicetype = {
  image: number;
  index: number[];
  color: string;
  guessWord: string;
  keyboardColor : {
    [key: string]: string};
};
const initialState: slicetype = {
  image: 1,
  index: [],
  color: "bg-black",
  guessWord: "",
  keyboardColor :{
    key:"",
    color :""
  },
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
    setKeyboardColor : (state,action)=>{
       const {key,color} = action.payload
       state.keyboardColor[key]= color
    },
    setInitialState: () => initialState,
  },
});

export const { setColor, setImage, setIndex, setGuessWord, setInitialState ,setKeyboardColor} =
  gameSlice.actions;
export default gameSlice.reducer;
