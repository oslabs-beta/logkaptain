import styled from 'styled-components';
import backdropImg from '../../assets/BoatBackground.png';

export const Container = styled.div`
  align-items: center;
  background-color: #e0eaf6;  
  display: flex;    
  height: 100vh;
  width: 100vw;
`;

export const Backdrop = styled.div`
  align-items: center;
  background-image: url(${backdropImg});
  background-size: cover;
  background-repeat: no-repeat;  
  border-radius: 10px;
  box-shadow: 0 0 8px 8px #e0eaf6 inset;
  display: flex;  
  height: 1290px;
  margin: auto;
  width: 1509px;  
`;

export const Form = styled.form`
  display: flex;
  background-color: #c3cdda;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  width: 20%;
  height: 300px;
  margin: auto;
`;

export const Input = styled.input`
  border: lightgrey 1px solid;
  border-radius: 5px;  
  font-size: 15px;
  height: 32px;
  margin: 6px 0;
  padding: 0 8px;
  width: 220px;
`;


export const Button = styled.button`
  background-color: ${props => props.variant === "primary" ? "#51FDEF" : "#FFFCDC"};
  border: #000030 ${props => props.variant === "primary" ? "0" : "1"}px solid;
  border-radius: 10px;
  color: #000030;
  cursor: pointer;
  font-size: 16px;  
  height: 45px;
  width: 90px;
  &:hover {
    background-color: ${props => props.variant === "primary" ? "#4BF0E3" : "#EEEABF"};
  }
  &:disabled {
    background-color: ${props => props.variant === "primary" ? "#AFEDE7" : "#CDCBB1"};
    cursor: not-allowed;
  }
`;