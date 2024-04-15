/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../../App.scss";
import "./item-cart.scss";

export function ItemCart(props) {
	return (
		<div className="cart__item">
			<p className="cart__title">{props.item.title}</p>
			<p className="cart__text">x{props.item.quant}</p>
			<p className="cart__text">{props.item.price * props.item.quant}</p>
		</div>
	);
}
