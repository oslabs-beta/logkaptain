import React from "react";
import SplashNav from "./SplashNavBar";
import Intro from "./Intro";
import { SplashPage } from './SplashStyled.jsx';
// import Team from "./Team.jsx";
// import SplashStyled from './SplashStyled.jsx'



const Splash = () => {
  
  return (
  
      <SplashPage>
        <SplashNav />
        <Intro />
        {/* <Features /> */}
        {/* <Team /> */}
      </SplashPage>
    
  )
}

export default Splash;