import React, { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import useHfrozen from "../../hooks/useHfrozen";
import DiscountCode from "../DiscountCode/DiscountCode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function FormPay() {
  const { cleanProductCart, getProductsCart } = useCart();
  const { addOrder } = useHfrozen();
  const [order, setOrder] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [orderSent, setOrderSent] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const navigate = useNavigate();

  const handleDiscountCodeChange = (code) => {
    setDiscountCode(code);
  };

  useEffect(() => {
    const orderInCart = getProductsCart();
    setOrder(orderInCart);
  }, []);

  const sendOrder = async (e) => {
    e.preventDefault();
    const products = Object.keys(order).map((productId) => {
      const [id, image, price, quantity] = order[productId];
      return {
        product: id,
        quantity: quantity,
      };
    });

    const payload = JSON.stringify({
      name_buyer: name,
      products,
      ...(discountCode && { code: discountCode }),
    });

    try {
      await addOrder(payload);
      cleanProductCart();
      setOrderSent(true);

      toast.success("Orden creada correctamente");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailRepeatChange = (e) => {
    setEmailRepeat(e.target.value);
  };

  const emailRepeatValid = email && email === emailRepeat;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmailFormat = emailRegex.test(email);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div className="card card-form">
          <div className="card-body">
            <form onSubmit={sendOrder}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre y apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Escribe tu nombre y apellido"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Escribe tu email"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailRepeat" className="form-label">
                  Repite el email
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    emailRepeat && !emailRepeatValid ? "is-invalid" : ""
                  }`}
                  id="emailRepeat"
                  placeholder="Repite tu email"
                  onChange={handleEmailRepeatChange}
                  required
                />
                {emailRepeat && !emailRepeatValid && (
                  <div className="invalid-feedback">
                    Los emails no coinciden
                  </div>
                )}
              </div>
              {order?.length > 0 ? (
                <>
                  {!validateEmailFormat ? (
                    <p className="text-center">
                      {" "}
                      <strong>
                        Poner dirección de correo válida: test@example.com
                      </strong>
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    className="btn btn-success btn-send"
                    disabled={
                      !validateEmailFormat || !emailRepeatValid || orderSent
                    }
                  >
                    Enviar
                  </button>
                </>
              ) : null}
            </form>
          </div>
        </div>
      </div>
      <DiscountCode onDiscountCodeChange={handleDiscountCodeChange} />
    </>
  );
}

export default FormPay;
