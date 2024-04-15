/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./goods.scss";
import { GoodsItem } from "../goods-item/goods-item";

export function Goods(props) {
	return (
		<main className="goods__wrapper">
			{props.goods.map(item => (
				<GoodsItem key={item.id} item={item} />
			))}
		</main>
	);
}
