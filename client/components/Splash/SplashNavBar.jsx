import React from 'react';
// import Logo from '../../assets/logo.png';
import '../../stylesheets/splash.css'
import { SplashNavBar, NavBarItem, Button, Container, SplashLogo, Features, Team, Blog } from './SplashStyled.jsx';

function Splash() {
  return (

    <Container>

      <SplashLogo src="logo.png"></SplashLogo>

      <SplashNavBar>

        <Features href='#features2'>
          Features
        </Features>

        <Team href='#team2'>
          Team
        </Team>

        <Blog href='https://medium.com/@logkaptain/charting-the-data-flow-visualizing-kubernetes-cluster-logs-53029b82bcdb' target="_blank">
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
