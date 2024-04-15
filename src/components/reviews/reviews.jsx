/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./reviews.scss";
import { ReviewItem } from "../review-item/review-item";
import { getRandomInt } from "../../helpers/get-random";

export const Reviews = props => {
	const usedArr = props.reviews.map(function (item) {
		return item.id;
	});

	return (
		<div className="reviews__wrapper">
			{props.reviews.map(item => (
				<ReviewItem key={getRandomInt(1, 1000, usedArr)} item={item} />
			))}
		</div>
	);
};
