import React from "react";
import { CardButton } from "./styled";
import CartIconSvg from "../../../../assets/cart-icon.svg?react";
import { useCartBuy } from "../../../../contexts/ShowCartBuyContext";

const CartButtomComponent = () => {
  const { showCartBuy } = useCartBuy();
  return (
    <CardButton onClick={showCartBuy}>
      <CartIconSvg />
      <span>0</span>
    </CardButton>
  );
};

export default CartButtomComponent;
