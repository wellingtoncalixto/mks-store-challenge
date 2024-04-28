import React from "react";
import { ProductsSection, ProductsList, ProductItem } from "./styled";
import ProductCardComponent from "../../components/ProductCardComponent/ProductCardComponent";
import api from "../../api/Api";
import { ProductAfterMap } from "../../interfaces/ProductAfterMap";

const Products = () => {
  const [products, setProducts] = React.useState<ProductAfterMap[]>([]);

  React.useEffect(() => {
    async function callGetProducts() {
      const response = await api.getProducts();
      setProducts(response);
    }
    callGetProducts();
  }, []);

  return (
    <ProductsSection>
      <ProductsList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductCardComponent product={product} />
          </ProductItem>
        ))}
      </ProductsList>
    </ProductsSection>
  );
};

export default Products;
