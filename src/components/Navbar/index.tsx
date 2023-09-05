import { Logo, Nav, Ul } from './styles'

export const Navbar = () => {
    return (
        <Nav>
            <Logo>AcPaiva.</Logo>

            <Ul>
                <li>
                    <a href="#">Início</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
            </Ul>
        </Nav>
    )
}
