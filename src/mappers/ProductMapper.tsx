import { ProductAfterMap } from "../interfaces/ProductAfterMap";
import { ProductBeforeMap } from "../interfaces/ProductBeforeMap";

export function ProductMapper(productArray: ProductBeforeMap[]) {
  const mapProducts: ProductAfterMap[] = productArray.map(
    (product: ProductBeforeMap) => {
      return {
        brand: product.brand,
        description: product.description,
        id: product.id,
        name: product.name,
        photo: product.photo,
        price: parseFloat(product.price),
      };
    }
  );

  return mapProducts;
}
