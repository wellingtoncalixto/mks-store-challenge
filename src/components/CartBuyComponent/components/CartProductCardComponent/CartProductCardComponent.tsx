import React from "react";
import {
  CartProductCardContainer,
  ProductName,
  ProductQtdContainer,
  ProductQtd,
  ProductPrice,
  CloseButton,
} from "./styled";

import photo from "../../../../assets/apple-watch.png";

const CartProductCardComponent = () => {
  return (
    <CartProductCardContainer>
      <img src={photo} alt="product photo" />
      <ProductName>Apple Watch Series 4 GPS</ProductName>
      <ProductQtdContainer>
        <p>Qtd:</p>
        <ProductQtd>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </ProductQtd>
      </ProductQtdContainer>
      <ProductPrice>R$399</ProductPrice>
      <CloseButton>X</CloseButton>
    </CartProductCardContainer>
  );
};

export default CartProductCardComponent;
