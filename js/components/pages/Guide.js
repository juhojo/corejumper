import React from 'react';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';
import KeyboardKey from '../reusable/KeyboardKey';

export default class Guide extends SubPage{
  render (){
    return (
      <SubPageContent {...this.props}>
        <h1>Guide</h1>
        <h2>Objective</h2>
        <ul>
          <li>avoid obstacles</li>
          <li>avoid center</li>
          <li>collect stars</li>
          <li>as fast as you can</li>
        </ul>
        <h2>Controls on a touch device:</h2>
        <p>Tap ☟ anywhere to jump</p>
        <p>Swipe ↔ anywhere to move</p>
        <h2>Controls on a keyboard:</h2>
        <p><KeyboardKey>↑</KeyboardKey>/<KeyboardKey>W</KeyboardKey>/<KeyboardKey>space</KeyboardKey> to jump</p>
        <p><KeyboardKey>←</KeyboardKey><KeyboardKey>→</KeyboardKey>/<KeyboardKey>A</KeyboardKey><KeyboardKey>D</KeyboardKey> to move</p>
        <p><KeyboardKey>Esc</KeyboardKey>/<KeyboardKey>pause break</KeyboardKey>/<KeyboardKey>Backspace</KeyboardKey> to pause</p>
        <h2>Navigation</h2>
        <p>In addition to clicking and tapping, you can navigate all menus using <KeyboardKey>↑</KeyboardKey><KeyboardKey>←</KeyboardKey><KeyboardKey>↓</KeyboardKey><KeyboardKey>→</KeyboardKey> and <KeyboardKey>W</KeyboardKey><KeyboardKey>A</KeyboardKey><KeyboardKey>S</KeyboardKey><KeyboardKey>D</KeyboardKey></p>
      </SubPageContent>
    );
  }
}
