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
  display: flex; 
  flex direction: row;
  background-color: rgb(255, 255, 255); 
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
`;

export const Team = styled.a` 
  position: absolute;
  margin-left: 30%;
  align-self: center;
  font-size: 30px;
`;

export const Blog = styled.a` 
  position: absolute;
  margin-left: 43%;
  align-self: center;
  font-size: 30px;
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
  background-color: ${props => props.variant === "primary" ? "#337CCF" : "#279EFF"};
  border: #000030 ${props => props.variant === "primary" ? "0" : "1"}px solid;
  border-radius: 11px;
  color: #000030;
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
background-color: rgb(202, 243, 255);
display: flex;
height: 100%;
width: 100%;
`;
