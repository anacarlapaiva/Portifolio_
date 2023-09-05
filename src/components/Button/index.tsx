import React from 'react'
import { ButtonElement } from './styles';

type IButtonProps = React.ComponentProps<'button'> & {
    children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
    return (
        <ButtonElement {...rest}>{children}</ButtonElement>
    )
}
