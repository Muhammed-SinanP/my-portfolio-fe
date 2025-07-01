import { createSlice } from "@reduxjs/toolkit";

interface AdminState {
  adminLoggedIn: boolean;
}

const INITIAL_STATE: AdminState = {
  adminLoggedIn: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState: INITIAL_STATE,
  reducers: {
    saveAdminData: (state) => {
      state.adminLoggedIn = true;
    },
    clearAdminData: (state) => {
      state.adminLoggedIn = false;
    },
  },
});

export const { saveAdminData, clearAdminData } = adminSlice.actions;
export default adminSlice.reducer;
