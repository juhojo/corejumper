import React, {Component} from 'react';

export default class GridItem extends Component{

  render (){
    const { currentLevel, selected, number, name } = this.props;
    let itemClass = 'grid-item';
    itemClass += currentLevel.number > number ? ' locked' : '';
    itemClass += selected ? ' selected' : '';
    return (
      <div className={itemClass}
        onMouseEnter={this.props.onMouseEnter}>
        <div className="grid-item-content">
          <span>{number}</span>
        </div>
      </div>
    );
  }
}
