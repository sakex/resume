import React, {Component} from 'react';
import Quote from './quotes';
import data from '../variables/education.json';

class Education extends Component {
  render() {
    let keys = 0;
    const rows = data.map(quote => <Quote key={keys++} {...quote} />);
    return (
      <div style={{padding: '72px 72px 72px 72px', color: '#1f2123', backgroundColor: 'white'}}>
        {rows}
      </div>
    );
  }
}

export default Education;