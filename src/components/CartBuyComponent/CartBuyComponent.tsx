import React from "react";

import { LazyMotion, domAnimation, useAnimate, useInView } from "framer-motion";

import {
  CartBuyContainer,
  CartBuyHeader,
  CartBuyTitle,
  CartBuyProductsList,
  ListItem,
  CartFooter,
  CartTotal,
  CartButtonFinalize,
} from "./styled";
import CloseButtonComponent from "../CloseButtonComponent/CloseButtonComponent";
import CartProductCardComponent from "./components/CartProductCardComponent/CartProductCardComponent";
import { useShowCartBuy } from "../../contexts/ShowCartBuyContext";

const CartBuyComponent = () => {
  const { open, closeCartBuy } = useShowCartBuy();
  const animate = {
    transition: { type: "tween" },
    width: open ? "auto" : 0,
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <CartBuyContainer
        style={{ overflow: "hidden" }}
        initial={{ width: 0 }}
        animate={animate}
        exit={{ width: 0 }}
      >
        <CartBuyHeader>
          <CartBuyTitle>
            Carrinho
            <br /> de compras
          </CartBuyTitle>
          <CloseButtonComponent onClick={closeCartBuy} />
        </CartBuyHeader>
        <CartBuyProductsList>
          <ListItem>
            <CartProductCardComponent />
          </ListItem>
        </CartBuyProductsList>
        <CartFooter>
          <CartTotal>
            Total: <span>R$2.000</span>
          </CartTotal>
          <CartButtonFinalize>Finalizar Compra</CartButtonFinalize>
        </CartFooter>
      </CartBuyContainer>
    </LazyMotion>
  );
};

export default CartBuyComponent;
