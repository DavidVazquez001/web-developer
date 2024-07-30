import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Practices from '../components/Practices';

const Portfolio = () => {
    return (
        <div className="selectionbg-cyan-300 overflow-x-hidden text-neutral-100 antialiased selection:text-yellow-300">
            <div className="flixed top-0 -z-10 h-full w-full">
                <div className="fixed top-0 z-[-2] min-h-screen w-screen bg-custom-background"></div>
            </div>

            <div className="container mx-auto px-8">
                <Navbar />

                <div className="pt-[104px]">
                    <Projects />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
