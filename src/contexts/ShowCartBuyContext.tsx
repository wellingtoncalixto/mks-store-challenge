import React from "react";

type ShowCartBuy = {
  open: boolean;
  closeCartBuy: () => void;
  showCartBuy: () => void;
};

export const ShowCartBuyContext = React.createContext<ShowCartBuy | null>(null);

export const useShowCartBuy = () => {
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

  return (
    <ShowCartBuyContext.Provider value={{ open, closeCartBuy, showCartBuy }}>
      {children}
    </ShowCartBuyContext.Provider>
  );
};
