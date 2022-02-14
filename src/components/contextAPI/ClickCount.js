import React from "react";

export default class ClickCount extends React.Component{
	render(){
		const { count, increamentCount } = this.props
		return(
			<div>
				<button type="button" onClick={increamentCount}>
					Clicked {count} times
				</button>
			</div>
		)
	}
}