import Emoji from "./Emoji";

export default class Text extends Emoji{
	constructor(props){
		super(props);
	}
	render(){
		const decorateText = this.addEmoji("This is Ract Js","😑")
		return super.render(decorateText)
	}
}