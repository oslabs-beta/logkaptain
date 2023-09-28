import React from "react";
import SplashNav from "./SplashNavBar";
import Intro from "./Intro";
import '../../stylesheets/splash.css'
import { SplashTeam } from './SplashTeam.jsx';
import '../../stylesheets/splashteam.css'

import Caro from '../../Images/Caro.png';
import Chris from '../../Images/Chris.png';
import Gabby from '../../Images/Gabby.png';
import Nelson from '../../Images/Nelson.png';
import Sharmarke from '../../Images/Sharmarke.png';

import { ContentFlexContainer, FlexRow, SplashPage } from './SplashStyled.jsx';


const Splash = () => {

  return (

    <SplashPage>
      <SplashNav />
      <Intro />
      {/* <Features /> */}
      <ContentFlexContainer>
      <FlexRow>
      <div className="gif-text">
          <h2>Secure Login</h2>
          <p>
          Your credentials will be safe with proper authentication.
          </p>
          </div>
          <div className="gif"><img src="../client/assets/Signup.gif"></img></div>
        </FlexRow>
        <FlexRow>
          <div className="gif"><img src="../client/assets/RetrieveLogs.gif"></img></div>
            <div className="gif-text">
          <h2>Retrieve Logs</h2>
          <p>
          Access the latest logs
            from all your Kubernetes pods.
          </p>
          </div>
        </FlexRow>
        <FlexRow>
        <div className="gif-text">
          <h2>Search/Filter Functionality</h2>
          <p>
            Utilize the search bar to find specific log
            information you're looking for.
          </p>
          </div>
          <div className="gif"><img src="../client/assets/Search.gif"></img></div>
          
        </FlexRow>
        <FlexRow>
          <div className="gif"><img src="../client/assets/Jira.gif"></img></div>
            <div className="gif-text">
          <h2>Create Jira</h2>
          <p>
            Create a Jira ticket from LogKaptain
            to streamline issue tracking. </p>
          </div>
        </FlexRow>
        <FlexRow>
          <div className="gif-text">
          <h2>Export Logs</h2>
          <p>
            Export your queried logs to a CSV.
          </p>
          </div>
          
          <div className="gif"><img src="../client/assets/CSV.gif"></img></div>
        </FlexRow>
      </ContentFlexContainer>

      <ContentFlexContainer >
        <h2 id="teamRow" >The Team</h2>
        <div className="teamPics">
       
        <SplashTeam
          imgSource={Caro}
          imgAlt="Picture"
          name="Carolina Bonitatis"
          linkedin="https://www.linkedin.com/in/carolina-bonitatis"
          github="https://github.com/carobonita"
        />
        <SplashTeam 
          imgSource={Chris}
          imgAlt="Picture"
          name="Christopher Le"
          linkedin="https://www.linkedin.com/in/chrisle96"
          github="https://github.com/dragblas"
        />
        <SplashTeam 
          imgSource={Gabby}
          imgAlt="Picture"
          name="Gabriela Passentino"
          linkedin="https://www.linkedin.com/in/gabriela-passentino/"
          github="https://github.com/gpassentino"
        />
        <SplashTeam 
          imgSource={Nelson}
          imgAlt="Picture"
          name="Micah Nelson"
          linkedin="https://www.linkedin.com/in/micahanelson"
          github="https://github.com/Mnelson98"
        />
        <SplashTeam 
          imgSource={Sharmarke}
          imgAlt="Picture"
          name="Sharmarke Youssouf"
          linkedin="https://www.linkedin.com/in/sharmarkeyoussouf/"
          github="https://github.com/sharmarkeGit"
        />
    
        </div>   
      </ContentFlexContainer> 
    </SplashPage>

  )
}

export default Splash;