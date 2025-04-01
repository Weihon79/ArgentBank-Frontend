// Importation de createSlice depuis Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

/**
 * État initial du slice user :
 * - token : null → Stocke le token d'authentification après connexion.
 * - user : null → Stocke les informations de l'utilisateur après récupération depuis l'API.
 */
const initialState = {
  token: null,
  user: null,
};

// Création du slice Redux pour gérer l'authentification utilisateur
const userSlice = createSlice({
  name: 'user', // Nom du slice (utilisé pour l'organisation du store)
  initialState, // Définition de l'état initial
  reducers: {
    /**
     * setToken(state, action)
     * - Met à jour le token d'authentification dans le state Redux.
     * - action.payload contient le token reçu après connexion.
     */
    setToken: (state, action) => {
      state.token = action.payload;
    },

    /**
     * setUser(state, action)
     * - Met à jour les informations utilisateur dans le state Redux.
     * - action.payload contient les données utilisateur récupérées depuis l'API.
     */
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Exportation des actions pour pouvoir les utiliser dans les composants
export const { setToken, setUser } = userSlice.actions;

/**
 * Sélecteur Redux pour accéder au token utilisateur.
 * Permet aux composants de récupérer le token sans connaître la structure interne du state.
 */
export const selectToken = (state) => state.user.token;

// Exportation du reducer pour l'intégrer dans le store Redux
export default userSlice.reducer;
