import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 85%;
  padding: var(--gap) var(--gap-xl);
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

    a{
      color: var(--white);
    }
  }
`;

export const Logo = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--soft-white);
`;