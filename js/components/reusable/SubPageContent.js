import React, {Component} from 'react';
import MenuButton from '../MenuButton';

export default class SubPageContent extends Component{
  render (){
    return (
      <div id={this.props.id} className="page sub-page">
        <div className='content' style={this.props.style}>
          {this.props.children}
        </div>
        <MenuButton exit={this.props.exit} />
      </div>
    );
  }
}
