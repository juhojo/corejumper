import React, {Component} from 'react';
import Menu from './pages/Menu.js';
import Game from './pages/Game.js';
import Guide from './pages/Guide.js';
import Settings from './pages/Settings.js';
import About from './pages/About.js';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

class RouteRenderer extends Component{
  keybinds={};

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

  componentDidMount(){
    window.addEventListener('keydown',this.keydownHandler);
  }

  render(){
    return (
      <div id="route-renderer">
        {React.cloneElement(this.props.children, {
          navigate: this.navigate.bind(this),
          exit: this.exit.bind(this),
          setKeybinds: this.setKeybinds.bind(this),
        })}
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
