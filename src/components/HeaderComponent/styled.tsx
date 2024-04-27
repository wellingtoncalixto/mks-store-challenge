import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 30%;
  background-color: #0f52ba;
  padding: 1.81rem 5.5rem 1.81rem 4.06rem;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 600;

  & > span {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.1875rem;
  }
`;
