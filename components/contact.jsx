import React, {Component} from 'react';
const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7770326794407!2d6.195777036237387!3d46.250764579334465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6f6060c855d5%3A0xbc671930f32ef957!2sChemin+du+Port-de-Bellerive+11B%2C+1245+Collonge-Bellerive!5e0!3m2!1sen!2sch!4v1525300375378';

const style = {
  color: '#1f2123',
  backgroundColor: 'white'
};

const mapPos = {
  marginLeft: 'calc(50% - 250px)'
};

class Contact extends Component{
  render(){
    return(
      <div style={style}>
        <p>Chemin du Port de Bellerive 11B,</p>
        <p>1245, Collonge-Bellerive</p>
        <p style={mapPos}><iframe src={url} width='500' height='300' frameBorder='0' allowFullScreen></iframe></p>
        <p>+41 79 620 54 79</p>
      </div>
    );
  }
}

export default Contact;