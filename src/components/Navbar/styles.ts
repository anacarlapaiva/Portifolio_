import styled from "styled-components";
import { MenuOutline } from '../../styles/icons'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    padding: var(--gap) var(--gap-xl);

    @media screen and (max-width: 1024px){
       padding: var(--gap);
       width: 92%;
    }
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 5rem;

    li {
        text-decoration: none;
        width: 100%;

        a {
            color: var(--white);
        }
    }
`;

export const Logo = styled.span`
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--soft-white);
`;

export const MenuIcon = styled(MenuOutline)`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`;

export const MobileMenu = styled.div`
    position: absolute;
    top: 70px;
    right: 0;
    background-color: var(--black);
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            text-decoration: none;
            a {
                color: var(--white);
                padding: 10px 20px;
                display: block;
                text-align: center;
                text-decoration: none;
                &:hover {
                    background-color: var(--dark-gray);
                }
            }
        }
    }
`;