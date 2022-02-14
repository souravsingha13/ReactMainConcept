import React from "react";
import ClickCount from "./components/contextAPI/ClickCount";
import Counter from "./components/contextAPI/Counter";
import Section from "./components/contextAPI/section";
import ThemeContext from "./components/contextAPI/themeContext";



export default class App extends React.Component {
  state ={
    theme : 'dark',
  }
  render(){
    const { theme } = this.state;
    return (  
      <div className="app">
        <Counter>
          {(count,increamentCount)=>{
            <ClickCount count={count} increamentCount={increamentCount}/>
          } }
        </Counter>
        <ThemeContext.Provider value={{theme : theme}}><Section/></ThemeContext.Provider>
      </div>
    );
  }
}
