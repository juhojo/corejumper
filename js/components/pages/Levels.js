import React from 'react';
import ReactDOM from 'react-dom';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';
import GridItem from '../reusable/GridItem';
import Scrollbar from '../reusable/Scrollbar';
import LargeButton from '../reusable/LargeButton';

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
    super.componentDidMount();
    window.addEventListener('resize', this.handleResize);
    this.setGridRect(ReactDOM.findDOMNode(this.refs.grid).getBoundingClientRect());
  }

  handleResize=e=>{
    this.setGridRect(ReactDOM.findDOMNode(this.refs.grid).getBoundingClientRect());
  }

  setGridRect(rect){
    this.setState({
      scrollbarWidth: rect.width,
      scrollbarHeight: rect.height,
    });
  }

  render (){
    const { scrollbarWidth, scrollbarHeight } = this.state;
    return (
      <SubPageContent {...this.props} style={{height: '100%'}} id="levels">
        <div ref="grid" className="grid">
          <Scrollbar>
            <div style={{padding: 10}}>
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
          </Scrollbar>
        </div>
        <div className="title">
          <h1>Levels</h1>
        </div>
        <div className="level-details">
          <div className="container">
            <h2>Level 3</h2>
            <p>You've unlocked this level, but are yet to beat it.</p>
            <p>Attempts: 9</p>
            <p>Best score: 13</p>
            <LargeButton
                title="Play"
                selected={true}
            />
          </div>
        </div>
      </SubPageContent>
    );
  }
}
