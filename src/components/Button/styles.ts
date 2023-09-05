import styled from "styled-components";

export const ButtonElement = styled.button`
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 18px;
  color: var(--blue);
  border: 2px solid var(--blue);
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 100%; 
    height: 100%; 
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: var(--blue);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  &:hover::before {
    scale: 1; 
  }

  &:hover {
    color: var(--soft-black);
    scale: 1.1;
  }

  &:active {
    scale: 1;
  }
`;
