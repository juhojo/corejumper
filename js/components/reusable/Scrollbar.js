import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { TweenLite, Power3 } from 'gsap';
import 'ScrollToPlugin'; // Using aliases in webpack.config.js allowes using GASP-plugins
import classNames from 'classnames';

export default class Scrollbar extends Component{
  outer=null;
  middle=null;
  inner=null;
  track=null;
  handle=null;
  dragging=false;
  scrollStart=0;
  dragStart=0;
  outerHeight=0;
  outerWidth=0;
  innerHeight=0;
  trackHeight=0;
  handleHeight=0;
  tween=null;

  state={
    hide: false,
  }

  componentDidMount(){
    this.outer=ReactDOM.findDOMNode(this.refs.outer);
    this.middle=ReactDOM.findDOMNode(this.refs.middle);
    this.inner=ReactDOM.findDOMNode(this.refs.inner);
    this.track=ReactDOM.findDOMNode(this.refs.track);
    this.handle=ReactDOM.findDOMNode(this.refs.handle);

    this.middle.addEventListener('scroll', this.scrollHandler);
    this.track.addEventListener('click', this.trackClickHandler);
    this.handle.addEventListener('mousedown', this.handleMouseDownHandler);
    window.addEventListener('mouseup', this.windowMouseUpHandler);
    window.addEventListener('mousemove', this.windowMouseMoveHandler);
    window.addEventListener('resize', this.setDimensions);

    this.setDimensions();
  }

  componentWillUnmount(){
    this.middle.removeEventListener('scroll', this.scrollHandler);
    this.track.removeEventListener('click', this.trackClickHandler);
    this.handle.removeEventListener('mousedown', this.handleMouseDownHandler);
    window.removeEventListener('mouseup', this.windowMouseUpHandler);
    window.removeEventListener('mousemove', this.windowMouseMoveHandler);
    window.removeEventListener('resize', this.setDimensions);
  }

  updateHandle=()=>{
    this.handle.style.top=this.trackHeight*(this.middle.scrollTop/this.innerHeight)+"px";
  }

  setDimensions=()=>{
    this.outerHeight=this.outer.offsetHeight;
    this.outerWidth=this.outer.offsetWidth;
    this.inner.style.width=this.outerWidth+"px";

    this.innerHeight=this.middle.scrollHeight;
    this.trackHeight=this.track.offsetHeight;
    const percentageVisible=(this.outerHeight/this.innerHeight);
    this.handleHeight=percentageVisible > 1
      ? this.trackHeight
      : this.trackHeight*percentageVisible;
    this.handle.style.height=this.handleHeight+"px";

    if(this.handleHeight==this.trackHeight && !this.props.showAlways) this.setState({hide:true});

    this.updateHandle();
  }

  scrollHandler=e=>{
    if(!this.dragging) this.updateHandle();
  }

  trackClickHandler=e=>{
    this.tween && TweenLite.killTweensOf(this.tween);
    this.tween = TweenLite.to(this.middle, .3, {scrollTo: (e.pageY-this.handleHeight)*(this.innerHeight/this.trackHeight), ease: Power3.easeInOut});
    this.updateHandle();
  }

  handleMouseDownHandler=e=>{
    document.body.classList.add('grabbing');
    this.dragging=true;
    this.scrollStart=this.middle.scrollTop;
    this.dragStart=e.pageY;
  }

  windowMouseUpHandler=e=>{
    this.dragging=false;
    document.body.classList.remove('grabbing');
  }

  windowMouseMoveHandler=e=>{
    if(this.dragging){
      this.middle.scrollTop=this.scrollStart-(this.dragStart-e.pageY)*(this.innerHeight/this.trackHeight);
      this.updateHandle();
    }
  }

  render (){
    const { hide } = this.state;
    const { centerUnscrollable } = this.props;
    return (
      <div className="scrollbar-container-outer" ref="outer" style={this.props.outerStyle}>
        <div className="scrollbar-container-middle" ref="middle">
          <div className={classNames("scrollbar-container-inner", {center: hide && centerUnscrollable})} ref="inner" style={this.props.innerStyles}>
            {this.props.children}
          </div>
        </div>
        <div className={classNames('scrollbar-track', { hide })} ref="track">
          <div className="scrollbar-handle" ref="handle"></div>
        </div>
      </div>
    );
  }
}
