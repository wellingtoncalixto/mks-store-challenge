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
import { ProductCardPropsInterface } from "./interfaces/ProductCardPropsInterface";
import { useCartBuy } from "../../contexts/CartyBuyContext";

const ProductCardComponent = ({ product }: ProductCardPropsInterface) => {
  const { addItem } = useCartBuy();
  return (
    <ProductCardContainer>
      <img src={product.photo} alt="product photo" />
      <ProductInformationsContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInformationsContainer>
      <BuyButton onClick={() => addItem(product)}>
        <ShoppingBagIconSvg />
        <BuyText>Comprar</BuyText>
      </BuyButton>
    </ProductCardContainer>
  );
};

export default ProductCardComponent;
