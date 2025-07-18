// src/components/ReduxProvider.js
"use client"; // Mark as client component
import { Provider } from 'react-redux';
import { store } from '../app/store.js'; // Adjust path as needed

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}