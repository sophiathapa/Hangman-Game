import { createSlice } from "react-redux";
const gameSlice = createSlice({
  name: "game",
  initialState: {
    guessWord: "_______",
    image: "1",
    index: [],
    color: "bg-black",
  },
  reducers: {
    handleGuess: (state,action) => {
      const isIncluded = correctWord.includes(action.payload);
      if (isIncluded) {
        const matchedIndex = correctWord
          .split("")
          .map((item, id) => {
            if (item == action.payload) return id;
          })
          .filter((item) => item || item == 0);

        state.index = [...index, ...matchedIndex];
      } else {
        state.image += 1;
        state.color = "bg-gray-500";
      }
    },
  },
});


export const {handleGuess} =  gameSlice.action
export default gameSlice.reducers;
