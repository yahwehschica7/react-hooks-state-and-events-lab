import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [toggleLight, setToggleLight] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = {toggleLight} ? "App light" : "App dark"

  function handleClick() {
    setToggleLight((toggleLight) => !toggleLight)
  }


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{toggleLight ? "Dark" : "Light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;


