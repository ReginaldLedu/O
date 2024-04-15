/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./goods-item.scss";
import "../../App.scss";
import { BuyBtn } from "../buy-btn/buy-btn";

export function GoodsItem(props) {
	return (
		<div className="goods__item">
			<div className="item__wrapper">
				<img
					className="goods__pic"
					src={props.item.image_url}
					alt="item-picture"
				/>
				<h4 className="goods__title">{props.item.title}</h4>
				<p className="goods__text">{props.item.description}</p>
				<div className="goods__bottom">
					<p className="goods__price">цена: {props.item.price}</p>
					<BuyBtn item={props.item} />
				</div>
			</div>
		</div>
	);
}
