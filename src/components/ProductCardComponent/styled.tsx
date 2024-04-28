import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  background-color: #ffffff;

  width: max-content;
  max-width: 13.5975rem;
  height: 17.8125rem;

  padding: 1.125rem 1.0625rem;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px #00000022;

  & > img {
    width: auto;
    max-height: 138px;
    object-fit: contain;
  }
`;

export const ProductInformationsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 7.75rem) 1fr;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  row-gap: 0.5rem;
  grid-template-areas:
    "name price"
    "description description";

  margin-top: 0.875rem;
  margin-bottom: 0.75rem;
`;

export const ProductName = styled.h1`
  align-self: center;
  grid-area: name;
  width: 100%;
  min-height: 2.375rem;

  color: #2c2c2c;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ProductPrice = styled.span`
  grid-area: price;

  background-color: #373737;
  padding: 0.25rem 0.4375rem;
  height: max-content;
  border-radius: 0.3125rem;

  color: #ffffff;
  font-size: 0.9375rem;
  font-weight: 700;
`;

export const ProductDescription = styled.p`
  grid-area: description;
  font-size: 10px;
  max-width: 100%;
  font-weight: 300;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BuyButton = styled.button`
  cursor: pointer;

  position: absolute;
  left: 0;
  bottom: -6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
  height: 2rem;
  width: 100%;

  border: 0;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: #0f52ba;
`;

export const BuyText = styled.p`
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
`;
