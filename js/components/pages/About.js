import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DefaultPageNavigation from '../reusable/DefaultPageNavigation';
import MenuButton from '../MenuButton';
import TweenMax from 'gsap';

export default class About extends Component{
  el = null;

  componentDidMount(){
    this.el = ReactDOM.findDOMNode(this);
  }

  componentWillEnter(callback) {
      this.el.style.transformOrigin = this.props.transformOrigin;
      // TweenMax.fromTo(this.el, 3, {transform: 'scale(0)', opacity: 0}, {transform: 'scale(1)', opacity: 1, onComplete: callback});
      this.el.style.transform="scale(1)";
      this.el.style.opacity=1;
      setTimeout(callback, 500);
  }

  componentWillLeave(callback) {
      this.el.className += " leaving";
      // TweenMax.fromTo(this.el, 3, {transform: 'scale(1)', opacity: 1}, {transform: 'scale(0)', opacity: 0, onComplete: callback});
      this.el.style.transformOrigin = this.props.transformOrigin;
      this.el.style.transform="scale(0)";
      this.el.style.opacity=0;
      setTimeout(callback, 500);
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
