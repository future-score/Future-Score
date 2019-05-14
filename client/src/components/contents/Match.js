import React, { Component } from 'react'
import NavBar from './NavBar'
import DBservice from '../../services/DBservice'
import './cssContents/Match.css'

export default class Match extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
    this.services = new DBservice()
  }

  getOneMatch = () => {
    return this.services.getMatch(this.props.match.params.id)
        .then(data=>{
           this.setState({
              data
            })
        })
  }

  componentDidMount () {
      this.getOneMatch()
    }

  render() {
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

