import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e0eaf6;  
  display: flex;   
  justify-content: flex-end
  height: 100%;
  width: 100%;
`;

export const SplashNavBar = styled.div` 
  display: flex;    
  align-items: end
  justify-content: center;
  padding-left: 925px
`;

export const NavBarItem = styled.a` 
  display: flex;    
  justify-self: flex-end;
  align-items: center;
  margin-left: 25px;
  text-decoration:inherit;
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
  position: absolute;
  margin-left: 295px;
  &:hover {
    background-color: ${props => props.variant === "primary" ? "#279EFF" : "#337CCF"};
  }
  &:disabled {
    background-color: ${props => props.variant === "primary" ? "#AFEDE7" : "#CDCBB1"};
    cursor: not-allowed;
  }
`;

export const IntroContainer = styled.div` 
background-color: lightblue;
display: flex;   
justify-content: flex-end
height: 2000px;
width: 100%;
`;
