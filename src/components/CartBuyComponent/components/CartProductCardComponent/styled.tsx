import styled from "styled-components";
import CloseButtonComponent from "../../../CloseButtonComponent/CloseButtonComponent";

export const CartProductCardContainer = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: max-content repeat(3, 1fr);

  background-color: #fff;
  padding: 1.1875rem 0.9375rem 1.1875rem 1.4375rem;
  border-radius: 0.5rem;

  & > img {
    max-height: 60px;
    width: auto;

    margin-right: 1.3125rem;

    object-fit: cover;
  }
`;

export const ProductName = styled.h1`
  color: #2c2c2c;
  font-size: 0.8125rem;
  font-weight: 400;
`;

export const ProductQtdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;

  & > p {
    color: #000000;
    font-size: 0.3125rem;
    font-weight: 400;
  }
`;

export const ProductQtd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4375rem;
  width: max-content;
  height: 1.1875rem;

  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 0.3px solid #bfbfbf;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    border: 0;
    background-color: transparent;
  }

  & > p {
    font-size: 0.5rem;
    font-weight: 400;

    padding: 0 0.4375rem;
    border: 0.2px solid;
    border-color: transparent #bfbfbf;
    font-family: Montserrat;
  }
`;

export const ProductPrice = styled.p`
  justify-self: center;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: absolute;
  top: -5px;
  right: -6px;

  width: 1.125rem;
  height: 1.125rem;

  font-size: 0.875rem;
  font-weight: 400;

  color: #ffffff;
  background-color: #000000;
  border: 0;
  border-radius: 50%;
`;
