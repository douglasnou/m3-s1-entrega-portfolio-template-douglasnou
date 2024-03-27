import { BannerSection } from '../../../components/BannerSection'
import { ProjectSection } from '../../../components/ProjectSection'
import { TechSection } from '../../../components/TechSection'
import { AboutMeSection } from '../../../components/aboutMeSection'

export const Sections = ()=>{
    return(
        <>
            <BannerSection />
            <AboutMeSection />
            <TechSection />
            <ProjectSection />
        </>
    )
}