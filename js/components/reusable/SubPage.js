import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';

export default class About extends Component{
  el = null;

  componentDidMount(){
    this.el = ReactDOM.findDOMNode(this);
    this.props.setKeybinds({
      37: this.props.exit,
      8: this.props.exit,
    });
  }

  componentWillEnter(callback) {
    const {transition} = this.props;
    this.el.style.transformOrigin = transition.origin;
    TweenMax.fromTo(
      this.el, transition.time,
      {transform: 'scale(0)', opacity: 0},
      {transform: 'scale(1)', opacity: 1, onComplete: callback, ease: transition.ease}
    );
  }

  componentWillLeave(callback) {
    const {transition} = this.props;
    this.el.style.transformOrigin = transition.origin;
    TweenMax.fromTo(
      this.el, transition.time,
      {transform: 'scale(1)', opacity: 1},
      {transform: 'scale(0)', opacity: 0, onComplete: callback, ease: transition.ease}
    );
  }

  render (){
    return <div id="about" className="page"></div>;
  }
}
