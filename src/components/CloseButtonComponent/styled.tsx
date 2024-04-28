import styled from "styled-components";
import { CloseButtonProps } from "./interfaces/CloseButtonInterfaces";

export const CloseButton = styled.button<CloseButtonProps>`
  cursor: pointer;
  display: flex;

  position: ${(props) => (props.position ? props.position : "initial")};
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.position ? props.position : " 2.375rem")};
  height: ${(props) => (props.size ? props.size : "2.375rem")};

  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.75rem")};
  font-weight: 400;

  color: #ffffff;
  background-color: #000000;
  border: 0;
  border-radius: 50%;
`;
