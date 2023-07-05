import React, { useState } from "react";
import useHfrozen from "../../hooks/useHfrozen";

export default function DiscountCode({onDiscountCodeChange}) {
  const [code, setCode] = useState("");
  const { validateCode } = useHfrozen();
  const [verified, setVerified] = useState();

  const validateCodeDiscount = async (e) => {
    e.preventDefault();
    const response = await validateCode(code);
    if (response.error) {
      setVerified(false);
      onDiscountCodeChange(false)
    } else {
      setVerified(response.code);
      onDiscountCodeChange(response.code)
    } 
  };

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <div className="card card-form">
        <div className="card-body">
          <form onSubmit={validateCodeDiscount} className="d-flex flex-column">
            <div className="mb-3r">
              <label htmlFor="code" className="form-label">
                <strong>Validar código de descuento</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="code"
                placeholder="Código"
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-warning btn-send mt-3">
              Enviar
            </button>
          </form>
          <p className="text-center mt-3">
            {verified === false
              ? "Código incorrecto"
              : verified !== undefined
              ? "Código correcto"
              : null}
          </p>
        </div>
      </div>
    </div>
  );
}
