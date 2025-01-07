import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import { CheckoutComponent } from "../Components";

function Checkout({ validPrice }) {
  return (
    <div>
      <Navbar nav={true} />
      <CheckoutComponent validPrice={validPrice} />
    </div>
  );
}

export default Checkout;
