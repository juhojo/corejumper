import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Scrollbar extends Component{
  outer=null;
  middle=null;
  inner=null;
  track=null;
  handle=null;
  dragging=false;
  scrollStart=0;
  dragStart=0;
  outerRect={};
  innerHeight=0;
  trackHeight=0;
  handleHeight=0;

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
    this.outerRect=this.outer.getBoundingClientRect();
    this.innerHeight=this.inner.getBoundingClientRect().height;
    this.trackHeight=this.track.getBoundingClientRect().height;
    this.handleHeight=this.trackHeight*(this.outerRect.height/this.innerHeight);

    this.inner.style.width=this.outerRect.width+"px";
    this.handle.style.height=this.handleHeight+"px";
    this.updateHandle();
  }

  scrollHandler=e=>{
    if(!this.dragging) this.updateHandle();
  }

  handleMouseDownHandler=e=>{
    this.dragging=true;
    this.scrollStart=this.middle.scrollTop;
    this.dragStart=e.pageY;
  }

  windowMouseUpHandler=e=>{
    this.dragging=false;
  }

  windowMouseMoveHandler=e=>{
    if(this.dragging){
      this.middle.scrollTop=this.scrollStart-(this.dragStart-e.pageY)*(this.innerHeight/this.trackHeight);
      this.updateHandle();
    }
  }

  render (){
    return (
      <div className="scrollbar-container-outer" ref="outer">
        <div className="scrollbar-container-middle" ref="middle">
          <div className="scrollbar-container-inner" ref="inner">
            {this.props.children}
          </div>
        </div>
        <div className="scrollbar-track" ref="track">
          <div className="scrollbar-handle" ref="handle"></div>
        </div>
      </div>
    );
  }
}
