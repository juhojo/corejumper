import React, {Component} from 'react';
import classNames from 'classnames';

export default class GridItem extends Component{

  render (){
    const { selected, level } = this.props;
    return (
      <div
        className={classNames('grid-item', {locked: !level.unlocked, selected})}
        onMouseEnter={this.props.onMouseEnter}
      >
        <div className="grid-item-content">
          <span>{level.number}</span>
        </div>
      </div>
    );
  }

}
