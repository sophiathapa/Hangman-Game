import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    image: "1",
    index: [],
    color: "bg-black",
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
    }
  },
});


export const {setColor,setImage,setIndex} =  gameSlice.actions
export default gameSlice.reducer;
