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
          <h1>About</h1>
          <p>Made by Juho Jokela & Ilpo Oksanen</p>
          <p>Built using React.</p>
        </div>
      </div>
    );
  }
}
