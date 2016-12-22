import React from 'react';
import SubPage from '../reusable/SubPage.js';
import SubPageContent from '../reusable/SubPageContent.js';

export default class Settings extends SubPage{
  componentDidMount() {
    this.onMount();
  }
  render (){
    return (
      <SubPageContent {...this.props}>
          <h1>Settings</h1>
          <p>Nothing to change yet! ¯\_(ツ)_/¯</p>
      </SubPageContent>
    );
  }
}
