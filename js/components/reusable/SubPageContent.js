import React, {Component} from 'react';
import MenuButton from '../MenuButton';
import Scrollbar from '../reusable/Scrollbar';
import Centerer from '../reusable/Centerer';

export default class SubPageContent extends Component{
  render (){
    console.log(this.props.style);
    return (
      <div id={ this.props.id } className="page sub-page" style={ this.props.style }>
        <Scrollbar>
          <div className="content">
            <Centerer innerStyle={{ paddingBottom: '8vh' }}>
              {this.props.children}
            </Centerer>
          </div>
        </Scrollbar>
        <div className="header-fade"></div>
        <MenuButton exit={ this.props.exit } />
      </div>
    );
  }
}
