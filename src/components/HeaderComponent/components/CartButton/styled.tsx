import styled from "styled-components";

export const CardButton = styled.button`
  cursor: pointer;

  display: flex;
  gap: 1rem;
  height: 2.8125rem;

  padding: 0.875rem 0.9375rem;
  border: 0;
  border-radius: 0.5rem;

  & > span {
    font-size: 1.125rem;
    font-weight: 700;
  }
`;
