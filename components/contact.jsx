import React, {Component} from 'react';
import ld from '../images/LinkedIn.png';
import fb from '../images/facebook_circle-512.png';
import gh from '../images/25231.svg';
const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7770326794407!2d6.195777036237387!3d46.250764579334465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6f6060c855d5%3A0xbc671930f32ef957!2sChemin+du+Port-de-Bellerive+11B%2C+1245+Collonge-Bellerive!5e0!3m2!1sen!2sch!4v1525300375378';

const style = {
  color: '#1f2123',
  backgroundColor: 'white'
};

const mapPos = {
  marginLeft: 'calc(50% - 250px)',
  fontSize: '30px',
  lineHeight: '.5em'
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 75px)',
  gridTemplateRows: '75px',
  width: '300px',
  marginLeft: 'calc(50% - 150px)',
  position: 'relative',
  top: '15px',
  gridColumnGap: '25px'
};

const img_style = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  cursor: 'pointer'
};

class Contact extends Component{
  render(){
    return(
      <div style={style}>
        <p style={mapPos}><b>Adresse:</b><br /><br /><br /> Chemin du Port de Bellerive 11B,</p>
        <p style={mapPos}>1245, Collonge-Bellerive</p>
        <p style={mapPos}><iframe src={url} width='500' height='300' frameBorder='0' allowFullScreen></iframe></p>
        <p style={mapPos}>Teléphone: +41 79 620 54 79</p>
        <p style={mapPos}>Mail: alexandre.senges@unil.ch</p>
        <p style={grid}>
          <a target='_blank' href='https://www.linkedin.com/in/alexandre-senges-0a02a4111/'>
            <img style={img_style} src={ld}/>
          </a>
          <a target='_blank' href='https://www.facebook.com/senges.alex'>
            <img style={img_style} src={fb} />
          </a>
          <a target='_blank' href='https://github.com/sakex'>
            <img style={img_style} src={gh} />
          </a>
        </p>
      </div>
    );
  }
}

export default Contact;