import './App.css';
import Info from "./info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
      <AddItem />
      <AddItem />
      
    </div>
  );
}


function AddItem() {
  const value = "tim is great"

  return (
    <form>
      <label for="text-form">Type something:</label>
      <input type="text" id="text-form" value={value}></input>
    </form>
  )
}

export default App;
