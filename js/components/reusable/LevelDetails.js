import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LargeButton from './LargeButton';
import TweenMax, {Sine} from 'gsap';
import Centerer from './Centerer';

export default class LevelDetails extends Component{
  animationValues=['-5%','5%'];

  renderUnlockedAndBeated=selectedLevel=>{
    const { unlocked, finished } = selectedLevel;
    return (
      <p>
        {(unlocked && finished) && `You've beat the level with the following stats:`}
        {(unlocked && !finished) && `You've unlocked this level, but are yet to beat it.`}
        {!unlocked && `You are yet to beat the previous levels.`}
      </p>
    );
  }

  componentWillEnter(callback){
    TweenMax.fromTo(
      ReactDOM.findDOMNode(this), .2,
      {
        top: this.props.move.up ? this.animationValues[0] : this.animationValues[1], 
        opacity: 0,
      },
      {
        top: '0%', 
        opacity: 1, 
        onComplete: callback, 
        ease: Sine.easeInOut,
      }
    );
  }

  componentWillLeave(callback){
    TweenMax.fromTo(
      ReactDOM.findDOMNode(this), .1,
      {
        top: '0%', 
        opacity: 1,
      },
      {
        top: this.props.move.up ? this.animationValues[1] : this.animationValues[0], 
        opacity: 0, 
        onComplete: callback, 
        ease: Sine.easeInOut,
      }
    );
  }

  render (){
    const { 
      selectedLevel, 
      selectedLevel: { 
        number, 
        attempts, 
        score, 
        unlocked,
      }, 
      startGame,
    } = this.props;
    return (
      <Centerer>
        <h2>Level {number}</h2>
        {this.renderUnlockedAndBeated(selectedLevel)}
        <p>Attempts {attempts}</p>
        <p>Best score: {score}</p>
        <LargeButton
          title="Play"
          onClick={startGame}
          disabled={!unlocked}
          selected={unlocked}
        />
      </Centerer>
    );
  }
}
