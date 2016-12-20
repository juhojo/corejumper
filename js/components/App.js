import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './pages/Menu.js';
import Game from './pages/Game.js';
import Guide from './pages/Guide.js';
import Settings from './pages/Settings.js';
import About from './pages/About.js';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import TransitionGroup from 'react-addons-transition-group';
import {Sine} from 'gsap';

class RouteRenderer extends Component{
  keybinds={};

  transition = {
    time: .3,
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

  navigate(url){
    hashHistory.push(url);
  }

  exit(){
    hashHistory.push('/');
  }

  setKeybinds=obj=>{
    this.keybinds=obj;
  }

  keydownHandler=e=>{
    if(this.keybinds[e.which]){
      e.preventDefault();
      this.keybinds[e.which]();
    }
  }

  render(){
    return (
      <div id="route-renderer">
        <TransitionGroup component="div" className="full-height">
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            navigate: this.navigate.bind(this),
            exit: this.exit.bind(this),
            setKeybinds: this.setKeybinds.bind(this),
            transition: this.transition,
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
          <Route path='guide' component={Guide}/>
          <Route path='settings' component={Settings}/>
          <Route path='about' component={About}/>
          <Route Path='*' component={Menu}/>
        </Route>
      </Router>
    </div>;
  }

}
