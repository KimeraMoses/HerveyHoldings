import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/Slices/userSlice";
import userRegistrationReducer from "../store/Slices/userRegistrationSlice";
import authReducer from "./Slices/authSlice";
import passwordReducer from "./Slices/passwordSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    password: passwordReducer,
    users: userReducer,
    registration: userRegistrationReducer,
  },
});

export default store;
export const baseUrl = "https://herveyholdings.herokuapp.com";
