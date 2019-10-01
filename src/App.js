import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SideBar from './SideBar';
import Main from './Main';
import './style.css';

const url = 'https://randomuser.me/api/?results=12';

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then( ({ results }) => {
        this.setState({
          users: results
        });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route
            path="/"
            exact={true}
            render={() => <h4>Fetch API with React and React Router Demo</h4>}
          />
          <div className="space-top">
            <div className="row">
              <div className="col-sm">
                <SideBar users={users} />
              </div>
              <div className="col-sm">
                <Main users={users} />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
