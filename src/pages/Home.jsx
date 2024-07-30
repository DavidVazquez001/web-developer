import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import About from '../components/About';
import Education from '../components/Education';
import Technologies from '../components/Technologies';
import Experience from '../components/Experience';
import Practices from '../components/Practices';
import SoftSkills from '../components/SoftSkills';

const Home = () => {
    return (
        <div className="selectionbg-cyan-300 overflow-x-hidden text-neutral-100 antialiased selection:text-yellow-300">
            <div className="flixed top-0 -z-10 h-full w-full">
                <div className="fixed top-0 z-[-2] min-h-screen w-screen bg-custom-background"></div>
            </div>

            <div className="container mx-auto px-8">
                <Navbar />

                <div className="pt-[104px]">
                    <Hero />
                    <Contact />
                    <About />
                    <Education />
                    <Technologies />
                    <Experience />
                    <Practices />
                    <SoftSkills />
                </div>
            </div>
        </div>
    );
};

export default Home;
