import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import PP from './pp.jsx';
import Infos from './infos.jsx';
import Titles from './titles.jsx';
import Experiences from './experiences';
import Education from './education';


class App extends Component {
  render() {
    return (
      <div id='grid'>
        <PP />
        <Infos />
        <Titles text='experience' style={true}/>
        <Experiences/>
        <Titles text='education'/>
        <Education />
      </div>
    );
  }
}


export default hot(module)(App);