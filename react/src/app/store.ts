// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";

import gameReducer from "../features/game/gameSlice";
import genreReducer from "../features/genre/genreSlice";


const rootReducer = combineReducers({
  genre: genreReducer,
  game: gameReducer,
});


const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }),
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
