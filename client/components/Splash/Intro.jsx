import React from 'react';
import styled from 'styled-components';
import { IntroContainer } from './SplashStyled.jsx';

function Intro() {
  return (
    <IntroContainer>
    <div> 
    <p id='feature-par'>
      Feature 1
    </p>
    </div>
    <div>
    <img src="test.gif" id="feature-demo"></img> 
    </div>
    </IntroContainer>
  );
}

export default Intro;