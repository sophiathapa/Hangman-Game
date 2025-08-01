// src/components/ReduxProvider.js
"use client"; // Mark as client component
import { Provider } from "react-redux";
import { persistor, store } from "../app/store.ts"; // Adjust path as needed
import { PersistGate } from "redux-persist/integration/react";

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
