import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';


import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Contents from './components/contents/Contents'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
      })
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      //utilizamos el método loggedin para cualquier momento que deseemos obtener la información del usuario quede guardada en el state de app
      return this.service.loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          })
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  render() {
    this.fetchUser()

    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          {/* <Redirect to="/home"></Redirect> */}

          <div className="App">
            <header className="App-header">
              {/* <Contents></Contents> */}
              <Switch>
                <Route exact path='/contents' render={() => <Contents getUser={this.getUser} />} />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {/* <Redirect to="/login"></Redirect>  */}
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route exact path='/signup' render={() => <Signup getUser={this.getUser} />} />
                <Route exact path='/login' render={() => <Login getUser={this.getUser} />} />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
