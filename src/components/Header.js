import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function Header({ mode, onDarkModeClick }) {
  return (
    <div className={"App " + (mode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {mode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  )
}

export default Header;
