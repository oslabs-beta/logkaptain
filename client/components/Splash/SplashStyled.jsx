import styled from 'styled-components';



// SPLASH PAGE DIV
export const SplashPage = styled.div`
  height: 100%;
  width: 100%;
`;


// LOGO IMAGE
export const SplashLogo = styled.img`
  margin-top: 12px;
  margin-left: 10px;
  height: 80px;
  width: 80px;
  position: absolute;
`;


// SPLASH PAGE NAV BAR
export const Container = styled.div`
  position: fixed;
  display: flex; 
  flex direction: row;
  background-color: rgb(31, 32, 33); 
  justify-content: flex-start; 
  width: 100%;
  height: 98px;

`;



export const SplashNavBar = styled.div` 
  display: flex;    
  margin-left: 550px;
  align-items: flex-end
  height: 10px
  width: 100%;
`;

export const Features = styled.a` 
  position: absolute;
  align-self: center;
  margin-left: 13%;
  font-size: 30px;
  color: white;
  &:hover {
    color: rgb(159, 200, 238)
  }
`;

export const Team = styled.a` 
  position: absolute;
  margin-left: 30%;
  align-self: center;
  font-size: 30px;
  color: white;
  &:hover {
    color: rgb(159, 200, 238)
  }
`;

export const Blog = styled.a` 
  position: absolute;
  margin-left: 43%;
  align-self: center;
  font-size: 30px;
  color: white;
  &:hover {
    color: rgb(159, 200, 238)
  }
`;

export const NavBarItem = styled.a` 
  display: flex;    
  align-items: center;
  margin-bottom: 10px
  margin-left: 20px;
  margin-right: 80px;
  text-transform: uppercase;
  outline: none;
  font-family: 'Inter', sans-serif;
`;

export const Button = styled.button`
  background-color: ${props => props.variant === "primary" ? "#F4F7FA" : "#279EFF"};
  border: #64B0F7 ${props => props.variant === "primary" ? "0" : "1"}px solid;
  border-radius: 11px;
  color: white;
  cursor: pointer;  
  font-size: 16px;  
  height: 45px;
  align-self: center;
  width: 108px;
  margin-left: 53%;
   position: absolute;
  &:hover {
    background-color: ${props => props.variant === "primary" ? "#279EFF" : "#337CCF"};
  }
  &:disabled {
    background-color: ${props => props.variant === "primary" ? "#AFEDE7" : "#CDCBB1"};
    cursor: not-allowed;
  }
`;

// SPLASH PAGE INTRO 
export const IntroContainer = styled.div` 
background: offwhite;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
width: 100%;
padding: 8% 0%;
box-shadow: 0px 1px 2px 0px,
    0px 2px 6px 2px;
`;

export const TitleIntro = styled.h1`
  margin-top: 4%;
  margin-bottom: 2%;
  font-family: "Montserrat", sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

export const Introduction = styled.p`
  margin-top: .5%;
  font-family: "Montserrat", sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const IntroButton = styled.a`
margin-top: .25%;


background-color: ${props => props.variant === "primary" ? "#9FC8EE" : "#279EFF"};
border: #64B0F7 ${props => props.variant === "primary" ? "0" : "1"}px solid;
border-radius: 11px;
color: white;
cursor: pointer; 
font-family: "Montserrat", sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; 
font-size: 16px;  
height: 40px;
width: 175px;
&:hover {
  background-color: ${props => props.variant === "primary" ? "#9FC8EE" : "#279EFF"};
  }
  text-align:center;
  padding-top:1em
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  padding: 2em;
  margin-top: 1%;
`;

export const ContentFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  background: radial-gradient(circle at 50.1% 40.8%,
    rgb(159, 200, 238) 0%,
    rgb(10, 74, 133) 99.4%);
`;

