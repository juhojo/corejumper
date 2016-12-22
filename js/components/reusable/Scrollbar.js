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
    this.handle.addEventListener('mouseDown', this.handleMouseDownHandler);
    window.addEventListener('mouseUp', this.windowMouseUpHandler);
    window.addEventListener('mouseMove', this.windowMouseMoveHandler);
    window.addEventListener('resize', this.windowResizeHandler);

    this.setDimensions();
  }

  componentWillUnmount(){
    this.middle.removeEventListener('scroll', this.scrollHandler);
    this.track.removeEventListener('click', this.trackClickHandler);
    this.handle.removeEventListener('mouseDown', this.handleMouseDownHandler);
    window.removeEventListener('mouseUp', this.windowMouseUpHandler);
    window.removeEventListener('mouseMove', this.windowMouseMoveHandler);
    window.removeEventListener('resize', this.windowResizeHandler);
  }

  setDimensions=()=>{
    this.outerRect=this.outer.getBoundingClientRect();
    this.innerHeight=this.inner.getBoundingClientRect().height;
    this.trackHeight=this.track.getBoundingClientRect().height;
    this.handleHeight=this.trackHeight*(this.outerRect.height/this.innerHeight);
    const handleTop=this.middle.scrollTop/this.innerHeight;

    this.inner.style.width=this.outerRect.width;
    this.handle.style.height=this.handleHeight;
    this.handle.style.top=handleTop;
  }

  scrollHandler=e=>{

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
    this.middle.scrollTop=this.scrollStart+(this.dragStart-e.pageY);
  }

  render (){
    return (
      <div class="scrollbar-container-outer" ref="outer">
        <div class="scrollbar-track" ref="track">
          <div class="scrollbar-handle" ref="handle"></div>
        </div>
        <div class="scrollbar-container-middle" ref="middle">
          <div class="scrollbar-container-inner" ref="inner">
            {this.props.children} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula quam nibh, eu tristique tellus dignissim quis. Integer condimentum ultrices elit ut mattis. Praesent rhoncus tortor metus, nec pellentesque enim mattis nec.
            Nulla vitae turpis ut dui consectetur pellentesque quis vel est. Curabitur rutrum, mauris ut mollis lobortis, sem est congue lectus, ut sodales nunc leo a libero. Cras quis sapien in mi fringilla tempus condimentum quis velit. Aliquam id aliquam
            arcu. Morbi tristique aliquam rutrum. Duis tincidunt, orci suscipit cursus molestie, purus nisi pharetra dui, tempor dignissim felis turpis in mi. Vivamus ullamcorper arcu sit amet mauris egestas egestas. Vestibulum turpis neque, condimentum a tincidunt
            quis, molestie vel justo. Sed molestie nunc dapibus arcu feugiat, ut sollicitudin metus sagittis. Aliquam a volutpat sem. Quisque id magna ultrices, lobortis dui eget, pretium libero. Curabitur aliquam in ante eu ultricies. Quisque vitae tincidunt
            purus. Vivamus feugiat bibendum erat, nec interdum urna porta sed. Nunc lobortis neque orci, ut suscipit nisl congue feugiat. Vivamus feugiat tellus quis cursus sollicitudin. Curabitur dolor massa, dictum ut ipsum in, porttitor pellentesque ante.
            Aenean egestas cursus tempor. Maecenas semper tortor sit amet egestas cursus. Mauris porttitor quis nisi ut tincidunt. Curabitur adipiscing eleifend nibh. Praesent mauris leo, consequat vitae orci eget, vestibulum bibendum nisi. Aliquam tempus diam
            ut tortor cursus, eget sodales augue adipiscing. Nulla at dignissim libero.
          </div>
        </div>
      </div>
    );
  }
}
