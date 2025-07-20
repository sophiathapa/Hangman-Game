import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    image: 1,
    index: [],
    color: "bg-black",
    guessWord :""
  },
  reducers: {
    setImage :(state)=>{
        state.image += 1
    },
    setColor : (state,action)=>{
      state.color = action.payload
    },

    setIndex : (state,action)=>{
      state.index = action.payload
    },
    setGuessWord : (state,action)=>{
      state.guessWord = action.payload
    }
  },
});


export const {setColor,setImage,setIndex,setGuessWord} =  gameSlice.actions
export default gameSlice.reducer;
