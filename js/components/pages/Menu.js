import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LargeButton from '../reusable/LargeButton';
import TweenMax from 'gsap';

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

    TweenMax.fromTo(this.el, 3, {transform: 'scale(6)', opacity: 0}, {transform: 'scale(1)', opacity: 1, onComplete: callback});

    // this.el.transition="all 0";
    // this.el.style.transform="scale(6)";
    // this.el.style.opacity=0;
    // this.el.transition="transform .5s, opacity .5s";
    // this.el.style.transformOrigin = this.props.transformOrigin;
    // this.el.style.transform="scale(1)";
    // this.el.style.opacity=1;
    // setTimeout(callback, 500);
  }
  componentWillLeave(callback) {
    this.el.className += " leaving";
    this.el.style.transformOrigin = this.props.transformOrigin;
    // this.el.style.transform="scale(6)";
    // this.el.style.opacity=0;
    // setTimeout(callback, 500);
    TweenMax.fromTo(this.el, 3, {transformOrigin: this.props.transformOrigin, transform: 'scale(1)', opacity: 1}, {transform: 'scale(6)', opacity: 0, onComplete: callback});
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
    // console.log(this.props.transformOrigin);
    this.props.transformOrigin.set(`${window.innerWidth / 2}px ${e.target.offsetTop + (e.target.getBoundingClientRect().height / 2)}px`);
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
