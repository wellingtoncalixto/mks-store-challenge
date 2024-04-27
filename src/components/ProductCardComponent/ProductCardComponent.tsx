import React from "react";
import {
  ProductCardContainer,
  ProductInformationsContainer,
  ProductName,
  ProductPrice,
  ProductDescription,
  BuyButton,
  BuyText,
} from "./styled";

import ShoppingBagIconSvg from "../../assets/shopping-bag-icon.svg?react";
import photo from "../../assets/apple-watch.png";

const ProductCardComponent = () => {
  return (
    <ProductCardContainer>
      <img src={photo} alt="product photo" />
      <ProductInformationsContainer>
        <ProductName>Apple Watch Series 4 GPS</ProductName>
        <ProductPrice>R$399</ProductPrice>
        <ProductDescription>
          Redesigned from scratch and completely revised.
        </ProductDescription>
      </ProductInformationsContainer>
      <BuyButton>
        <ShoppingBagIconSvg />
        <BuyText>Comprar</BuyText>
      </BuyButton>
    </ProductCardContainer>
  );
};

export default ProductCardComponent;
