import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';

export default class SubPage extends Component{
  el = null;
  clockwise = false;

  componentDidMount() {
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
      {transform: `scale(0.1) rotate(-179deg)`, opacity: 0},
      {transform: 'scale(1) rotate(0deg)', opacity: 1, onComplete: callback, ease: transition.ease}
    );
  }

  componentWillLeave(callback) {
    const {transition} = this.props;
    this.el.style.transformOrigin = transition.origin;
    if (this.clockwise) {
      TweenMax.fromTo(
        this.el, transition.time,
        {transform: 'scale(1) rotate(0deg)', opacity: 1},
        {transform: `scale(${transition.scale}) rotate(179deg)`, opacity: 0, onComplete: callback, ease: transition.ease}
      );
    } else {
      TweenMax.fromTo(
        this.el, transition.time,
        {transform: 'scale(1) rotate(0deg)', opacity: 1},
        {transform: 'scale(0.1) rotate(-179deg)', opacity: 0, onComplete: callback, ease: transition.ease}
      );
    }
  }

  setRotation=clockwise=>{
    this.clockwise = clockwise;
  }

  render (){
    return <div className="page"></div>;
  }
}
