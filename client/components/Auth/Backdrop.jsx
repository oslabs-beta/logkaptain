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
  background-image: url(${backdropImg});
  background-size: cover;
  background-repeat: no-repeat;  
  border-radius: 10px;
  box-shadow: 0 0 8px 8px #e0eaf6 inset
  display: block;  
  height: 1290px;
  margin: auto;
  width: 1509px;  
`;