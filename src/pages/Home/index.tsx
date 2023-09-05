import { About } from '../../components/About'
import { Banner } from '../../components/Banner'
import { Contact } from '../../components/Contact'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import { Skills } from '../../components/Skills'

export const Home = () => {
    return (
        <div>
            <Navbar />

            <main>
                <Banner />
                <About />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}
