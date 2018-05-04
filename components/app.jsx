import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import PP from './pp.jsx';
import Infos from './infos.jsx';
import Titles from './titles.jsx';
import Experiences from './experiences';
import Education from './education';
import Competences from './competences';
import Contact from './contact';

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
        <Competences />
        <Titles text='competences' />
        <Titles text='informations' />
        <Contact />
      </div>
    );
  }
}


export default hot(module)(App);