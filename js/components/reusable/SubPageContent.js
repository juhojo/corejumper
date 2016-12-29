import React, {Component} from 'react';
import MenuButton from '../MenuButton';
import Scrollbar from '../reusable/Scrollbar';

export default class SubPageContent extends Component{
  render (){
    return (
      <div id={this.props.id} className="page sub-page">
        <Scrollbar centerUnscrollable={true}>
          <div className='content' style={this.props.style}>
              {this.props.children}
          </div>
        </Scrollbar>
        <div className="header-fade"></div>
        <MenuButton exit={this.props.exit} />
      </div>
    );
  }
}
