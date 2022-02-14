import React from "react";
import HookState from "./components/hook/Hookstate";


export default class App extends React.Component {
  state ={
    theme : 'dark',
  }
  render(){
    const { theme } = this.state;
    return (  
      <div className="app">
        <HookState/>
      </div>
    );
  }
}
