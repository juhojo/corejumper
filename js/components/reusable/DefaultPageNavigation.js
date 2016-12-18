import React, {Component} from 'react';

export default class DefaultPageNavigation extends Component{
  componentDidMount(){
    this.props.setKeybinds({
      37: this.props.exit,
      8: this.props.exit,
    });
  }

  render (){
    return null;
  }
}
