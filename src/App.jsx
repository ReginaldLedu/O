/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useGetReviewsQuery, useGetAllGoodsQuery } from "./store/rtk";
import { clearCart, setCartOnLoad } from "./store/slice";
import { MainTitle } from "./components/main-title/main-title";
import { Wrapper } from "./components/wrapper/wrapper";
import { Reviews } from "./components/reviews/reviews";
import { Cart } from "./components/cart/cart";
import { Goods } from "./components/goods/goods";
import { OrderPopUp } from "./components/order-pop-up/order-pop-up";

function App() {
	const dispatch = useDispatch();
	window.onload = () => {
		const cartOnload = localStorage.getItem("cart");
		if (cartOnload) {
			const cartParsed = JSON.parse(cartOnload);
			dispatch(setCartOnLoad(cartParsed));
		}
	};

	const { data: all } = useGetAllGoodsQuery(1);
	const [popUpShow, setPopUpShow] = useState(false);
	const { data } = useGetReviewsQuery();
	const [goods, setGoods] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [pageNumber, setPageNumber] = useState(2);
	const [fetching, setFetching] = useState(true);
	const [totalCount, setTotalCount] = useState(0);
	const cart = useSelector(state => state.rootReducer.oToolkit.cart);
	const renew = () => {
		dispatch(clearCart());
	};
	useEffect(() => {
		if (data !== undefined) {
			setReviews(data);
		}
	}, [data]);
	useEffect(() => {
		if (all !== undefined) {
			setGoods(all.products);
			setTotalCount(all.total);
			
		}
	}, [all]);
	const scrollHandler = e => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			setFetching(true);
		} else if (goods.length >= Number(totalCount)) {
			setFetching(false);
		}
	};
	useEffect(() => {
		if (cart.length > 0) {
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	}, [cart]);
	useEffect(() => {
		if (fetching) {
			fetch(`http://o-complex.com:1337/products?page=${pageNumber}&page_size=6`)
				.then(response => response.json())
				.then(json => {
					setGoods([...goods, ...json.products]);
					setPageNumber(prev => prev + 1);
				})
				.finally(() => setFetching(false));
		}
	}, [fetching]);
	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);
		return function () {
			document.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	return (
		<>
			<Wrapper>
				<OrderPopUp popUpShow={popUpShow} setPopUpShow={setPopUpShow} />
				<MainTitle />
				<Reviews reviews={reviews} />
				<Cart
					renew={renew}
					cart={cart}
					popUpShow={popUpShow}
					setPopUpShow={setPopUpShow}
				/>
				<Goods goods={goods} />
			</Wrapper>
		</>
	);
}

export default App;
