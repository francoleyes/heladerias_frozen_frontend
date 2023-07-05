import React from "react";
import { Link } from "react-router-dom";

import CartWidget from "../../components/Cart/CartWidget";
import { useCart } from "../../hooks/useCart";

const NavBar = () => {
  const {numItems} = useCart();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand links-router">
            HFrozen
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/catalogo" className="nav-link active links-router" aria-current="page">
                  Catálogo
                </Link>
              </li>
            </ul>
            {numItems > 0 && (
              <span className="navbar-text">
                <Link to={"/cart"} className="links-router">
                  <CartWidget />
                </Link>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
