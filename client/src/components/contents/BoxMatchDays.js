import React, { Component } from 'react';
import "./cssContents/Accordion.css";
import MatchAccordion from './MatchAccordion';
import DBservice from '../../services/DBservice';
import MatchaDays from './MatchDays';

export default class BoxMatchDays extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.services = new DBservice()
    }

    getMatches = () => {
        return this.services.getAllMatches()
            .then(data => {
                this.setState({
                    ...this.state,
                    data
                })
            })
    }

    componentDidMount() {
        this.getMatches()
    }



    render() {
        return (
            <div className="container">
                <ul className="accordion">
                    <li className="accordion__item">
                        <input type="checkbox" defaultChecked />
                        <i className="accordion__arrow"></i>
                        <h2 className="accordion__title">Jornada {this.props.num}</h2>
                        <div className="vs-container">
                            <div className="segunda">
                                    {this.props.dataMatches.map((team, idx) => {
                                        return (
                                            <MatchAccordion>
                                                key = {idx}
                                                homeTeam.name = {team.homeTeam.name}
                                                homeTeam.createUrl = {team.homeTeam.createUrl}
                                                awayTeam.name = {team.awayTeam.name}
                                                awayTeam.createUrl = {team.awayTeam.createUrl}
                                            </MatchAccordion>
                                        )
                                    })}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}