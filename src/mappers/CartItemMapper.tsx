import { Item } from "../interfaces/Cart/Cart";
import { ProductAfterMap } from "../interfaces/Product/ProductAfterMap";

export function cartItemMapper(item: ProductAfterMap): Item {
  return {
    id: item.id,
    photo: item.photo,
    name: item.name,
    price: item.price,
    qtd: 1,
  };
}
