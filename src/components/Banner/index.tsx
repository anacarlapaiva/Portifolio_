import { Container } from "../../styles/globalStyles"
import BannerImg from '../../assets/svg/code.svg'
import curriculoPdf from '../../assets/pdf/curriculo.pdf'
import { ContentInfo, ImageBanner, Subtitle, Title } from "./styles"
import { Button } from "../Button"

export const Banner = () => {
    return (
        <Container>
            <ContentInfo>
                <Title>Desenvolvedora <br />Front-end</Title>
                <Subtitle>
                    Oi! Sou a Ana! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                    Ipsa sint quo qui delectus quibusdam distinctio soluta,
                    molestiae rem autem ab est ipsum dolorem harum excepturi
                    facere voluptatibus quaerat veniam magnam.
                </Subtitle>

                <a
                    href={curriculoPdf}
                    download="anacarla-curriculo-pdf"
                    target="_blank"
                    rel="noreferrer">
                    <Button>Download currículo</Button>
                </a>
            </ContentInfo>

            <ImageBanner src={BannerImg} alt="Banner image" />
        </Container>
    )
}
