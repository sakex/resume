import React, {Component} from 'react';

const style = {
  fontSize: '20px',
  marginBottom: '70px',
  width: '650px'
};

const dateStyle = {
  marginBottom: 0,
  color: '#323739',
  fontWeight: 'bold'
};

const roleStyle = {
  marginTop: 0,
  color: '#425739',
  marginBottom: '15px'
};

const companyStyle = {
  marginTop: '15px',
  marginBottom: 0,
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#726c54'
};

const descStyle = {
  marginTop: 0,
  color: '#e8cfcf96'
};

class Quote extends Component{
  render(){
    return(
      <div style={style}>
        <p style={dateStyle}>{this.props.from} - {this.props.to}</p>
        <p style={roleStyle}>{this.props.role}</p>
        <p style={companyStyle}>@{this.props.company}</p>
        <p style={descStyle}>{this.props.description}</p>
      </div>
    );
  }
}

export default Quote;