import React, {Component} from 'react';
import Quote from './quotes';
import data from '../variables/experiences.json';

class Experiences extends Component{
  render(){
    let keys = 0;
    const rows = data.map(quote => <Quote key={keys++} {...quote}/>);
    return(
      <div style={{padding: '50px 72px 72px 72px'}}>
        {rows}
      </div>
    );
  }
}

export default Experiences;