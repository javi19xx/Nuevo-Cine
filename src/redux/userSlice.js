import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entradasPorPelicula: {} 
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEntradas: (state, action) => {
      const { peliculaId, cantidad } = action.payload;
      if (!state.entradasPorPelicula[peliculaId]) {
        state.entradasPorPelicula[peliculaId] = 0;
      }
      state.entradasPorPelicula[peliculaId] += cantidad;
    }
  }
});

export const { addEntradas } = userSlice.actions;

export default userSlice.reducer;