import React from 'react';
import Button from './Button';



export default class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state={
			date : new Date(),
			locale : "en-US",
		}
	}
	componentDidMount(){
		this.clockTimer = setInterval(() =>{
			this.tick()
		},1000)
	}
	componentWillUnmount(){
		clearInterval(this.clockTimer)
	}
	handleclick=(locale)=>{
		console.log(locale," calling from clock")
		this.setState({
			locale:locale,
		})
		console.log(this.state.locale)
	}
	tick(){
		this.setState({
			date : new Date(),
		});
	}
	render(){
		const{date,locale} = this.state
		var button;
		if(locale === "en-US"){
			button = (<Button change={this.handleclick} locale="bn-BD"/>);
		}else{
			button = (<Button change={this.handleclick} locale="en-US"/>);
		}
		return(
			<div>
				<h1 className="heading">
					<span className="text">{date.toLocaleTimeString(locale)}</span>
				</h1>
				{button}
			</div>
		)
	}
}