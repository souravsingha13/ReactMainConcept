import React from "react";

export default function HoverCount({count,increamentCount,theme}){
	const style = theme ==="dark"? {backgroundColor :"#000000",color : "#ffffff"}:null
		return(
			<div>
				<h1 type="button" onMouseOver={increamentCount} style={{style}}>
					Hovered {count } times
				</h1>
			</div>
		)
}