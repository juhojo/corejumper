import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DefaultPageNavigation from '../reusable/DefaultPageNavigation';
import MenuButton from '../MenuButton';
import TransitionGroup from 'react-addons-transition-group';
import TweenMax from 'gsap';

export default class About extends Component{
  componentWillEnter(callback) {
      // callback();
      const el = ReactDOM.findDOMNode(this);
      TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
      console.log('will enter');
  }
  componentWillLeave(callback) {
      // callback();
      const el = ReactDOM.findDOMNode(this);
      TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
      console.log('will leave');
  }

  render (){
    return (
      <div id="about" className="page">
        <DefaultPageNavigation exit={this.props.exit} setKeybinds={this.props.setKeybinds}/>
        <MenuButton exit={this.props.exit} />
        <div className='content'>
          <h1>About</h1>
          <p>Made by Juho Jokela & Ilpo Oksanen</p>
          <p>Built using React.</p>
        </div>
      </div>
    );
  }
}
