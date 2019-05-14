import React, { Component } from 'react';
import DBservice from '../../services/DBservice'
import "./cssContents/Accordion.css";


import NavBar from './NavBar';

export default class MatchAccordion extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.services = new DBservice()
  }

  getMatchDays = () => {
    return this.services.getAllMatches()
        .then(data=>{
           this.setState({
            
              data
            })
        })
  }


  componentDidMount() {
    this.getMatchesMatchday()
  }

  render() {
      return (
        <div className="segunda">
            <div className="undostres">

                <img className="segunda-image"src={this.state.props.homeTeam.createUrl} width= "50px" alt=""/>
            </div>
            <div className="premier">
                <img className="premier-image" src={this.state.props.awayTeam.createUrl} width= "50px" alt=""/>
            </div>
        </div>
      )
  }

}