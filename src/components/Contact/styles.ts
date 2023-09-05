import styled from 'styled-components';
import { Container } from '../../styles/globalStyles';

export const ContainerElement = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--gap-xl);

  @media screen and (max-width: 1024px){
    padding: 4rem var(--gap-s) 1rem;
  }
`;

export const ParagraphItem = styled.p`
    font-size: 1rem;
    color: var(--white);
    text-align: center;
`;

export const FormElement = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 50%;

    label {
        margin: .5rem 0 1rem;
    }

    @media screen and (max-width: 1024px) {
        width: 85%;
    }
`;

export const InputElement = styled.input`
    display: flex;
    width: 100%;
    padding: var(--gap-s);
    border-radius: var(--gap);
    border: 0;
    font-family: sans-serif;
    font-size: 1.1rem;
    margin-bottom: 1rem;
`;

export const TextAreaElement = styled.textarea`
    width: 100%;
    height: 5rem;
    margin-bottom: 1rem;
    padding: var(--gap-s);
    border-radius: var(--gap);
    font-family: sans-serif;
    font-size: 1.1rem;
    border: 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;