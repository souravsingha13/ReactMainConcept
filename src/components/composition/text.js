export default function Text({addEmoji}){
	const text ="This is composition"
	return <div>{addEmoji?addEmoji(text,'😑'):text}</div> 
} 