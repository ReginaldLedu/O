/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./buy-btn.scss";
import "../../App.scss";
import { useSelector, useDispatch } from "react-redux";
import {
	addItemToTheCart,
	removeGoodFromTheCart,
	changeQuantity,
} from "../../store/slice";

export function BuyBtn(props) {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const cart = useSelector(state => state.rootReducer.oToolkit.cart);

	return (
		<>
			{cart.find(item => item.id === props.item.id) === undefined ? (
				<button
					onClick={() => {
						dispatch(addItemToTheCart(props.item));
						
					}}
					className="goods__buy"
				>
					купить
				</button>
			) : (
				<>
					<div className="quant__wrapper">
						<button
							onClick={() => {
								dispatch(removeGoodFromTheCart(props.item));
								if (quantity - 1 <= 0) {
									setQuantity(1);
								} else {
									setQuantity(prev => prev - 1);
								}
							}}
							className="remove_good"
						>
							-
						</button>
						<input
							value={quantity}
							type="number"
							onChange={e => {
								dispatch(
									changeQuantity({
										item: props.item,
										value: Number(e.target.value),
									})
								);
								setQuantity(Number(e.target.value));
							}}
							className="goods__quant"
						></input>
						<button
							onClick={() => {
								dispatch(addItemToTheCart(props.item));
								setQuantity(prev => prev + 1);
							}}
							className="add_good"
						>
							+
						</button>
					</div>
				</>
			)}
		</>
	);
}
