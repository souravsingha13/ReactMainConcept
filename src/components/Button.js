import React from "react";



export default class Button extends React.Component{
	shouldComponentUpdate(nextProps){
		const{change:currentChange, locale:currentlocal} = this.props;
		const{change:nextChange,locale:nextlocal} = nextProps;
		if(currentChange === nextChange && nextlocal===currentlocal){
			return false
		}
			return true
	}
	render(){
		const {change,locale} = this.props
		console.log(locale)
		return(
			<button type="button" onClick={()=>change(locale)}>{locale=="bn-BD"?"Change Clock":"ঘড়ি পরিবর্তন করুন"}</button>
		)
	}
}