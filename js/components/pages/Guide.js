import React, {Component} from 'react';
import DefaultPageNavigation from '../reusable/DefaultPageNavigation';
import MenuButton from '../MenuButton';
import KeyboardKey from '../reusable/KeyboardKey';

export default class Guide extends Component{
  render (){
    return (
      <div id="guide" className="page">
        <DefaultPageNavigation exit={this.props.exit} setKeybinds={this.props.setKeybinds}/>
        <MenuButton exit={this.props.exit} />
        <div className='content'>
          <h1>Guide</h1>
          <p>Avoid obstacles and falling into the center.</p>
          <p><KeyboardKey>↑</KeyboardKey> or <KeyboardKey>space</KeyboardKey> to jump</p>
          <p><KeyboardKey>Esc</KeyboardKey> or <KeyboardKey>pause break</KeyboardKey> to pause</p>
          <p><KeyboardKey>Backspace</KeyboardKey> menu</p>
        </div>
      </div>
    );
  }
}
