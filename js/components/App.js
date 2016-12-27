import React, {Component} from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import TransitionGroup from 'react-addons-transition-group';
import {Sine} from 'gsap';
import Menu from './pages/Menu.js';
import Game from './pages/Game.js';
import Levels from './pages/Levels.js';
import Guide from './pages/Guide.js';
import Settings from './pages/Settings.js';
import About from './pages/About.js';

class RouteRenderer extends Component{
  state={
    selectedMenu:0,
    userProgress: 2, // User's progress in game. Which level they have reached.
    selectedLevel: 2, // The level user has selected to play
    progress: [
      {number: 1, unlocked: true, finished: true, attempts: 10, score: 5},
      {number: 2, unlocked: true, finished: true, attempts: 2, score: 8},
      {number: 3, unlocked: true, finished: false, attempts: 8, score: 0},
      {number: 4, unlocked: false, finished: false, attempts: 0, score: 0},
      {number: 5, unlocked: false, finished: false, attempts: 0, score: 0},
      {number: 6, unlocked: false, finished: false, attempts: 0, score: 0},
      {number: 7, unlocked: false, finished: false, attempts: 0, score: 0},
      {number: 8, unlocked: false, finished: false, attempts: 0, score: 0},
      {number: 9, unlocked: false, finished: false, attempts: 0, score: 0},
      {number: 10, unlocked: false, finished: false, attempts: 0, score: 0},
      {number: 11, unlocked: false, finished: false, attempts: 0, score: 0},
      {number: 12, unlocked: false, finished: false, attempts: 0, score: 0},
    ],
  };

  keybinds={};

  transition = {
    time: .4,
    scale: 6,
    origin: `${window.innerWidth/2}px ${window.innerHeight/2}px`,
    ease: Sine.easeInOut,

    setOrigin(val){
      this.origin = val;
    }
  };

  componentDidMount(){
    window.addEventListener('keydown', this.keydownHandler);
  }

  /* Event handlers*/

  keydownHandler=e=>{
    if(this.keybinds[e.which]){
      e.preventDefault();
      this.keybinds[e.which]();
    }
  }

  /* Navigation handlers*/

  navigate=url=>{
    hashHistory.push(url);
  }

  exit=()=>{
    hashHistory.push('/');
  }

  /* Setters */

  setKeybinds=obj=>{
    this.keybinds=obj;
  }

  setSelectedLevel=(selectedLevel, callback)=>{
    this.setState({ selectedLevel }, callback);
  }

  setSelectedMenu=selectedMenu=>{
    this.setState({ selectedMenu });
  }

  render(){
    const { selectedMenu, selectedLevel, progress, userProgress } = this.state;
    return (
      <div id="route-renderer">
        <TransitionGroup component="div" className="full-height">
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            navigate: this.navigate,
            exit: this.exit,
            setKeybinds: this.setKeybinds,
            transition: this.transition,
            setSelectedMenu: this.setSelectedMenu,
            setSelectedLevel: this.setSelectedLevel,
            selectedMenu,
            selectedLevel,
            progress,
            userProgress,
          })}
        </TransitionGroup>
      </div>
    );
  }
}

export default class App extends Component{

  render (){
    return <div id="app">
      <h1>Corejumper 0.1.0</h1>
      <Router history={hashHistory}>
        <Route path='/' component={RouteRenderer}>
          <IndexRoute component={Menu}/>
          <Route path='game' component={Game}/>
          <Route path='levels' component={Levels}/>
          <Route path='guide' component={Guide}/>
          <Route path='settings' component={Settings}/>
          <Route path='about' component={About}/>
          <Route Path='*' component={Menu}/>
        </Route>
      </Router>
    </div>;
  }

}
