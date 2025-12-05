import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Employers from '../components/Employers/Employers'
import Individuals from '../components/Individuals/Individuals'
import Resources from '../components/Resources/Resources'
import Services from '../components/Services/Services'
import CTA from '../components/CTA/CTA'
import DownloadGuide from '../components/DownloadGuide/DownloadGuide'

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Employers />
            <Individuals />
            <Resources />
            <Services />
            <CTA />
            <DownloadGuide />
        </>
    )
}

export default Home
