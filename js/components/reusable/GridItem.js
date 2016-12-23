import React, {Component} from 'react';
import classNames from 'classnames';

export default class GridItem extends Component{

  render (){
    const { currentLevel, selected, number } = this.props;
    return (
      <div
        className={classNames('grid-item', {locked: (currentLevel.number < number), selected})}
        onMouseEnter={this.props.onMouseEnter}>
        <div className="grid-item-content">
          <span>{number}</span>
        </div>
      </div>
    );
  }
}
