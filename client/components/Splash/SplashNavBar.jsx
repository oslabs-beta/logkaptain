import React from 'react';
// import Logo from '../../assets/logo.png';
import '../../stylesheets/splash.css'
import { SplashNavBar, NavBarItem, Button, Container, SplashLogo, Features, Team, Blog } from './SplashStyled.jsx';

function Splash() {
  return (

    <Container>

      <SplashLogo src="logo.png"></SplashLogo>

      <SplashNavBar>

        <Features>
          Features
        </Features>

        <Team>
          Team
        </Team>

        <Blog>
          Blog
        </Blog>

        <Button href='/github' className='navbar-item'>
          Github
        </Button>

      </SplashNavBar>

    </Container>

  );
}

export default Splash;
