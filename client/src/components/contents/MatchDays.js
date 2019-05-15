import React, { Component } from 'react';
import "./cssContents/Accordion.css";
import DBservice from '../../services/DBservice';
import NavBar from './NavBar';
import BoxMatchDays from './BoxMatchDays';

let matchdays = []
let uniqueItems = undefined

export default class MatchaDays extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            uniqueItems: [],
            openMatchDay: 0
        }
        this.services = new DBservice()
    }

    getMatchDays = () => {
        return this.services.getAllMatches()
            .then(data => {
                this.setState({
                    ...this.state,
                    data
                }, () => {
                    this.mapMatchday()
                })
            })
    }

    mapMatchday = () => {
        Object.values(this.state.data).forEach(num => {
            matchdays.push(num.matchday)
            uniqueItems = [...new Set(matchdays)];

            this.setState({ 
                ...this.state, 
                uniqueItems: uniqueItems 
            })
        })
    }

    componentDidMount() {
        this.getMatchDays()
    }


    render() {
        return (
            <div>
                <NavBar></NavBar>
                    {this.state.uniqueItems.map((matchday, idx) => {
                        return (
                            <BoxMatchDays dataMatches={this.state.data}>
                                key = {idx}
                                num = {matchday.num}
                            </BoxMatchDays>
                        )
                    })}
            </div>
        )
    }
}
