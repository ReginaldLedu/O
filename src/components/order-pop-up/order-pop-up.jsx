/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./order-pop-up.scss";
import "../../App.scss";

export function OrderPopUp(props) {
	return (
		<>
			{props.popUpShow ? (
				<div className="order__pop-up_cover">
					<div className="order__pop-up">
						<p className="order__pop-up_title">
							Заказ отправлен на обработку.
						</p>
						<button
							onClick={() => {
								props.setPopUpShow(false);
								localStorage.removeItem("cart");
							}}
							className="order__pop-up_close"
						>
							Закрыть
						</button>
					</div>
				</div>
			) : (
				" "
			)}
		</>
	);
}
