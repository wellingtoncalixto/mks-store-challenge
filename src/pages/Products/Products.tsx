import React from "react";
import { ProductsSection, ProductsList, ProductItem } from "./styled";
import ProductCardComponent from "../../components/ProductCardComponent/ProductCardComponent";

const Products = () => {
  return (
    <ProductsSection>
      <ProductsList>
        <ProductItem>
          <ProductCardComponent />
        </ProductItem>
        <ProductItem>
          <ProductCardComponent />
        </ProductItem>
        <ProductItem>
          <ProductCardComponent />
        </ProductItem>
        <ProductItem>
          <ProductCardComponent />
        </ProductItem>
        <ProductItem>
          <ProductCardComponent />
        </ProductItem>
        <ProductItem>
          <ProductCardComponent />
        </ProductItem>
        <ProductItem>
          <ProductCardComponent />
        </ProductItem>
        <ProductItem>
          <ProductCardComponent />
        </ProductItem>
      </ProductsList>
    </ProductsSection>
  );
};

export default Products;
