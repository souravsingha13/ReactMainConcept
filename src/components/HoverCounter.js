import withCounter from "./HOC/withCounter";

const HoverCounter = (props) =>{
	const {count,increamentCount} = props;
	return(
		<div>
			<h1 type="button" onMouseOver={increamentCount}>
				Clicked {count} times
			</h1>
		</div>
	)
}

export default withCounter(HoverCounter)