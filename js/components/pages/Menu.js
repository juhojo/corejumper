import React, {Component} from 'react';
import LargeButton from '../reusable/LargeButton';

export default class Menu extends Component{

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
    this.props.setKeybinds({
      38: this.moveUp,
      40: this.moveDown,
      13: this.navigateToSelected,
      39: this.navigateToSelected,
    });
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
