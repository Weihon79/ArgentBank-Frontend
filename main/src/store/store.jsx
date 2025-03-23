// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
// Exemple d'un reducer pour le profil utilisateur
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
