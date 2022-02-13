import ClickCount from "./components/RenderProps/ClickCount";
import Counter from "./components/RenderProps/Counter";
import HoverCount from "./components/RenderProps/HoverCount";
function App() {
  return (  
    <div className="app">
      <Counter render ={(count,increamentCount)=><ClickCount count={count} increamentCount={increamentCount}/>}/>
      <Counter render ={(count,increamentCount)=><HoverCount count={count} increamentCount={increamentCount}/>}/>
    </div>
  );
}

export default App;
