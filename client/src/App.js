import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import NavBar from './components/contents/NavBar'
import BarChart from './components/contents/BarChart';
// import Accordion from './components/contents/Accordion';
import Competitions from './components/contents/Competitions';
import Match from './components/contents/Match';
import MatchDays from './components/contents/MatchDays';

// import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
// import Chart from 'chart.js'
// ReactChartkick.addAdapter(Chart)
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
<Competitions></Competitions>              {/* <Switch>
                <Route exact path="/contents" component={Contents}> </Route> 
              </Switch> */}
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
                <Route exact path='/' render={() => <Login getUser={this.getUser} />} />
                <Route exact path='/competitions' render={() => <Competitions getUser={this.getUser} />} />
                <Route exact path='/matchdays' render={() => <MatchDays />} />
                <Route exact path='/match/:id' component={Match} />
                <Route exact path='/barchart' render={() => <BarChart /> } />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
