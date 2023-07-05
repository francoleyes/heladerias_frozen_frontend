import React from "react";
import { ToastContainer } from "react-toastify";
import {CartProvider} from "./context"

import Navigation from "./routes/Navigation";

function App() {
  return (
    <CartProvider>
      <Navigation />

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </CartProvider>
  );
}

export default App;
