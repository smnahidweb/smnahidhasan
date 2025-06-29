import React from 'react';
import Hero from '../Components/Hero';

import Education from './Education';

import Skills from './Skills';
import Contact from './Contact';
import About from './About';
import ProjectCard from './Projects';
import Projects from './Projects';

const Home = () => {
    return (
        <div className=''>
        <div>
           <Hero></Hero>
        </div>

       
        <About></About>
      
        <div>
            <Education></Education>
        </div>
        <div>
            <Skills></Skills>
        </div>
        <div>
           <Projects></Projects>
        </div>
        
        <div>
            <Contact></Contact>
        </div>
        </div>
    );
};

export default Home;