import React from "react";
import { CardButton } from "./styled";
import CartIconSvg from "../../../../assets/cart-icon.svg?react";
import { useShowCartBuy } from "../../../../contexts/ShowCartBuyContext";
import { useCartBuy } from "../../../../contexts/CartyBuyContext";

const CartButtomComponent = () => {
  const { showCartBuy } = useShowCartBuy();
  const { qtd } = useCartBuy();
  return (
    <CardButton onClick={showCartBuy}>
      <CartIconSvg />
      <span>{qtd}</span>
    </CardButton>
  );
};

export default CartButtomComponent;
