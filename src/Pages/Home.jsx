import React from 'react';


import Education from './EducationTimeline';

import Skills from './Skills';
import Contact from './Contact';
import About from './About';
import ProjectCard from './Projects';
import Projects from './Projects';
import Hero from '../Components/Hero';
import EducationTimeline from './EducationTimeline';
import Awards from '../Components/Awards';



const Home = () => {
    return (
        <div className=''>
        <div>
           <Hero></Hero>
        </div>

       
        <About></About>
      
        <div>
            <EducationTimeline></EducationTimeline>
        </div>
        <div>
            <Skills></Skills>
        </div>
        <div>
           <Projects></Projects>
        </div>
        
        <div>
            <Awards></Awards>
        </div>

        <div>
            <Contact></Contact>
        </div>
        </div>
    );
};

export default Home;