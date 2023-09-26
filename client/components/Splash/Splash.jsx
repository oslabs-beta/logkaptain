import React from "react";
import SplashNav from "./SplashNavBar";
import Intro from "./Intro";
// import Team from "./Team.jsx";
// import SplashStyled from './SplashStyled.jsx'



const Splash = () => {
  
  return (
    <>
      <div className="splash-page">
        <SplashNav />
        <Intro />
        {/* <Features /> */}
        {/* <Team /> */}
      </div>
    </>
  )
}

export default Splash;