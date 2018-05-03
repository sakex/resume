import React from 'react';

const contStyle = {
  padding: '0 1em 1em 4em',
  fontSize: '18px',
  backgroundColor: 'white',
  color: '#1f2123'
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '70px',
  width: '600px',
  textAlign: 'left',
  marginTop: '1em',
  display: 'inline-block',
  marginBottom: '0px'
};

const subTStyle = {
  marginTop: 0,
  marginBottom: '150px'
};

const descriptionStyle = {
  width: '580px',
  lineHeight: '1.6em',
  fontSize: '37px',
  textAlign: 'justify'
};

const welcomeStyle = {
  position: 'absolute',
  bottom: '50px'
};

class Infos extends React.Component{
  render(){
    return(
      <div style={contStyle}>
        <p style={titleStyle}>Alexandre Senges</p>
        <p style={subTStyle}>BsC HEC Lausanne & Full-Stack JS developer</p>
        <p style={descriptionStyle}>Born in Arcachon, France.
        Moved to Geneva, Switzerland at the age of 8.
        Currently living in Lausanne.</p>
        <p style={welcomeStyle}>This is my resume, I wrote it in JavaScript with React.JS and CSS-grid</p>
      </div>
    );
  }
}

export default Infos;