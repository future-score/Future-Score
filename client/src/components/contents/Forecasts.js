import React, { Component } from 'react'
import NavBar from './NavBar'
import './cssContents/Forecasts.css'
export default class Forecasts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false
    }
    this.displayPrediction = this.displayPrediction.bind(this)
  }
  displayPrediction = () => {
    const {display} = {...this.state}
    this.setState ({
      display: !display,
    })
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div  className="forecast-title">
          <h2>Your Forecasts</h2>
        </div>
        <div id="personal-image"><img id="user-user" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?cs=srgb&dl=adorable-animal-cat-20787.jpg&fm=jpg" width= "200px" alt="" /></div>
        <div className="forecast-container">
          <div className="match-forecast">
              <div className="home-team">
                  <img className="segunda-image"src="https://www.unionrayo.es/wp-content/uploads/2018/08/Atletico-de-Madrid.png" width= "50px" alt="" />
              </div>
              <button onClick={this.displayPrediction}><i className="fa fa-angle-double-down"></i></button>
              <div className="away-team">
                  <img className="premier-image" src="http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/253.png" width= "50px" alt="" />
              </div>
            </div>
          {this.state.display ? 
          <div className="prediction-container">
            <p>Your Prediction</p>
            <p>FS Prediction</p>
          </div>
          : null
          }
      </div>
      </div>
    )
  }
}
