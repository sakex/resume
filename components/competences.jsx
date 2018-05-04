import React from 'react';
import french from '../images/france.svg';
import english from '../images/english.svg';
import german from '../images/german.svg';
import react_img from '../images/react.png';
import node_img from '../images/nodejs_logo.png';
import mongo_img from '../images/mongodb.png/';

const style = {
  display: 'grid',
  gridTemplateColumns: '145px 145px 145px auto',
  gridTemplateRows: '145px 145px 145px auto',
  backgroundColor: 'white',
  lineHeight: '100%',
  gridRowGap: '10px',
  gridColumnGap: '10px',
  padding: '10px'
};

const Languages = (props) => {
  const color = (props.black) ?'black':'white';
  const lStyle = {
    background: props.color,
    lineHeight: '145px',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: '30px',
    color: color,
    backgroundSize: 'cover'
  };
  return <div style={lStyle}>{props.language}</div>;
};

const programmingStyle = {
  backgroundColor: '#726c54',
  lineHeight: '300px',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  fontSize: '30px',
  gridColumnStart: 1,
  gridColumnEnd: 'span 2',
  gridRowStart: 1,
  gridRowEnd: 'span 2'
};

const footerStyle = {
  width: '100%',
  gridColumnStart: 1,
  gridColumnEnd: 'span 4',
  gridRowStart: 4,
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  gridTemplateRows: 'auto'
};

const Icons = (props) => {
  const iStyle = {
    background: props.bg,
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };
  return (<div style={iStyle}></div>);
};

class Competences extends React.Component{
  render(){
    return(
      <div id='comp_grid' style={style}>
        <div style={programmingStyle}>Programming</div>
        <Languages color='#f34b7d' language='C/C++' />
        <Languages black={true} color={`url(${french})`} language='French (C2)' />
        <Languages color='#f1e05a' language='Javascript' />
        <Languages black={true} color={`url(${english})`} language='English(C1)' />
        <Languages color='#563d7c' language='HTML/CSS' />
        <Languages color='#ffac45' language='Swift' />
        <Languages color='#3572A5' language='Python' />
        <Languages color={`url(${german})`} language='German(B1)' />
        <div style={footerStyle}>
          <Icons bg={`url(${node_img})`} />
          <Icons bg={`url(${mongo_img})`} />
          <Icons bg={`url(${react_img})`} />
        </div>
      </div>
    );
  }
}

export default Competences;