import { Logo, Nav, Ul } from './styles'

export const Navbar = () => {
    return (
        <Nav>
            <Logo>AcPaiva.</Logo>

            <Ul>
                <li>
                    <a>Início</a>
                </li>
                <li>
                    <a>Skills</a>
                </li>
                <li>
                    <a>Projetos</a>
                </li>
                <li>
                    <a>Contato</a>
                </li>
            </Ul>
        </Nav>
    )
}
