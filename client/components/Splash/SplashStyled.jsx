import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e0eaf6;  
  display: flex;    
  height: 100vh;
  width: 100vw;
`;

export const SplashNavBar = styled.div` 
  display: flex;    
  flex-direction: row;
`;

export const NavBarItem = styled.a` 
  display: flex;    
  justify-content: center;
  align-items: center;
  margin-left: 30px;
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
  margin: 16px 0;
  width: 108px;
  &:hover {
    background-color: ${props => props.variant === "primary" ? "#279EFF" : "#337CCF"};
  }
  &:disabled {
    background-color: ${props => props.variant === "primary" ? "#AFEDE7" : "#CDCBB1"};
    cursor: not-allowed;
  }
`;