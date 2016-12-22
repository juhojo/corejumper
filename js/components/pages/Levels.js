import React from 'react';
import ReactDOM from 'react-dom';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';
import GridItem from '../reusable/GridItem';
import { Scrollbars } from 'react-custom-scrollbars';

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
    scrollbarWidth: 0,
    scrollbarHeight: 0,
  }

  setSelectedLevel(i,e){
    this.setState({ selectedLevel: i });
  }

  componentDidMount(nextProps) {
    this.onMount();
    const gridRect = ReactDOM.findDOMNode(this.refs.grid).getBoundingClientRect();
    this.setState({
      scrollbarWidth: gridRect.width,
      scrollbarHeight: gridRect.height,
    });
  }

  render (){
    const { scrollbarWidth, scrollbarHeight } = this.state;
    return (
      <SubPageContent {...this.props}>
        <h1>Levels</h1>
        <div ref="grid" className="grid">
          <Scrollbars
            style={{ width: scrollbarWidth, height: scrollbarHeight }}
            renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
            renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}>
            <div className="grid-content" style={{ width: `${this.levels.length * 160}px` }}>
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
          </Scrollbars>
        </div>
      </SubPageContent>
    );
  }
}
