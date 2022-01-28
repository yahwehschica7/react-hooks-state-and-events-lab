import React, { useState } from "react";

// const [inCart, setInCart] = useState(false)

// function addToCart() {
//   setInCart((inCart) => !inCart)
// }

function Item({ name, category }) {
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
