import React, {Component} from 'react';

export default class KeyboardKey extends Component{
  render (){
    let outerClass='keyboard-key';
    let innerClass='';
    let content=this.props.children;
    if(this.props.children.length>1){
      if(~this.props.children.indexOf(' ')){
        innerClass+=' multi-line';
        content=this.props.children.split(' ').join('\n');
      }else{
        innerClass+=' small';
        if(this.props.children.length>3){
          outerClass+=' wide';
        }
      }
    }
    return <span className={outerClass}>
      <span className={innerClass}>
        {content}
      </span>
    </span>;
  }
}
