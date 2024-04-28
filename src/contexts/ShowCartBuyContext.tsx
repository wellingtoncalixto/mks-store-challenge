import React from "react";

type showCartBuy = {
  open: boolean;
  closeCartBuy: () => void;
  showCartBuy: () => void;
};

export const ShowCartBuyContext = React.createContext<showCartBuy | null>(null);

export const useCartBuy = () => {
  const context = React.useContext(ShowCartBuyContext);
  if (!context) throw new Error("useContext deve estar dentro do Provider");
  return context;
};

export const ShowCartBuyProvider = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = React.useState<boolean>(false);

  function showCartBuy(): void {
    setOpen(true);
  }

  function closeCartBuy(): void {
    setOpen(false);
  }
  console.log(open);

  return (
    <ShowCartBuyContext.Provider value={{ open, closeCartBuy, showCartBuy }}>
      {children}
    </ShowCartBuyContext.Provider>
  );
};
