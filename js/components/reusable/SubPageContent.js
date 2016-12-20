import React, {Component} from 'react';
import DefaultPageNavigation from '../reusable/DefaultPageNavigation';
import MenuButton from '../MenuButton';

export default class About extends Component{
  render (){
    return (
      <div id="about" className="page">
        <DefaultPageNavigation exit={this.props.exit} setKeybinds={this.props.setKeybinds}/>
        <MenuButton exit={this.props.exit} />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
