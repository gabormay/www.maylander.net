import React, { Component } from 'react';
import './MainPage.css';

import { Jumbotron } from 'reactstrap';

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
       <Jumbotron>
            <h1 className="display-3">maylander.net - coming soon</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default MainPage;
