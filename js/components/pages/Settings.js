import React, {Component} from 'react';
import DefaultPageNavigation from '../reusable/DefaultPageNavigation';
import MenuButton from '../MenuButton';

export default class Settings extends Component{
  render (){
    return (
      <div id="settings" className="page">
        <DefaultPageNavigation exit={this.props.exit} setKeybinds={this.props.setKeybinds}/>
        <MenuButton exit={this.props.exit} />
        <div className='content'>
          <h1>Settings</h1>
          <p>Nothing to change yet ¯\_(ツ)_/¯</p>
        </div>
      </div>
    );
  }
}
