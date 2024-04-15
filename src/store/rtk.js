import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const oAPI = createApi({
	reducerPath: "oAPI",
	baseQuery: fetchBaseQuery({ baseUrl: "" }),
	endpoints: builder => ({
		getReviews: builder.query({
			query: () => `http://o-complex.com:1337/reviews`,
		}),
		getAllGoods: builder.query({
			query: pageNumber =>
				`http://o-complex.com:1337/products?page=${pageNumber}&page_size=6`,
		}),
		postOrder: builder.mutation({
			query: ({ phone, cart }) => ({
				url: "http://o-complex.com:1337/order",
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					phone,
					cart,
				}),
			}),
		}),
	}),
});

export const { useGetReviewsQuery, useGetAllGoodsQuery, usePostOrderMutation } =
	oAPI;
