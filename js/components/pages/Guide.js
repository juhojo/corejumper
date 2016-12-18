import React, {Component} from 'react';
import DefaultPageNavigation from '../reusable/DefaultPageNavigation';
import MenuButton from '../MenuButton';

export default class Guide extends Component{
  render (){
    return (
      <div id="guide" className="page">
        <DefaultPageNavigation exit={this.props.exit} setKeybinds={this.props.setKeybinds}/>
        <MenuButton exit={this.props.exit} />
        <div className='content'>
          <h1>Guide</h1>
          <p>Avoid obstacles and falling into center.</p>
          <p>↑ to jump</p>
        </div>
      </div>
    );
  }
}
