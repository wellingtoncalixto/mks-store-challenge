import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  ProductCardContainer,
  SkeletonProductsList,
  SkeletonBuyButton,
  SkeletonImgContainer,
  SkeletonProductDescription,
  SkeletonProductInformationsContainer,
  SkeletonProductName,
  SkeletonProductPrice,
} from "./styled";

const SkeletonProductLoadingComponent = () => {
  const rows = [];
  for (let index = 0; index < 8; index++) {
    rows.push(
      <li>
        <ProductCardContainer>
          <SkeletonImgContainer>
            <Skeleton height={"138px"} width={"100px"} />
          </SkeletonImgContainer>
          <SkeletonProductInformationsContainer>
            <SkeletonProductName>
              <Skeleton count={2} />
            </SkeletonProductName>
            <SkeletonProductPrice>
              <Skeleton baseColor="#373737" />
            </SkeletonProductPrice>
            <SkeletonProductDescription>
              <Skeleton count={2} />
            </SkeletonProductDescription>
          </SkeletonProductInformationsContainer>
          <SkeletonBuyButton baseColor="#0f52ba" />
        </ProductCardContainer>
      </li>
    );
  }

  return <SkeletonProductsList>{rows}</SkeletonProductsList>;
};

export default SkeletonProductLoadingComponent;
