import styled from 'styled-components';

// SPLASH PAGE NAV BAR
export const Container = styled.div`
  display: flex; 
  flex direction: row;
  background-color: #e0eaf6;  
  height: 100px;
`;

export const SplashNavBar = styled.div` 
  display: flex;    
  margin-left: 800px;
  align-items: flex-end
  justify-content: flex-end;
  width: 100%;
`;

export const NavBarItem = styled.a` 
  display: flex;    
  align-items: center;
  margin-top: 35px;
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
  margin: 20px;
  width: 108px;
  position: fixed;
  margin-left: 420px;
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
