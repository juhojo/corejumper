import React, {Component} from 'react';
import MenuButton from '../MenuButton';

export default class SubPageContent extends Component{
  render (){
    return (
      <div className="page">
        <MenuButton exit={this.props.exit} />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
