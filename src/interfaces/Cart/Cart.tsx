import { ProductAfterMap } from "../Product/ProductAfterMap";

export interface Cart {
  itens: Array<Item>;
  setItens: React.Dispatch<React.SetStateAction<Array<Item>>>;
  qtd: number;
  totalPrice: string;
  addItem: (addItem: ProductAfterMap) => void;
}

export interface Item {
  id: number;
  photo: string;
  name: string;
  qtd: number;
  price: string;
}
