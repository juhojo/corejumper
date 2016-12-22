import React from 'react';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';
import KeyboardKey from '../reusable/KeyboardKey';
import GridItem from '../reusable/GridItem';

export default class Levels extends SubPage{
  levels = [
    {number: 0, name: 'Practise'},
    {number: 1, name: 'Easy'},
    {number: 2, name: 'Medium'},
    {number: 3, name: 'Hard'},
    {number: 4, name: 'Expert'},
    {number: 5, name: 'Impossible'},
    {number: 6, name: 'Godlike'},
  ];

  state = {
    selectedLevel: this.props.currentLevel.number,
  }

  setSelectedLevel(i,e){
    this.setState({ selectedLevel: i });
  }

  render (){
    return (
      <SubPageContent {...this.props}>
        <h1>Levels</h1>
        <div className="grid">
          <div className="grid-content"  style={{ width: `${this.levels.length * 160}px` }}>
            {this.levels.map((level, i) =>
              <GridItem
                key={i}
                number={level.number}
                name={level.name}
                currentLevel={this.props.currentLevel}
                setCurrentLevel={this.props.currentLevel}
                onMouseEnter={this.setSelectedLevel.bind(this, i)}
                selected={this.state.selectedLevel === level.number}
              />
            )}
          </div>
        </div>
      </SubPageContent>
    );
  }
}
