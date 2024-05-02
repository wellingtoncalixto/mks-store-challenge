import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const SkeletonProductsList = styled.ul`
  display: grid;
  height: max-content;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.4025rem;
  row-gap: 1.9375rem;
`;

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
`;

export const SkeletonImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SkeletonProductInformationsContainer = styled.div`
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

export const SkeletonProductName = styled.h1`
  grid-area: name;
  width: 100%;
  min-height: 2.375rem;

  font-size: 1rem;
`;

export const SkeletonProductPrice = styled.span`
  grid-area: price;

  width: 50px;
  background-color: #373737;
  padding: 0.25rem 0.4375rem;
  border-radius: 0.3125rem;
`;

export const SkeletonProductDescription = styled.p`
  grid-area: description;
  display: grid;
  width: 100%;
`;

export const SkeletonBuyButton = styled(Skeleton)`
  position: absolute;
  left: 0;
  bottom: -6px;

  height: 2rem;
  width: 100%;

  border: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: #0f52ba;
`;
