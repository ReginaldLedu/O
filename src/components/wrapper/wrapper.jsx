/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./wrapper.scss";

export function Wrapper(props) {
	return (
		<>
			<div className="wrapper">{props.children}</div>
		</>
	);
}
