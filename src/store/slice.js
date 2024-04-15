import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	cart: [],
};
export const oSlice = createSlice({
	name: "oToolkit",
	initialState,
	reducers: {
		addItemToTheCart: (state, action) => {
			let item = state.cart.find(item => item.id === action.payload.id);
			if (item) {
				state.cart.find(item => item.id === action.payload.id).quant++;
			} else {
				state.cart.push({ ...action.payload, quant: 1 });
			}
		},
		changeQuantity: (state, action) => {
			console.log(action.payload);
			let item = state.cart.find(item => item.id === action.payload.item.id);
			if (item) {
				state.cart.find(item => item.id === action.payload.item.id).quant =
					action.payload.value;
			}
		},
		removeGoodFromTheCart: (state, action) => {
			let item = state.cart.find(item => item.id === action.payload.id);
			if (item.quant > 1) {
				state.cart.find(item => item.id === action.payload.id).quant--;
			} else if (item.quant === 1) {
				state.cart = state.cart.filter(item => item.id !== action.payload.id);
			} else {
				return;
			}
		},
		clearCart: state => {
			state.cart = [];
		},
		setCartOnLoad: (state, action) => {
			state.cart = action.payload;
		},
	},
});

export default oSlice;
export const {
	setCartOnLoad,
	addItemToTheCart,
	removeGoodFromTheCart,
	changeQuantity,
	clearCart,
} = oSlice.actions;
