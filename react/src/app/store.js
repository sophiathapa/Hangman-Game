    // src/app/store.js
    import { configureStore } from '@reduxjs/toolkit';
    // Import your reducers here
    import genreReducer from '../features/genre/genreSlice'

    export const store = configureStore({
      reducer: {
        // Register your reducers here
        genre : genreReducer
      },
    });