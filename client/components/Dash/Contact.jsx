import React from 'react';
import { ContactCard } from './ContactCard';
import { Link } from 'react-router-dom';
import '../../stylesheets/_contact.css';
import Caro from '../../Images/Caro.png';
import Chris from '../../Images/Chris.png';
import Gabby from '../../Images/Gabby.png';
import Nelson from '../../Images/Nelson.png';
import Sharmarke from '../../Images/Sharmarke.png';
import styled from 'styled-components';

const DashButton = styled.button`
margin-top: 12px;
margin-left: 12px;
background-color: ${props => props.variant === "primary" ? "#279EFF" : "#9FC8EE"};
border: #AFEDE7 ${props => props.variant === "primary" ? "0" : "1"}px solid;
border-radius: 11px;
color: #000030;
cursor: pointer;  
position: absolute;
font-size: 14px;  
padding: 1em;
&:hover {
  background-color: ${props => props.variant === "primary" ? "#9FC8EE" : "#279EFF"};
}
`

function Contact() {

  return (
    <div className="Contact-background">
      <div>
      <DashButton as={Link} to="/dashboard">Return to Dashboard</DashButton>
      {/* <DashButton onClick={() => handleClick('/dashboard')}>Return to Dashboard</DashButton> */}
      </div>

      <div className='container'>
        <div className="headerAlt"><h1 >Meet The Team</h1></div>
        
      
        <div className="Contact">
        <ContactCard
          imgSource={Caro}
          imgAlt="Picture"
          name="Carolina Bonitatis"
          linkedin="https://www.linkedin.com/in/carolina-bonitatis"
          github="https://github.com/carobonita"
        />
        <ContactCard 
          imgSource={Chris}
          imgAlt="Picture"
          name="Christopher Le"
          linkedin="https://www.linkedin.com/in/chrisle96"
          github="https://github.com/dragblas"
        />
        <ContactCard 
          imgSource={Gabby}
          imgAlt="Picture"
          name="Gabriela Passentino"
          linkedin="https://www.linkedin.com/in/gabriela-passentino/"
          github="https://github.com/gpassentino"
        />
        <ContactCard 
          imgSource={Nelson}
          imgAlt="Picture"
          name="Micah Nelson"
          linkedin="https://www.linkedin.com/in/micahanelson"
          github="https://github.com/ericmrennie"
        />
        <ContactCard 
          imgSource={Sharmarke}
          imgAlt="Picture"
          name="Sharmarke Youssouf"
          linkedin="https://www.linkedin.com/in/sharmarkeyoussouf/"
          github="https://github.com/sharmarkeGit"
        />
    
      </div>
      </div>
      
      
      
    </div>
  )
}

export default Contact;
