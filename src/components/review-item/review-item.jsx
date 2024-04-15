/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./review-item.scss";
import "../../App.scss";

export function ReviewItem(props) {

	return (
		<div className="reviews__item">
			<div className="review__wrapper">
				<h3 className="review__text">{props.item.text.slice(4, 12)}</h3>
				<p className="review__text">{props.item.text.slice(13, -1)}</p>
			</div>
		</div>
	);
}
