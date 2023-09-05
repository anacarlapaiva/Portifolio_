import styled, { css } from "styled-components";

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--soft-black);
  border-radius: 4px;
  margin-top: 1rem;
`;

interface IProgressBarProps {
    actived: string;
}

export const ProgressBarActived = styled.div<IProgressBarProps>`
  height: 8px;
  background-color: var(--blue);
  border-radius: 4px;
  ${({ actived }) => css`
    width: ${actived};
  `}
`;