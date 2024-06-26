import React from "react";
import {
  CartProductCardContainer,
  ProductName,
  ProductQtdContainer,
  ProductQtd,
  ProductPrice,
  CloseButton,
} from "./styled";

import { useCartBuy } from "../../../../contexts/CartyBuyContext";
import { CartProductCardPros } from "./interfaces/CartProductCard";

const CartProductCardComponent = ({ product, index }: CartProductCardPros) => {
  const { removeQtd, addQtd, removeIten } = useCartBuy();
  return (
    <CartProductCardContainer>
      <img src={product.photo} alt="product photo" />
      <ProductName>{product.name}</ProductName>
      <ProductQtdContainer>
        <p>Qtd:</p>
        <ProductQtd>
          <button onClick={() => removeQtd(product)}>-</button>
          <p>{product.qtd}</p>
          <button onClick={() => addQtd(product)}>+</button>
        </ProductQtd>
      </ProductQtdContainer>
      <ProductPrice>{product.price}</ProductPrice>
      <CloseButton onClick={() => removeIten(product.id)}>X</CloseButton>
    </CartProductCardContainer>
  );
};

export default CartProductCardComponent;
