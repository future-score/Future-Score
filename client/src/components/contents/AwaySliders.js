import React, { Component } from 'react'
import './cssContents/Sliders.css'
import {debounce} from 'underscore';

export default class AwaySliders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      awayTeamAlfa: this.props.data.awayTeam.alfa,
      awayTeamBeta: this.props.data.awayTeam.beta,
      awayTeamNu2: this.props.data.awayTeam.nu2,
    }
  }

  sendSlidersAway = () => {
    // console.log(this.state)
    this.props.getSlidersAway(this.state)
  }

  changeInput = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }




  render() {
    return (
      <div onChange={() => (debounce(()=> this.sendSlidersAway(), 3000))()}>
        <div className="slider-wrapper">
          <div>
            <p>Ataque</p>
          </div>
          <div>
            <input onChange={e => this.changeInput(e)} name="awayTeamAlfa" className="input-slider" type="range" min="0" max="2.2" defaultValue={this.state.awayTeamAlfa} step="0.01"/>
          </div>
        </div>
        <div className="slider-wrapper">
          <div>
            <p>Defensa</p>
          </div>
            <div>
            <input onChange={e => this.changeInput(e)} name="awayTeamBeta" className="input-slider" type="range" min="-2" max="0" defaultValue={this.state.awayTeamBeta} step="0.01"/>
            </div>
          </div>
          <div className="slider-wrapper">
          <div>
            <p>Táctica</p>
          </div>
            <div>
            <input onChange={e => this.changeInput(e)} name="awayTeamNu2" className="input-slider" type="range" min="1" max="2" defaultValue={this.state.awayTeamNu2} step="0.01"/>
            </div>
          </div>
      </div>
    )
  }
}
