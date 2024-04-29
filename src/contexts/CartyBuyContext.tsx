import React from "react";
import { ProductAfterMap } from "../interfaces/Product/ProductAfterMap";
import { Cart, Item } from "../interfaces/Cart/Cart";
import { cartItemMapper } from "../mappers/CartItemMapper";

export const CartBuyContext = React.createContext<Cart | null>(null);

export const useCartBuy = () => {
  const context = React.useContext(CartBuyContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const CartBuyProvider = ({ children }: React.PropsWithChildren) => {
  const [itens, setItens] = React.useState<Array<Item>>([]);
  const [totalPrice, setTotalPrice] = React.useState<string>("");
  const [qtd, setQtd] = React.useState<number>(0);

  React.useEffect(() => {
    function countTotalPrice() {
      let total: number = 0;
      itens.map((item) => {
        const priceStringFormat = item.price.slice(3).replace(".", "");
        const priceNumberFormat = parseFloat(priceStringFormat);
        total = total + priceNumberFormat * item.qtd;
      });

      const totalFormat = total.toLocaleString("pt-BR", {
        style: "currency",
        minimumFractionDigits: 0,
        currency: "BRL",
      });

      setTotalPrice(totalFormat);
    }
    countTotalPrice();
  }, [itens]);

  function addItem(addItem: ProductAfterMap): void {
    const itemAfterMapper = cartItemMapper(addItem);
    const exist = itens.filter((item) => item.id === itemAfterMapper.id);

    if (exist.length === 1) {
      const uptateItens = itens.filter(
        (item) => item.id === addItem.id && item.qtd++
      );
      setItens(uptateItens);
    } else {
      setItens((itens) => [...itens, itemAfterMapper]);
    }

    setQtd((qtd) => qtd + 1);
  }

  console.log(totalPrice);

  return (
    <CartBuyContext.Provider
      value={{ itens, setItens, qtd, totalPrice, addItem }}
    >
      {children}
    </CartBuyContext.Provider>
  );
};
