import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { oAPI } from "./rtk";
import oSlice from "./slice";
import { thunk } from "redux-thunk";

export const rootReducer = combineReducers({
	oToolkit: oSlice.reducer,
});
export const store = configureStore({
	reducer: {
		rootReducer,
		[oAPI.reducerPath]: oAPI.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(oAPI.middleware),
	thunk,
});
