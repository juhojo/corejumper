import React, {Component} from 'react';

export default class LargeButton extends Component{
  static propTypes={
    title: React.PropTypes.string,
    onMouseEnter: React.PropTypes.func,
    onClick: React.PropTypes.func,
    selected: React.PropTypes.bool,
  };

  render (){
    const {title, selected} = this.props;
    const classes=selected?'selected':'';
    return (
      <div 
        onClick={this.props.onClick} 
        onMouseEnter={this.props.onMouseEnter}
        className={`large-button ${classes}`} ref={input=>{this.element=input;}}>
        {title}
      </div>
    );
  }
}
