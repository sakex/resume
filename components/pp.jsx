import React from 'react';
import pp from '../images/1.jpg';


const style = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'contrast(2.4)'
};

const layer = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  backgroundColor: 'rgba(31, 33, 35, .85)',
  position: 'absolute',
  top: 0
};


const elem = () => {
  return (
  <div>
    <img src={pp} id='pp' style={style} />
    <div style={layer}></div>
  </div>
  );
};

export default elem;
