import React, { Component } from 'react';
import "./cssContents/Accordion.css";
import DBservice from '../../services/DBservice';
import NavBar from './NavBar';
import BoxMatchDays from './BoxMatchDays';

let matchdays = []
let uniqueItems = undefined

export default class MatchDays extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            // uniqueItems: [],
            // openMatchDay: 0,
            // filteredMatchDay:[]
            competition: {}
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
                    this.getMatchesMatchDays()
                })
            })
    }


    getMatchesMatchDays = () => {
        var competition = {}

        this.state.data.forEach(match => {
            if (!competition.hasOwnProperty(match.matchday)) {
                competition[match.matchday] = []
            }

            competition[match.matchday].push(match)
        })
        this.setState({
            ...this.state,
            competition: competition
        })
    }

    // console.log(obj)

    // for (var key in obj) {
    // // console.log(key, obj)
    // console.log("estas viendo el dia " + key, obj[key])
    // }


    // mapMatchday = () => {
    //     Object.values(this.state.data).forEach(num => {
    //         matchdays.push(num.matchday)
    //         uniqueItems = [...new Set(matchdays)];

    //         this.setState({ 
    //             ...this.state, 
    //             uniqueItems: uniqueItems 
    //         })
    //     })
    // }

    // matchDayTransform= ()=>{
    //     console.log(this.state.data)
    //     let pr = Array(this.state.uniqueItems.length).fill([])
    //     this.state.data.map((oneMatch,idx)=>{   
    //         pr[oneMatch.matchday-1].push(oneMatch)
    //     })
    //     console.log(pr)
    // }

    // journyFilter=()=>{
    //     const oneJourney = this.state.data.filter(match=>{
    //         return match.matchday == this.state.openMatchDay
    //     })
    //     // console.log(oneJourney)
    //     this.setState({
    //         ...this.state,
    //         filteredMatchDay: oneJourney})
    // }

    componentDidMount = () => {
        this.getMatchDays()
    }

    // journySelector=(journy)=>{
    //     this.setState({
    //         ...this.state, 
    //         openMatchDay:journy},
    //         ()=>{this.journyFilter()
    //     })
    // }


    render() {
        const toShow = []

        for (var key in this.state.competition) {
            toShow.push(<BoxMatchDays key={key} data={this.state.competition[key]} num={key}/>)
        }

        // for (var key in competition)
        //     let matchdayNum = competition[key]
        //     console.log(key, obj)
        //     console.log("estas viendo el dia " + key, obj[key])

        return (
            <div>
                <NavBar></NavBar>
                <div>
                    {toShow}
                </div>
            </div>
        )
    }
}
