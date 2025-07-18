import {createSlice} from "@reduxjs/toolkit"

const genreSlice = createSlice({
  name:'genre',
  initialState : {
     genre : "",
     correctWord :"",
    guessWord: "",
     },
  reducers : {
    setGenre : (state,action)=>{
      state.genre = action.payload
    },
    setCorrectWord : (state,action)=>{
      state.correctWord = action.payload
    },

    setGuessWord :(state)=>{
      const array = state.correctWord.split("")
      const word = array.map(()=>"_")
      state.guessWord = word.join("")
    }
  }
})

export const { setGenre, setCorrectWord,setGuessWord} = genreSlice.actions;
export default genreSlice.reducer;