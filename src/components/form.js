import React from "react";


export default class Form extends React.Component {
	state={
		title : " ",
		text :"js is awesome",
		library : "React",
		ck : true
	}
	handleChange = (e)=>{
		if(e.target.type === 'text'){
			this.setState({
				title : e.target.value,
			})
		}
		else  if(e.target.type === 'textarea'){
			this.setState({
				text : e.target.value,
			})
		}else  if(e.target.type === 'select-one'){
			this.setState({
				library : e.target.value,
			})
		}else  if(e.target.type === 'checkbox'){
			console.log(e.target.checked)
			this.setState({
				ck : e.target.checked,
			})
		}
		
	}
	submitHandler =(e)=>{
		const{title,text,library,ck} = this.state
		e.preventDefault();
		console.log(title,text,library,ck)
	}
	render(){
		const{title,text,library,ck} = this.state
		return(
			<div>
				<form onSubmit={this.submitHandler}>
					<input type="text" placeholder="Enter title" value={title} onChange={this.handleChange}/>
					<br/>
					<textarea name="" type="textarea"value={text} onChange={this.handleChange}>
						Js
					</textarea><br />
					<select name="" value={library} onChange={this.handleChange}>
						<option value="React">Ract</option>
						<option value="Angular">Angular</option>
					</select><br />
					<input type="checkbox" checked={ck} onChange={this.handleChange}/><br />
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	}
}