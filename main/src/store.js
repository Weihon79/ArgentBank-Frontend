import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer, //Le reducer auth pour gérer l'état global de l'authentification. Nommé "auth" dans authSlice
  },
});

export default store;
// Suite logique dans le fichier index.js.

