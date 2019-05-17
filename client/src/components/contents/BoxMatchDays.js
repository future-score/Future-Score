import React, { Component } from 'react';
import "./cssContents/Accordion.css";
import MatchAccordion from './MatchAccordion';
import DBservice from '../../services/DBservice';
import MatchaDays from './MatchDays';

export default class BoxMatchDays extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
        }
        this.services = new DBservice()
    }

    // colapse=()=>{
    //     this.setState({...this.state,num:this.props.num})
    // }

    // getMatches = () => {
    //     return this.services.getAllMatches()
    //         .then(data => {
    //             this.setState({
    //                 ...this.state,
    //                 data
    //             })
    //         })
    // }

    // componentDidMount() {
    //     console.log(this.props.dataMatches)
    // }


    render() {
        return (
            // <div style={{color: "white"}}>
            //     {this.props.data.map(match => <div>{match.homeTeam.name}</div>)}
            //     xxxxxxxx
            // </div>
            <div className="container">
                <ul className="accordion">
                    <li className="accordion__item">
                        <input type="checkbox" defaultChecked />
                        <i className="accordion__arrow"></i>
                        <h2 className="accordion__title">Jornada {this.props.num}</h2>
                        <div className="vs-container">
                                {this.state.data.map((match, idx)=>{
                                    return (
                            // <div className="segunda">
                                        <MatchAccordion key={idx} data={match}/>
                            // </div>
                                    )})
                                })
                                    
                                }
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}


// {this.props.filteredMatchDay.map((team, idx) => {
//     return (
//         <p>{team.homeTeam.name}</p>
//         // <MatchAccordion dataMatches={this.props.dataMaches}>
//             // key = {idx}
//             // <p>{team.hometeam.name}</p> */}
//             /* homeTeam.createUrl = {team.homeTeam.createUrl}
//             awayTeam.name = {team.awayTeam.name}
//             awayTeam.createUrl = {team.awayTeam.createUrl} */
//         // </MatchAccordion>
//     )
// })}
