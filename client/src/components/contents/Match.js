import React, { Component } from 'react'
import NavBar from './NavBar'
import DBservice from '../../services/DBservice'
import Predservice from '../../services/Predservice'
import './cssContents/Match.css'

export default class Match extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      prediction : null
    }
    this.services = new DBservice()
    this.predServices = new Predservice()
    this.getOneMatch()
  }

  getOneMatch = () => {
    return this.services.getMatch(this.props.match.params.id)
        .then(data=>{
           this.setState({
             ...this.state,
             data : data},()=>{
             this.getPrediction()
           })
        })
  }

  getPrediction = () => {
    const consultData = [
      this.state.data.homeTeam.gamma,
      this.state.data.homeTeam.alfa,
      this.state.data.homeTeam.beta,
      this.state.data.awayTeam.alfa,
      this.state.data.awayTeam.beta,
      this.state.data.homeTeam.nu1,
      this.state.data.awayTeam.nu2,
      this.state.data.homeTeam.ro
    ]
    this.predServices.getPrediction(consultData)
    .then(data=>{
           this.setState({
             ...this.state,
             prediction : data
            })
        })
  }

  render() {
    console.log(this.state.prediction)
    if (Object.entries(this.state.data).length > 0) {
    return (
      <div className="match-container">
      <NavBar></NavBar>
      <div className="match">
          <div className="segunda">
              <div className="undostres">
                <h2>{this.state.data.homeTeam.name}</h2>
                <img src={this.state.data.homeTeam.crestUrl} alt="shield team"/>
              </div>
              <div className="premier">
                <h2>{this.state.data.awayTeam.name}</h2>
                <img src={this.state.data.awayTeam.crestUrl} alt="shield team"/>
              </div>
            </div>
      </div>
    </div>
    )
  } else return null
} 
}

