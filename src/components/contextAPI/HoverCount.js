import React from "react";

export default class HoverCount extends React.Component{
	render(){
		const { count, increamentCount } = this.props
		return(
			<div>
				<h1 type="button" onMouseOver={increamentCount}>
					Clicked {count } times
				</h1>
			</div>
		)
	}
}