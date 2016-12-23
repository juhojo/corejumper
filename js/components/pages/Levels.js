import React from 'react';
import ReactDOM from 'react-dom';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';
import GridItem from '../reusable/GridItem';
import LevelDetails from '../reusable/LevelDetails';
import Scrollbar from '../reusable/Scrollbar';

export default class Levels extends SubPage{

  state = {
    selectedLevel: this.props.currentProgress,
    scrollbarWidth: 0,
    scrollbarHeight: 0,
  }

  setSelectedLevel(i,e){
    this.setState({ selectedLevel: this.props.progress[i] });
  }

  componentDidMount(nextProps) {
    super.componentDidMount();
    window.addEventListener('resize', this.handleResize);
    this.setGridRect(ReactDOM.findDOMNode(this.refs.grid).getBoundingClientRect());
    this.props.setKeybinds({
      37: this.props.exit,
      8: this.props.exit,
      38: this.moveUp,
      40: this.moveDown,
      // 39: this.startGame, // TODO
    });
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

  moveUp=()=>{
    const { progress } = this.props;
    const { selectedLevel } = this.state;
    (selectedLevel.number-1)==0
      ? this.setSelectedLevel(progress.length-1)
      : this.setSelectedLevel((selectedLevel.number-1)-1)
    ;
  }

  moveDown=()=>{
    const { progress } = this.props;
    const { selectedLevel } = this.state;
    (selectedLevel.number-1)==progress.length-1
      ? this.setSelectedLevel(0)
      : this.setSelectedLevel((selectedLevel.number-1)+1)
    ;
  }

  render (){
    const { progress, currentProgress, setKeybinds } = this.props;
    const { scrollbarWidth, scrollbarHeight, selectedLevel } = this.state;
    return (
      <SubPageContent {...this.props} style={{height: '100%'}} id="levels">
        <div ref="grid" className="grid">
          <Scrollbar>
            <div style={{padding: 10}}>
              {progress.map((level, i) =>
                <GridItem
                  key={i}
                  number={level.number}
                  currentLevel={currentProgress}
                  setCurrentLevel={currentProgress}
                  onMouseEnter={this.setSelectedLevel.bind(this, i)}
                  selected={selectedLevel.number === level.number}
                />
              )}
            </div>
          </Scrollbar>
        </div>
        <div className="title">
          <h1>Levels</h1>
        </div>
        <div className="level-details">
          <LevelDetails selectedLevel={selectedLevel} />
        </div>
      </SubPageContent>
    );
  }
}
