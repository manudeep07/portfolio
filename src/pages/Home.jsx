import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education';

const Home = () => {
    return (
        <div className="bg-background min-h-screen text-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certifications />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
