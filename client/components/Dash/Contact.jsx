import React from 'react';
import { ContactCard } from './ContactCard';
import '../../stylesheets/_contact.css';
import Caro from '../../Images/Caro.png';
import Chris from '../../Images/Chris.png';
import Gabby from '../../Images/Gabby.png';
import Nelson from '../../Images/Nelson.png';
import Sharmarke from '../../Images/Sharmarke.png';


function Contact() {

  return (
    <div>
      <div className="Contact">
        <h1 className="header">Meet The Team</h1>
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
  )
}

export default Contact;
