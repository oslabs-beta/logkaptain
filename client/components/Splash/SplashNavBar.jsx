import React from 'react';
// import Logo from '../../assets/logo.png';
import '../../stylesheets/splash.css'
import { SplashNavBar, NavBarItem, Button, Container } from './SplashStyled.jsx';

function Splash() {
  return (
    
      <Container>
        
        <div>
        <img src="logo.png" id="splash-logo"></img> 
        </div>

        <div>
        <SplashNavBar>
          <NavBarItem href='/features' className='navbar-item'>
            Features
          </NavBarItem>
          <NavBarItem href='/team' className='navbar-item'>
            Team
          </NavBarItem>
          <NavBarItem href='/blog' className='navbar-item'>
            Blog
          </NavBarItem>
          <Button href='/github' classname='navbar-item'>
            Github
          </Button>
        </SplashNavBar>
        </div>

      </Container>
    
  );
}

export default Splash;
