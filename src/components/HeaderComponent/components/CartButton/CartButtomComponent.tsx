import React from "react";
import { CardButton } from "./styled";
import CartIconSvg from "../../../../assets/cart-icon.svg?react";

const CartButtomComponent = () => {
  return (
    <CardButton>
      <CartIconSvg />
      <span>0</span>
    </CardButton>
  );
};

export default CartButtomComponent;
