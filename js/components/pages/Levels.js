import React from 'react';
import ReactDOM from 'react-dom';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';
import GridItem from '../reusable/GridItem';
import LevelDetails from '../reusable/LevelDetails';
import Scrollbar from '../reusable/Scrollbar';
import { TweenLite, Sine } from 'gsap';
import 'ScrollToPlugin'; // Using aliases in webpack.config.js allowes using GASP-plugins

export default class Levels extends SubPage{
  grid=null;

  state = {
    selectedLevel: this.props.selectedLevel,
  }

  componentDidMount(nextProps) {
    super.componentDidMount();
    this.grid=ReactDOM.findDOMNode(this.refs.grid);
    this.props.setKeybinds({
      37: this.props.exit,
      8: this.props.exit,
      38: this.moveUp,
      40: this.moveDown,
      39: this.startGame,
    });
    this.centralizeCurrent();
  }

  startGame=()=>{
    if(this.props.progress[this.state.selectedLevel].unlocked){
      this.setRotation(true);
      this.props.setSelectedLevel(
        this.state.selectedLevel,
        ()=>{this.props.navigate('game')}
      );
    }

  }

  setSelectedLevel(selectedLevel, e){
    this.setState({ selectedLevel });
  }

  gridItemMouseEnterHandler(i,e){
    if(i!==this.state.selectedLevel){
      this.setSelectedLevel(i);
      this.slideGridItemIntoView(i);
    }
  }

  moveUp=()=>{
    const { progress } = this.props;
    const { selectedLevel } = this.state;
    (selectedLevel)==0
      ? this.setSelectedLevel(progress.length-1)
      : this.setSelectedLevel(selectedLevel-1)
    ;
    this.centralizeCurrent();
  }

  moveDown=()=>{
    const { progress } = this.props;
    const { selectedLevel } = this.state;
    (selectedLevel)==progress.length-1
      ? this.setSelectedLevel(0)
      : this.setSelectedLevel(selectedLevel+1)
    ;
    this.centralizeCurrent();
  }

  animateScroll(elem, scrollTo) {
    TweenLite.to(elem, .3, {scrollTo: elem.scrollTop+scrollTo, ease: Sine.easeInOut});
  }

  centralizeCurrent=()=>{
    const currentGridItem=this.grid.getElementsByClassName('grid-item')[this.state.selectedLevel];
    const offsetTopShouldBe=this.grid.offsetHeight/2-currentGridItem.offsetHeight/2;
    const offsetTopIs=currentGridItem.getBoundingClientRect().top-this.grid.getBoundingClientRect().top;
    this.animateScroll(currentGridItem.parentElement.parentElement, offsetTopIs-offsetTopShouldBe);
  }

  slideGridItemIntoView=which=>{
    const currentGridItem=this.grid.getElementsByClassName('grid-item')[which];
    const offsetTopIs=currentGridItem.getBoundingClientRect().top-this.grid.getBoundingClientRect().top;
    const maxOffset=this.grid.offsetHeight-currentGridItem.offsetHeight;
    let offsetIncement=0;
    if(offsetTopIs<0) offsetIncement=offsetTopIs;
    else if(offsetTopIs>maxOffset) offsetIncement=offsetTopIs-maxOffset;
    this.animateScroll(currentGridItem.parentElement.parentElement, offsetIncement*1.2);
  }

  render (){
    const { progress, setKeybinds, userProgress } = this.props;
    const { selectedLevel } = this.state;
    return (
      <SubPageContent {...this.props} style={{height: '100%'}} id="levels">
        <div ref="grid" className="grid">
          <Scrollbar>
            {progress.map((level, i) =>
              <GridItem
                key={i}
                level={level}
                selected={selectedLevel === i}
                onMouseEnter={this.gridItemMouseEnterHandler.bind(this, i)}
              />
            )}
          </Scrollbar>
        </div>
        <div className="level-details">
          <LevelDetails
            selectedLevel={progress[selectedLevel]}
            progress={progress}
            startGame={this.startGame}
          />
        </div>
      </SubPageContent>
    );
  }
}
