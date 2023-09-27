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
        

        {/* <NavBarItem href='/features' className='navbar-item'>
            Features
          </NavBarItem> */}

        {/* <NavBarItem href='/team' className='navbar-item'>
            Team
          </NavBarItem>

          <NavBarItem href='/blog' className='navbar-item'>
            Blog
          </NavBarItem> */}

        <Button href='/github' classname='navbar-item'>
          Github
        </Button>

      </SplashNavBar>


    </Container>

  );
}

export default Splash;
