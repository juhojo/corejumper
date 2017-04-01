import React, {Component} from 'react';

export default class Centerer extends Component{
  render (){
    return (
      <div className='centerer-outer' style={this.props.style}>
        <div className='centerer-middle'>
          <div className='centerer-inner' style={this.props.innerStyle}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
