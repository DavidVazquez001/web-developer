import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Practices from './components/Practices';
import SoftSkills from './components/SoftSkills';
import Technologies from './components/Technologies';

const App = () => {
    return (
        <div className="selectionbg-cyan-300 overflow-x-hidden text-neutral-100 antialiased selection:text-purple-700">
            <div className="flixed top-0 -z-10 h-full w-full">
                <div className="bg-custom-background fixed top-0 z-[-2] min-h-screen w-screen"></div>
            </div>

            <div className="container mx-auto px-8">
                <Navbar />

                <div className="pt-[104px]">
                    <Hero />
                    <Contact />
                    <About />
                    <Technologies />
                    <SoftSkills />
                    <Experience />
                    <Practices />
                </div>
            </div>
        </div>
    );
};

export default App;
