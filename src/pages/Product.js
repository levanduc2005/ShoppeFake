import React from "react";
import { useParams } from "react-router-dom";
import { Header, ProductComponent } from "../Components";

function Product({ cart, setCart, addCart, valueQuantity, setValueQuantity }) {
  const { id } = useParams();

  return (
    <div>
      <Header cart={cart} />
      <ProductComponent
        addCart={addCart}
        setCart={setCart}
        id={id}
        valueQuantity={valueQuantity}
        setValueQuantity={setValueQuantity}
      />
    </div>
  );
}

export default Product;
