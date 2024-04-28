import styled from "styled-components";

export const CartBuyContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  width: 33.75%;
  height: 100%;
  top: 0;
  right: 0;

  background-color: #0f52ba;
  box-shadow: -5px 0px 6px 0px #00000021;
`;

export const CartBuyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2.25rem;
  padding-left: 2.9375rem;
  padding-right: 1.375rem;
`;

export const CartBuyTitle = styled.h1`
  align-self: flex-end;

  width: 180px;
  color: #ffffff;
  font-size: 1.6875rem;
  font-weight: 700;
`;

export const CartBuyProductsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.375rem;

  overflow-y: auto;

  margin: 4rem auto;
`;

export const ListItem = styled.li`
  margin-top: 0.3125rem;
  padding-left: 2.9375rem;
  padding-right: 3.75rem;
`;

export const CartFooter = styled.div`
  align-self: flex-end;
`;

export const CartTotal = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.625rem;
  padding-left: 2.9375rem;
  padding-right: 3.9375rem;

  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 700;

  span {
    justify-self: end;
  }
`;

export const CartButtonFinalize = styled.button`
  cursor: pointer;

  width: 100%;
  height: 6.0625rem;

  background-color: #000000;
  border: 0;

  color: #ffffff;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 700;
`;
