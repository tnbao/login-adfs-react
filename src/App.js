import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import adalProvider from './ADFS/adalProvider'

class App extends Component {
  componentDidMount() {
    if (window.location.hash) {
      adalProvider._adal.saveTokenFromHash(adalProvider._adal.getRequestInfo(window.location.hash))
      window.location = window.location.origin
    }
  }
  loginADFS = () => {
    adalProvider.login();
  }
  logOutADFS = () => {
    adalProvider.logOut();
  }
  getUserADFS = () => {
    return adalProvider.getUser()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <button onClick={this.loginADFS}>
              Login
            </button>
            {this.getUserADFS() && <button onClick={this.logOutADFS}>
              Logout
            </button>}
          </div>
          <div>{this.getUserADFS() && JSON.stringify(this.getUserADFS())}</div>
        </header>
      </div>
    );
  }
}

export default App;
