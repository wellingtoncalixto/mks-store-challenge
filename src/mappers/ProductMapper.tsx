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
        price: formatPrice(product.price),
      };
    }
  );

  return mapProducts;
}

function formatPrice(price: string): string {
  const formatCurrency = parseFloat(price).toLocaleString("pt-BR", {
    style: "currency",
    minimumFractionDigits: 0,
    currency: "BRL",
  });
  return formatCurrency;
}
