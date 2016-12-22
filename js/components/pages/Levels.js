import React from 'react';
import ReactDOM from 'react-dom';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';
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
      <SubPageContent {...this.props}>
        <div className="flexible-content">
          <div ref="grid" className="grid">
            <div className="grid-content" style={{ height: `${this.levels.length * 160}px` }}>
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
          <div>
            <h1>Levels</h1>
            <p>Some content...</p>
          </div>
        </div>
      </SubPageContent>
    );
  }
}
