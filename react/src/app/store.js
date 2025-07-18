// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";

import gameReducer from "../features/game/gameSlice";
import genreReducer from "../features/genre/genreSlice";

export const store = configureStore({
  reducer: {
    // Register your reducers here
    genre: genreReducer,
    game : gameReducer
  },
});
