import Profile from '../../assets/image/profile.png'

import {
    ContentAbout,
    ContentElement,
    ContentMidias,
    EmailIcon,
    GithubIcon,
    LinkedinIcon,
    ProfileImage,
    SocialMedia,
    Title
} from './styles'

export const About = () => {
    return (
        <ContentElement id='about'>
            <ContentMidias>
                <Title>contate-me agora!</Title>
                <div>
                    <ProfileImage src={Profile} alt="Profile image of Ana Carla" />
                    <SocialMedia>
                        <a href='mailto:acpaiva99@outlook.com' target="_blank">
                            <EmailIcon />
                        </a>
                        <a href='https://github.com/anacarlapaiva/' target="_blank" >
                            <GithubIcon />
                        </a>
                        <a href='https://www.linkedin.com/in/anacarlapaiva/' target="_blank">
                            <LinkedinIcon />
                        </a>
                    </SocialMedia>

                </div>

            </ContentMidias>

            <ContentAbout>
                <span>sobre</span>
                <h3>Conheça um pouco sobre mim</h3>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Magnam adipisci odio distinctio quia quibusdam
                    exercitationem optio? Odit iure quo repellat
                    cumque, animi totam officiis alias mollitia unde
                    laudantium itaque facilis?
                </p>
            </ContentAbout>
        </ContentElement>
    )
}
