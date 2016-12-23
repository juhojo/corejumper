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
    const { title, selected, disabled, block } = this.props;
    return (
      <div
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        className={classNames('large-button', { selected, disabled, block })}>
        {title}
      </div>
    );
  }
}
