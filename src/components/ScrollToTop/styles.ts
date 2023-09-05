import styled from "styled-components";
import { ArrowUpOutline } from "../../styles/icons";

interface IButtonProps {
  isVisible: boolean;
}

export const ScrollToTopButtonElement = styled.button<IButtonProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: var(--blue);
  color: var(--white);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageButton = styled(ArrowUpOutline)`
  width: 2rem;
  height: 2rem;

  @media screen and (max-width: 500px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;