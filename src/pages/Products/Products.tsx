import React from "react";
import { ProductsSection, ProductsList, ProductItem } from "./styled";
import ProductCardComponent from "../../components/ProductCardComponent/ProductCardComponent";
import api from "../../api/Api";
import { ProductAfterMap } from "../../interfaces/Product/ProductAfterMap";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

const Products = () => {
  const { data, error, isLoading } = useQuery<ProductAfterMap[], AxiosError>({
    queryKey: ["productsList"],
    queryFn: api.getProducts,
  });

  // if (isLoading) return <div>Carregando...</div>;
  // if (error) {
  //   const message =
  //     axios.isAxiosError(error) && error.response
  //       ? `Erro: ${error.response.status} ${error.response.statusText}`
  //       : error.message;
  //   return <div>{message}</div>;
  // }

  return (
    <ProductsSection>
      <ProductsList>
        {data?.map((product) => (
          <ProductItem key={product.id}>
            <ProductCardComponent product={product} />
          </ProductItem>
        ))}
      </ProductsList>
    </ProductsSection>
  );
};

export default Products;
