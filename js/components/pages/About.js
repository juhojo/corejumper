import React from 'react';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';

export default class About extends SubPage{
  componentDidMount() {
    this.onMount();
  }
  render (){
    return (
      <SubPageContent {...this.props}>
          <h1>About</h1>
          <p>Made by Juho Jokela & Ilpo Oksanen</p>
          <p>Built using React.</p>
      </SubPageContent>
    );
  }
}
