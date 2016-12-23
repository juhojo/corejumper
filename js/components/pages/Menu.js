import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LargeButton from '../reusable/LargeButton';
import TweenMax, {Sine, Elastic} from 'gsap';

export default class Menu extends Component{

  el = null;

  state={
    options: [
      {
        title: 'Play',
        target: '/game',
      },
      {
        title: 'Levels',
        target: '/levels',
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
    this.setKeybinds();
  }

  componentDidEnter(){
    // If users decide to spam navigation buttons will reset the keys.
    this.setKeybinds();
  }

  componentWillEnter(callback) {
    const {transition} = this.props;
    this.el.style.transformOrigin=transition.origin;
    TweenMax.fromTo(
      this.el, transition.time,
      {transform: `scale(${transition.scale}) rotate(179deg)`, opacity: 0},
      {transform: 'scale(1) rotate(0deg)', opacity: 1, onComplete: callback, ease: transition.ease}
    );
  }

  componentWillLeave(callback) {
    const {transition} = this.props;
    this.el.style.transformOrigin = transition.origin;
    TweenMax.fromTo(
      this.el, transition.time,
      {transform: 'scale(1) rotate(0deg)', opacity: 1},
      {transform: `scale(${transition.scale}) rotate(179deg)`, opacity: 0, onComplete: callback, ease: transition.ease}
    );
  }

  setKeybinds() {
    this.props.setKeybinds({
      38: this.moveUp,
      40: this.moveDown,
      13: this.navigateToSelected,
      39: this.navigateToSelected,
    });
  }

  updateOrigin=target=>{
    const targetRect=target.getBoundingClientRect();
    this.props.transition.setOrigin(
      `${window.innerWidth / 2}px ${targetRect.top + (targetRect.height / 2)}px`
    );
  }

  navigateToSelected=()=>{
    this.updateOrigin(ReactDOM.findDOMNode(this.refs[`button${this.props.selectedMenu}`]));
    this.props.navigate(this.state.options[this.props.selectedMenu].target);
  }

  moveUp=()=>{
    const { selectedMenu, setSelectedMenu } = this.props;
    selectedMenu==0
      ? setSelectedMenu(this.state.options.length-1)
      : setSelectedMenu(selectedMenu-1)
    ;
  }

  moveDown=()=>{
    const { selectedMenu, setSelectedMenu } = this.props;
    selectedMenu==this.state.options.length-1
      ? setSelectedMenu(0)
      : setSelectedMenu(selectedMenu+1)
    ;
  }

  mouseoverHandler(i,e){
    this.props.setSelectedMenu(i);
  }

  clickHandler(i,e){
    this.updateOrigin(e.target);
    this.props.navigate(this.state.options[i].target);
  }

  render (){
    return (
      <div id="menu" className="page">
        <div id="menu-buttons">
          {this.state.options.map((e,i)=>
            <LargeButton
              key={i}
              ref={`button${i}`}
              title={e.title}
              selected={this.props.selectedMenu==i}
              onMouseEnter={this.mouseoverHandler.bind(this, i)}
              onClick={this.clickHandler.bind(this, i)}
            />
          )}
        </div>
      </div>
    );
  }

}
