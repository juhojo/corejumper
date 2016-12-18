import React, {Component} from 'react';

export default class DefaultPageNavigation extends Component{
  componentDidMount(){
    this.props.setKeybinds({
      27: this.props.exit,
      8: this.props.exit,
    });
  }

  render (){
    return null;
  }
}
