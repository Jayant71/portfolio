import React from 'react';
import Header from '../../components/header';
import AboutMe from '../../components/aboutme';
import Education from '../../components/education';
import Experience from '../../components/experience';
import Skills from '../../components/skills';
import Activities from '../../components/activities';
import Hobbies from '../../components/hobbies';
import Landing from '../../components/landing';

import './homepage.css';

function Home() {
    return (
        <div className="App">
      <Header />
      <Landing />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Activities />
      <Hobbies />
    </div>
    );
}

export default Home;