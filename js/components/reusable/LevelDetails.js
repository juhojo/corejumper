import React, {Component} from 'react';
import LargeButton from './LargeButton';

export default class LevelDetails extends Component{

  playButtonHandler=e=>{
    if (this.props.selectedLevel.unlocked) console.log("navigate");
  }

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

  render (){
    const { selectedLevel, selectedLevel: { number, attempts, score, unlocked } } = this.props;
    return (
      <div className="container">
        <h2>Level {number}</h2>
        {this.renderUnlockedAndBeated(selectedLevel)}
        <p>Attempts {attempts}</p>
        <p>Best score: {score}</p>
        <LargeButton
          title="Play"
          onClick={this.playButtonHandler}
          disabled={!unlocked}
          selected={unlocked}
        />
      </div>
    );
  }
}
