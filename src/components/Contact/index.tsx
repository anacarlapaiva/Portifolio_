import { useState } from "react";
import { TitlePage } from "../../styles/globalStyles"
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "../Button";
import { ButtonContainer, ContainerElement, FormElement, InputElement, ParagraphItem, TextAreaElement } from "./styles"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xnqkvbkp");
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!message) {
      toast.error('Por favor, digite uma mensagem antes de enviar.');
      return;
    }

    if (state.succeeded) {
      toast.success('Obrigada por entrar em contato!');
      setMessage('');
    } else {
      toast.error('Oops! Parece que ocorreu um erro.');
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <ContainerElement id="contact">
      <TitlePage>Contato</TitlePage>
      <ParagraphItem>Fique à vontade para entrar em contato comigo. Será um prazer atendê-lo. <br />Disponível todos os dias.</ParagraphItem>

      <FormElement onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <InputElement
          id="email"
          type="email"
          name="email"
          value="acpaiva99@outlook.com"
          readOnly
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Envie sua mensagem!
        </label>
        <TextAreaElement
          cols={5}
          id="message"
          name="message"
          placeholder="Digite sua mensagem aqui!"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          onKeyDown={handleKeyDown}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <ButtonContainer>
          <Button type="button" onClick={sendMessage} disabled={state.submitting}>
            Submit
          </Button>
        </ButtonContainer>
      </FormElement>
      <ToastContainer />
    </ContainerElement>
  );
}
