import React, { Component } from 'react';
import DBservice from '../../services/DBservice'
import "./cssContents/Accordion.css";
import NavBar from './NavBar';

export default class MatchAccordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <div className="segunda">
                <div className="undostres">
                    <h3>{this.state.data.homeTeam.name}</h3>
                    <img className="segunda-image" src={this.state.data.homeTeam.crestUrl} width="50px" alt="" />
                </div>
                <div className="premier">
                    <h3>{this.state.data.awayTeam.name}</h3>
                    <img className="premier-image" src={this.state.data.awayTeam.crestUrl} width="50px" alt="" />
                </div>
            </div>
        )
    }

}