import React, {Component} from 'react';

export default class Game extends Component{
  componentDidMount(){
    this.props.setKeybinds({
      27: this.props.exit,
      8: this.props.exit,
    });
  }

  render (){
    return (
      <div id="game" className="page">
        GAME
      </div>
    );
  }
}
