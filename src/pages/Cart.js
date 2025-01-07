import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import { CartComponent } from "../Components";

function Cart({ cart, deleteCart, setCart, validPrice }) {
  return (
    <div>
      <Navbar nav={true} />
      <CartComponent
        cart={cart}
        setCart={setCart}
        deleteCart={deleteCart}
        validPrice={validPrice}
      />
    </div>
  );
}

export default Cart;
