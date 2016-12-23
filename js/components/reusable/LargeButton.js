import React, {Component} from 'react';
import classNames from 'classnames';

export default class LargeButton extends Component{
  static propTypes={
    title: React.PropTypes.string,
    onMouseEnter: React.PropTypes.func,
    onClick: React.PropTypes.func,
    selected: React.PropTypes.bool,
  };

  render (){
    const { title, selected, disabled } = this.props;
    let classes=selected?'selected':'';
    classes+=disabled?' disabled':'';
    classNames('foo', { bar: true }); // => 'foo bar
    return (
      <div
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        className={classNames('large-button', { selected, disabled })}>
        {title}
      </div>
    );
  }
}
