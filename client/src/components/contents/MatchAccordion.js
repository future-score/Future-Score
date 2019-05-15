import React, { Component } from 'react';
import DBservice from '../../services/DBservice'
import "./cssContents/Accordion.css";
import NavBar from './NavBar';

export default class MatchAccordion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: undefined
        }
    }

    render() {
        return (
            <div className="segunda">
                <div className="undostres">
                    <h3>Name {this.props.homeTeam.name}</h3>
                    <img className="segunda-image" src={this.state.props.homeTeam.createUrl} width="50px" alt="" />
                </div>
                <div className="premier">
                    <h3>Name {this.props.awayTeam.name}</h3>
                    <img className="premier-image" src={this.state.props.awayTeam.createUrl} width="50px" alt="" />
                </div>
            </div>
        )
    }

}