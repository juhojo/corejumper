import React, {Component} from 'react';
import MenuButton from '../MenuButton';

export default class About extends Component{
  render (){
    return (
      <div id="about" className="page">
        <MenuButton exit={this.props.exit} />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
