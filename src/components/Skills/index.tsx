import { AntdesignIcon, JavascriptIcon, ListSkills, NativescriptIcon, ReactLogoIcon, SkillsContent, TailwindcssIcon, TypescriptIcon } from './styles'
import { SkillItem } from '../SkillsItem'
import { TitlePage } from '../../styles/globalStyles'

export const Skills = () => {
    return (
        <SkillsContent id='skills'>
            <ListSkills>
                <TitlePage>skills</TitlePage>
                <SkillItem icon={<JavascriptIcon />} percentage="80%" />
                <SkillItem icon={<ReactLogoIcon />} percentage="90%" />
                <SkillItem icon={<TypescriptIcon />} percentage="75%" />
                <SkillItem icon={<AntdesignIcon />} percentage="70%" />
                <SkillItem icon={<NativescriptIcon />} percentage="60%" />
                <SkillItem icon={<TailwindcssIcon />} percentage="85%" />
            </ListSkills>
        </SkillsContent>
    )
}
