import styled from 'styled-components';

export const ContentInfo = styled.div`
    display: block;
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: 60%;
    object-fit: contain;

    @media screen and (max-width: 1024px){
        width: 50%;
    }
`;

export const Title = styled.h1`
    font-weight: 900;
    color: var(--white);
    font-size: 4rem;

    @media screen and (max-width: 1024px){
        font-size: 2rem;
        text-align: center;
    }
`;

export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 1.1rem;
    margin-top: var(--gap);

    @media screen and (max-width: 1024px){
        font-size: 1rem;
        text-align: center;
    }
`;

export const ContentButton = styled.div`
    @media screen and (max-width: 1024px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
`;
