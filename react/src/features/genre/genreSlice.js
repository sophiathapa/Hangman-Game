import {createSlice} from "@reduxjs/toolkit"

const genreSlice = createSlice({
  name:'genre',
  initialState : {
     genre : "",
     correctWord :"",
    guessWord: "",
    initialGuess : "",
     },
  reducers : {
    setGenre : (state,action)=>{
      state.genre = action.payload
    },
    setCorrectWord : (state,action)=>{
      state.correctWord = action.payload.toLowerCase()
    },
    setInitialGuess :(state,action)=>{
      const array = action.payload.split("")
      const word = array.map(()=>"_")
      state.initialGuess = word.join("")
    },
  }
})

export const { setGenre, setCorrectWord,setInitialGuess} = genreSlice.actions;
export default genreSlice.reducer;