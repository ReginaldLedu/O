/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { IMaskInput } from "react-imask";
import "./cart.scss";
import "../../App.scss";
import { ItemCart } from "../item-cart/item-cart";
import { usePostOrderMutation } from "../../store/rtk";

export const Cart = props => {
	const ref = useRef(null);
	const [disabled, setDisabled] = useState(true);
	const inputRef = useRef(null);
	const [order] = usePostOrderMutation();
	const [phoneNumber, setPhoneNumber] = useState("");
	const forOrder = props.cart;
	const cartForOrder = forOrder.map(function (item) {
		return {
			id: item.id,
			quantity: item.quant,
		};
	});
	const [error, setError] = useState(false);

	return (
		<section className="cart">
			{props.cart.length > 0 ? (
				<>
					<h2 className="cart__title_main">Добавленные товары</h2>
					{props.cart.map(item => (
						<ItemCart key={item.id} item={item} />
					))}

					<div className="cart__bottom">
						<IMaskInput
							value={phoneNumber}
							className="cart__phone"
							mask={`+{7}(000)000-00-00`}
							radix="."
							unmask={true}
							ref={ref}
							inputRef={inputRef}
							onAccept={(value, mask) => {
								setPhoneNumber(value);
								if (value.length === 11) {
									setDisabled(false);
									setError(false);
								} else {
									setError(true);
									setDisabled(true);
								}
							}}
							placeholder="+7 (___) ___ __-__"
						/>
						{error ? (
							<p
								style={{ fontSize: "26px", color: "red", fontFamily: "Inter" }}
							>
								Пожалуйста, введите корректный номер телефона
							</p>
						) : (
							""
						)}
						<button
							disabled={disabled}
							onClick={() => {
								order({
									phone: phoneNumber,
									cart: cartForOrder,
								});
								setDisabled(true);
								props.setPopUpShow(true);
								props.renew();
								setPhoneNumber("");
							}}
							type="text"
							className="cart__order"
						>
							Заказать
						</button>
					</div>
				</>
			) : (
				<h3 className="cart__title_main">Корзина пуста</h3>
			)}
		</section>
	);
};
