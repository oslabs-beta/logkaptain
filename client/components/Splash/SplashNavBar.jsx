import React from 'react';
import Logo from '../../assets/logo.png';
import { SplashNavBar, NavBarItem, Button } from './SplashStyled.jsx';

function SplashNavBar() {
  return (
    <div>
      <Container>
        <div className='logo'>
          <a href='/' className='logo' THIS IS THE LOGO></a>
        </div>

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
      </Container>
    </div>
  );
}

export default SplashNavBar;
