import React, {Component} from 'react';

const style = {
  width: '471px',
  textAlign: 'center',
  marginLeft: 'calc(50% - 235.5px)',
  fontSize: '200px',
  display: 'inline-block',
  position: 'absolute',
  top: 'calc(50% - 300px)'
};

const pStyle = {
  margin: 0,
  lineHeight: '200px'
};

class Title extends Component{
  render(){
    this.style = this.props.style;
    if(this.style)
      this.style = {
        backgroundColor: 'white',
        color: '#1f2123'
      };
    const text = this.props.text.toUpperCase();
    const strings = [];
    let strLen;
    for(var i = 0, l=text.length; i<l; ++i){
      strLen = strings.length;
      if(i%4 === 0) strings[strLen] = text[i];
      else strings[strLen - 1] += text[i];
    }
    const lastLength = strings[strings.length-1].length;
    for(i = lastLength; i<4; ++i){
      strings[strings.length-1] += '⎯';
    }
    const rows = strings.map(t => (<p key={t} style={pStyle}>{t}</p>));
    return(
      <div style={this.style} className='title_container'>
        <div style={style}>{rows}</div>
      </div>
    );
  }
}

export default Title;