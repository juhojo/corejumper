import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LargeButton from '../reusable/LargeButton';
import TweenMax, {Sine, Elastic} from 'gsap';

export default class Menu extends Component{

  el = null;

  state={
    selected: 0,
    options: [
      {
        title: 'Play',
        target: '/game',
      },
      {
        title: 'Guide',
        target: '/guide',
      },
      {
        title: 'Settings',
        target: '/settings',
      },
      {
        title: 'About',
        target: '/about',
      },
    ],
  }

  componentDidMount(){
    this.el = ReactDOM.findDOMNode(this);
    this.props.setKeybinds({
      38: this.moveUp,
      40: this.moveDown,
      13: this.navigateToSelected,
      39: this.navigateToSelected,
    });
  }

  componentWillEnter(callback) {
    const {transition} = this.props;
    this.el.style.transformOrigin=transition.origin;
    TweenMax.fromTo(
      this.el, transition.time, 
      {transform: `scale(${transition.scale})`, opacity: 0}, 
      {transform: 'scale(1)', opacity: 1, onComplete: callback, ease: transition.ease}
    );
  }

  componentWillLeave(callback) {
    const {transition} = this.props;
    this.el.style.transformOrigin = transition.origin;
    TweenMax.fromTo(
      this.el, transition.time, 
      {transform: 'scale(1)', opacity: 1}, 
      {transform: `scale(${transition.scale})`, opacity: 0, onComplete: callback, ease: transition.ease}
    );
  }

  navigateToSelected=()=>{
    this.props.navigate(this.state.options[this.state.selected].target);
  }

  select(which){
    this.setState({
      selected: which,
    });
  }

  moveUp=()=>{
    this.state.selected==0
      ? this.select(this.state.options.length-1)
      : this.select(this.state.selected-1)
    ;
  }

  moveDown=()=>{
    this.state.selected==this.state.options.length-1
      ? this.select(0)
      : this.select(this.state.selected+1)
    ;
  }

  mouseoverHandler(i,e){
    this.select(i);
  }

  clickHandler(i,e){
    const targetRect=e.target.getBoundingClientRect();
    this.props.transition.setOrigin(
      `${window.innerWidth / 2}px ${targetRect.top + (targetRect.height / 2)}px`
    );
    this.props.navigate(this.state.options[i].target);
  }

  render (){
    return (
      <div id="menu" className="page">
        <div id="menu-buttons">
          {this.state.options.map((e,i)=>
            <LargeButton
              key={i}
              title={e.title}
              selected={this.state.selected==i}
              onMouseEnter={this.mouseoverHandler.bind(this, i)}
              onClick={this.clickHandler.bind(this, i)}
            />
          )}
        </div>
      </div>
    );
  }

}
