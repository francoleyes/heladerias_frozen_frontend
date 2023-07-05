import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";

export function ItemCount(props) {
  const { product, onAddToCart } = props;
  const { id, title, price, stock } = product;
  const { addProductCart } = useCart();

  const [counter, setCounter] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const addQty = () => {
    counter === parseInt(stock) ? parseInt(stock) : setCounter(counter + 1);
  };

  const substractQty = () => {
    counter === 0 ? 0 : setCounter(counter - 1);
  };

  const addItem = () => {
    addProductCart(id, title, price, counter);
    setAddedToCart(true);
    onAddToCart();
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="text-center counter d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-dark p-3"
          onClick={substractQty}
        >
          -
        </button>

        <div className="m-3">{counter}</div>

        <button type="button" className="btn btn-dark p-3" onClick={addQty}>
          +
        </button>
      </div>

      {addedToCart ? (
        <button type="button" className="btn btn-warning mt-2" disabled>
          Agregado al carrito
        </button>
      ) : counter > 0 ?(
        <button type="button" className="btn btn-warning mt-2" onClick={addItem}>
          Agregar al carrito
        </button>
      ) : null}
    </div>
  );
}
