import React, {Component} from 'react';

export default class Game extends Component{

  static propTypes={
    navigate: React.PropTypes.func,
  }

  keypressHandler(e){
    if(e.which==27 || e.which==8) this.props.exit();
  }

  componentDidMount(){
    window.addEventListener('keydown', this.keypressHandler.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.keypressHandler.bind(this))
  }

  render (){
    return (
      <div id="game" className="page">
        GAME
      </div>
    );
  }
}
