import React from 'react';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';
import KeyboardKey from '../reusable/KeyboardKey';

export default class About extends SubPage{
  render (){
    return (
      <SubPageContent {...this.props}>
        <h1>Guide</h1>
        <p>Avoid obstacles and falling into the center.</p>
        <p><KeyboardKey>↑</KeyboardKey> or <KeyboardKey>space</KeyboardKey> to jump</p>
        <p><KeyboardKey>Esc</KeyboardKey> or <KeyboardKey>pause break</KeyboardKey> to pause</p>
        <p><KeyboardKey>Backspace</KeyboardKey> menu</p>
      </SubPageContent>
    );
  }
}
