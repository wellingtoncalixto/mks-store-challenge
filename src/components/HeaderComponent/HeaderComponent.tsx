import React from "react";
import { Header, Title } from "./styled";
import CartButtomComponent from "./components/CartButton/CartButtomComponent";

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Title>
          MKS <span>sistemas</span>
        </Title>
        <CartButtomComponent />
      </Header>
    </>
  );
};

export default HeaderComponent;
