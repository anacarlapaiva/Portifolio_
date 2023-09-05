import styled, { css } from "styled-components";
import { Tailwindcss, Css3, Javascript, ReactLogo, Typescript, Antdesign, Nativescript } from '../../styles/icons'

export const SkillsContent = styled.section`
  display: grid;
  padding: var(--gap-xl);
  gap: var(--gap);
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px){
    padding: var(--gap-s);
  }
`;

export const ListSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: space-between; 
  > * {
    flex-grow: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const Icon = css`
    width: 8rem;
    height: 8rem;
    transition: .5s ease-in-out;

    :hover {
        opacity: 70%;
    }

    @media screen and (max-width: 1024px){
       width: 5rem;
       height: 5rem;
    }
`;

export const CSSIcon = styled(Css3)`
    ${Icon}
`;
export const TailwindcssIcon = styled(Tailwindcss)`
    ${Icon}
`;
export const JavascriptIcon = styled(Javascript)`
    ${Icon}
`;
export const ReactLogoIcon = styled(ReactLogo)`
    ${Icon}
`;
export const TypescriptIcon = styled(Typescript)`
    ${Icon}
`;
export const AntdesignIcon = styled(Antdesign)`
    ${Icon}
`;
export const NativescriptIcon = styled(Nativescript)`
    ${Icon}
`;