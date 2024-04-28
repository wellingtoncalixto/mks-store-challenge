import styled from "styled-components";

export const ProductsSection = styled.section`
  width: 100%;
  max-width: 58.625rem;
  height: 100%;

  margin: 0 auto;
  padding-top: 7.25rem;
`;

export const ProductsList = styled.ul`
  display: grid;
  height: max-content;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.4025rem;
  row-gap: 1.9375rem;
`;

export const ProductItem = styled.li``;
