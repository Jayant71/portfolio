import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import './landingpage.css';
import Home from '../homepage/homepage';


function LandingPage() {
    return (
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="animation_layer parallax" id="layer1">
          <Home />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.99} speed={0.75}>
        <div className="animation_layer parallax" id="layer2"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.06} speed={1}>
        <div className="animation_layer parallax" id="layer3"></div>
      </ParallaxLayer>
    </Parallax>
    );
}

export default LandingPage;