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
    const itemExist = itens.findIndex((x) => x.id === itemAfterMapper.id);

    if (itemExist !== -1) {
      const uptateItens = itens.map((item) => {
        if (item.id === itemAfterMapper.id) {
          item.qtd = item.qtd + 1;
          return item;
        } else {
          return item;
        }
      });
      setItens(uptateItens);
    } else {
      setItens((itens) => [...itens, itemAfterMapper]);
    }

    setQtd((qtd) => qtd + 1);
  }

  function addQtd(product: Item): void {
    const updadateItens = itens.map((item) => {
      if (item.id === product.id) {
        item.qtd = item.qtd + 1;
        return item;
      } else {
        return item;
      }
    });
    setItens(updadateItens);
  }

  function removeQtd(product: Item): void {
    const updadateItens = itens.map((item) => {
      if (item.id === product.id) {
        item.qtd = item.qtd - 1;
        return item;
      } else {
        return item;
      }
    });
    setItens(updadateItens);
  }

  function removeIten(productId: number): void {
    const updadateItens = itens.filter((item) => {
      if (item.id === productId) {
        setQtd((qtd) => (qtd !== 0 ? qtd - item.qtd : qtd));
        return;
      } else {
        return item;
      }
    });
    setItens(updadateItens);
  }

  return (
    <CartBuyContext.Provider
      value={{
        itens,
        setItens,
        qtd,
        totalPrice,
        addItem,
        addQtd,
        removeQtd,
        removeIten,
      }}
    >
      {children}
    </CartBuyContext.Provider>
  );
};
