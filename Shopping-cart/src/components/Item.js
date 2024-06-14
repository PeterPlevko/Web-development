import { useState } from "react";
import "../styles/item.css";

function Item(props) {
  const [count, setCount] = useState(0);

  const incrementCount = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const decrementCount = (e) => {
    e.preventDefault();
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const inputCount = (e) => {
    setCount(Number(e.target.value));
  };

  const addToCart = (e) => {
    e.preventDefault();
    const strippedPrice = Number(props.price.replace("$", ""));
    const totalPrice = strippedPrice * count;
    props.addItems(count);
    props.addPrice(totalPrice);
  };

  return (
    <div className="card" id={props.name}>
      <h1>{props.name}</h1>
      {props.price}
      <p>{props.description}</p>
      <form onSubmit={addToCart}>
        <button onClick={decrementCount}>-</button>
        <input type="number" onChange={inputCount} value={count} required />
        <button onClick={incrementCount}>+</button>
        <hr />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default Item;
