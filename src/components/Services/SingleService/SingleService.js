import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "./SingleService.css";

function SingleService({ id, title, icon }) {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			key={id}
			className="serviceCard"
			style={{ backgroundColor: theme.primary30 }}
		>
			<div
				className="serviceImg"
				style={{ backgroundColor: theme.primary }}
			>
				{icon}
			</div>
			<h5 style={{ color: theme.tertiary }}>{title}</h5>
		</div>
	);
}

export default SingleService;
