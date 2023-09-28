import React from 'react';
import styled from 'styled-components';
import { IntroContainer, Introduction, IntroButton, TitleIntro } from './SplashStyled.jsx';
// import { SignUp } from '../Auth/signUp.jsx';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <IntroContainer > 

      <TitleIntro>
        Introducing LogKaptain
      </TitleIntro>

      <Introduction>
        An open source product that provides developers an easy way to aggregate and filter logs from Kubernetes Pods.
      </Introduction>

      <IntroButton as={Link} to="/login"> Get Started </IntroButton>

    </IntroContainer>
  );
}

export default Intro;