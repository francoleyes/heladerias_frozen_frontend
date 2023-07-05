import React from "react";
import { useCart } from "../../hooks/useCart";

function CartWidget() {
  const { numItems } = useCart();

  return (
    <div>
      <span>{numItems}</span>
      <i className="bi bi-cart m-2 cart"></i>
    </div>
  );
}

export default CartWidget;
