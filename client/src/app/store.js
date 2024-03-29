import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/users/userSlice";
import postReducer from "../features/post/postSlice";
export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		post: postReducer,
	},
});
