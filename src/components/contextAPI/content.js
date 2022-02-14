import Counter from "../contextAPI/Counter";
import HoverCount from "../contextAPI/HoverCount";
import ThemeContext from "./themeContext";


export default function Content(){
	return(
		<div>
			<h1>This is a Content Section.</h1>
			<Counter>
				{(count,increamentCount)=>(
					<ThemeContext.Consumer>
						{({theme})=>(
							<HoverCount 
							count={count} 
							increamentCount={increamentCount} theme ={theme}/>
						)}
					</ThemeContext.Consumer>
				)}
			</Counter>
		</div>
	)
}  