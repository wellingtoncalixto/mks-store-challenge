import React from "react";
import { CloseButton } from "./styled";
import { CloseButtonProps } from "./interfaces/CloseButtonInterfaces";

const CloseButtonComponent = ({
  onClick,
  fontSize,
  size,
  position,
}: CloseButtonProps) => {
  return (
    <CloseButton
      onClick={onClick}
      fontSize={fontSize}
      size={size}
      position={position}
    >
      X
    </CloseButton>
  );
};

export default CloseButtonComponent;
