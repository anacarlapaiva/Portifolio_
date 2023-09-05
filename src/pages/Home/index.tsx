import { About } from '../../components/About'
import { Banner } from '../../components/Banner'
import { Contact } from '../../components/Contact'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import { ScrollToTop } from '../../components/ScrollToTop'
import { Skills } from '../../components/Skills'
import { GlobalContent } from '../../styles/globalStyles'

export const Home = () => {
    return (
        <GlobalContent>
            <Navbar />

            <main>
                <Banner />
                <About />
                <Skills />
                <Contact />
            </main>

            <Footer />

            <ScrollToTop />
        </GlobalContent>
    )
}
