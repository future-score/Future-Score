import React, { Component } from 'react';
// import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import NavBar from './components/contents/NavBar'
import BarChart from './components/contents/BarChart';
// import Accordion from './components/contents/Accordion';
import Competitions from './components/contents/Competitions';
import Match from './components/contents/Match';
import HomeSliders from './components/contents/HomeSliders';
import AwaySliders from './components/contents/AwaySliders';
import Profile from './components/contents/Profile';
import SearchBar from './components/contents/SearchBar';
import Forecasts from './components/contents/Forecasts';
import MatchDays from './components/contents/MatchDays';
import Userservice from './services/Userservice';

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
    // this.userService = new Userservice();
  }

  getUser = (userObj) => {
    // this.userService.getUser()
    // .then((data) => {
    this.setState({
      ...this.state,
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
      })
  }
  componentWillMount(){this.fetchUser()}


//   fetchUser = () => {
//       //utilizamos el método loggedin para cualquier momento que deseemos obtener la información del usuario quede guardada en el state de app
//       this.service.loggedin()
//         .then(response => {
//           this.setState({
//             loggedInUser: response
//           })
//         })
//         .catch(err => {
//           console.timeLog(err)
//           this.setState({
//             loggedInUser: false
//           })
//         })
// }

  fetchUser = () => {
    
    if (this.state.loggedInUser == null) {
      return this.service.loggedin()
      .then(response => {
        this.setState({
          ...this.state,
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

componentDidMount(){
  this.fetchUser()
}


  // render() {
  //   console.log(this.state)

  //   if (this.state.loggedInUser) {
  //     return (
  //       <React.Fragment>
  //         {/* <Redirect to="/home"></Redirect> */}
  //         <div className="App">
  //           <header className="App-header">
  //             <Competitions user={this.state.loggedInUser}/>         {/* <Switch>
  //               <Route exact path="/contents" component={Contents}> </Route> 
  //             </Switch> */}
  //           </header>
  //         </div>
  //       </React.Fragment>
  //     );
  //   } else {
  //     return (
  //       <React.Fragment>
  //         {/* <Redirect to="/login"></Redirect>  */}
  //         <div className="App">
  //           <header className="App-header">
  //             <Switch>
  //               <Route exact path='/signup' render={() => <Signup getUser={this.getUser} />} />
  //               <Route exact path='/' render={() => <Login getUser={this.getUser} />} />
  //               <Route exact path='/competitions' render={() => <Competitions user={this.state.loggedInUser}/>} />
  //               <Route exact path='/matchdays' render={() => <MatchDays />} />
  //               <Route exact path='/match/:id' component={Match} />
  //               <Route exact path='/barchart' render={() => <BarChart /> } />
  //               <Route exact path='/sliders' render={() => <HomeSliders />} />
  //               <Route exact path='/asliders' render={() => <AwaySliders />} />
  //               <Route exact path ='/profile/:id' render={() => <Profile />} />
  //               <Route exact path='/searchbar' render={() => <SearchBar />} />
  //               <Route exact path='/forecasts/:id' render={() => <Forecasts />} />
  //             </Switch>
  //           </header>
  //         </div>
  //       </React.Fragment>
  //     );
  //   }
  // }

  render() {

    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
        {/* <div>
          <NavBar user={this.state.loggedInUser}></NavBar>
        </div> */}
        <div className="App">
            <Switch>
            <Route exact path='/signup' render={() => <Signup getUser={this.getUser} />} />
            <Route exact path='/' render={() => <Login getUser={this.getUser} />} />
            <Route exact path='/competitions' render={() => <Competitions user={this.state.loggedInUser}/>} />
            <Route exact path='/matchdays' render={() => <MatchDays user={this.state.loggedInUser}/>} />
            <Route exact path='/match/:id' component={Match} user={this.state.loggedInUser}/>
            <Route exact path='/barchart' render={() => <BarChart user={this.state.loggedInUser}/> } />
            <Route exact path='/sliders' render={() => <HomeSliders user={this.state.loggedInUser}/>} />
            <Route exact path='/asliders' render={() => <AwaySliders user={this.state.loggedInUser}/>} />
            <Route exact path ='/profile/:id' render={() => <Profile user={this.state.loggedInUser}/>} />
            <Route exact path='/searchbar' render={() => <SearchBar user={this.state.loggedInUser}/>} />
            <Route exact path='/forecasts/:id' render={() => <Forecasts user={this.state.loggedInUser}/>} />
            </Switch>
        </div>
        </React.Fragment>
      )
      } else {
      return (
        <React.Fragment>
          <div className="App">
            <Switch>
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/' component={Login} />
            </Switch>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default App;
