import React, { useState } from "react";


function Item({ name, category }) {

  const [inCart, setInCart] = useState(true)

  const itemClass = inCart ? "": "in-cart"
  
  function addToCart() {
    setInCart((inCart) => !inCart)
}

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  onClick={addToCart} className="add">{itemClass ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;


