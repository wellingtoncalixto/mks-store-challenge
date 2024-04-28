import React from "react";
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

const CartBuyComponent = () => {
  return (
    <CartBuyContainer>
      <CartBuyHeader>
        <CartBuyTitle>
          Carrinho
          <br /> de compras
        </CartBuyTitle>
        <CloseButtonComponent />
      </CartBuyHeader>
      <CartBuyProductsList>
        <ListItem>
          <CartProductCardComponent />
        </ListItem>
        <ListItem>
          <CartProductCardComponent />
        </ListItem>
        <ListItem>
          <CartProductCardComponent />
        </ListItem>
        <ListItem>
          <CartProductCardComponent />
        </ListItem>
        <ListItem>
          <CartProductCardComponent />
        </ListItem>
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
  );
};

export default CartBuyComponent;
