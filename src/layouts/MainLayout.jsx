import React from 'react';
import Home from '../pages/Home';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Services from '../components/Services';

const MainLayout = () => {
    return (
        <div className='w-full overflow-x-hidden'>
            <Home/>
            <div className='pt-16 md:pt-20'>
                <Hero/>
            </div>
            <div className="flex flex-col gap-10 md:gap-20">
                <About/>
                <Skills/>
                <Education/>
                <Projects/>
                <Services/>
                <Contact/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default MainLayout;