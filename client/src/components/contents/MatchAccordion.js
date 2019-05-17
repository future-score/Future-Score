import React, { Component } from 'react';
import DBservice from '../../services/DBservice'
import "./cssContents/Accordion.css";
import NavBar from './NavBar';
import { Link } from 'react-router-dom'

export default class MatchAccordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
                <div className="match-day-container">
                <div className="home-team-match">
                    <p className="team-name">{this.state.data.homeTeam.name}</p>
                    <img className="segunda-image" src={this.state.data.homeTeam.crestUrl} width="50px" alt="" />
                </div>
                    <Link to={`/match/${this.state.data.id}`} className="prediction-button"><button><i class="zmdi zmdi-eye prediction"></i></button></Link>
                <div className="away-team-match">
                    <p className="team-name">{this.state.data.awayTeam.name}</p>
                    <img className="premier-image" src={this.state.data.awayTeam.crestUrl} width="50px" alt="" />
                </div>
            </div>
        )
    }

}