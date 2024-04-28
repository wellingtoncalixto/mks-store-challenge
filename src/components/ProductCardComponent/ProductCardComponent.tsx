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
import { ProductCardPropsInterface } from "./interfaces/ProductCardPropsInterface";

const ProductCardComponent = ({ product }: ProductCardPropsInterface) => {
  return (
    <ProductCardContainer>
      <img src={product.photo} alt="product photo" />
      <ProductInformationsContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInformationsContainer>
      <BuyButton>
        <ShoppingBagIconSvg />
        <BuyText>Comprar</BuyText>
      </BuyButton>
    </ProductCardContainer>
  );
};

export default ProductCardComponent;
