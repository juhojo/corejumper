import React, {Component} from 'react';

export default class MenuButton extends Component{
  render (){
    return (
      <div className="menu-button" onClick={this.props.exit}>
        <div>
          MENU
        </div>
      </div>
    );
  }
}
