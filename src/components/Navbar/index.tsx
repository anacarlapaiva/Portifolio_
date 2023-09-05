import { useState, useEffect } from 'react';
import { Logo, MenuIcon, Nav, Ul, MobileMenu } from './styles';

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Nav>
            <Logo>AcPaiva.</Logo>

            {windowWidth > 1024 ? (
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
            ) : (
                <>
                    <MenuIcon onClick={toggleMenu} />
                    {showMenu && (
                        <MobileMenu>
                            <ul>
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
                            </ul>
                        </MobileMenu>
                    )}
                </>
            )}
        </Nav>
    );
}
