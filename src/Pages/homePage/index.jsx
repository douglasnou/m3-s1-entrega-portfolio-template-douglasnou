import { BannerSection } from "../../components/BannerSection"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { ProjectSection } from "../../components/ProjectSection"
import { TechSection } from "../../components/TechSection"
import { AboutMeSection } from "../../components/aboutMeSection"

export const HomePage = ()=>{
    return(
        <>
            <Header />
            <main>
                <BannerSection />
                <AboutMeSection />
                <TechSection />
                <ProjectSection />
            </main>
            <Footer/>
        </>
    )
}