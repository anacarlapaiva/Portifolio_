import styled, { css } from "styled-components";
import { Container } from '../../styles/globalStyles'
import { EmailOutline, GithubOutline, LinkedinOutline } from '../../styles/icons';

export const ContentElement = styled(Container)`
    padding: 5rem var(--gap-xl);
    background-color: var(--soft-black);
`;

export const ProfileImage = styled.img`
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    border: 10px solid var(--blue);
    border-radius: 50%;
    margin-top: 1rem;
`;

export const Title = styled.h2`
    font-size: 1.1rem;
    color: var(--blue);
    font-weight: 400;
    text-transform: uppercase;

    @media screen and (max-width: 1024px){
        font-size: .8rem;
    }
`;

export const ContentMidias = styled.div`
    width: 50%;

    div{
        display: flex;
        justify-content: center;
    }

    
    @media screen and (max-width: 1024px) {
        width: 100%;
        display: flex;
        align-items: center;
    }
`;

export const ContentAbout = styled.div`
    font-size: 1rem;
    color: var(--white);

    @media screen and (max-width: 1024px) {
        text-align: center;
    }

    span {
        text-transform: uppercase;
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-weight: 700;
    }

    p{
        font-weight: 400;
        line-height: 2rem;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    margin: var(--gap);
    flex: 1;
`;

const Icon = css`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    margin: .5rem;
    color: var(--white);

    :last-child {
        margin: 0;
    }

    :visited {
        color: var(--white);
    }
`;

export const EmailIcon = styled(EmailOutline)`
    ${Icon}
`;
export const GithubIcon = styled(GithubOutline)`
    ${Icon}
`;
export const LinkedinIcon = styled(LinkedinOutline)`
    ${Icon}
`;