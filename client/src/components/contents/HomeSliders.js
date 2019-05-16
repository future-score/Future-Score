import React, { Component } from 'react'
import './cssContents/Sliders.css'
import {debounce} from 'underscore';

export default class HomeSliders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeTeamGamma: this.props.data.homeTeam.gamma,
      homeTeamAlfa: this.props.data.homeTeam.alfa,
      homeTeamBeta: this.props.data.homeTeam.beta,
      homeTeamNu1: this.props.data.homeTeam.nu1,
    }
  }

  sendSliders = () => {
    // console.log(this.state)
    this.props.getSliders(this.state)
  }

  handleInput = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }



  render() {
    return (
      <div onChange={() => (debounce(()=> this.sendSliders(), 3000))()}>
       <div className="slider-wrapper">
          <div>
            <p>Factor Casa</p>
            </div>
          {/* < input class="slider is-fullwidth" step="1" min="0" max="100" value="50" type="range" /> */}

            <input onChange={e => this.handleInput(e)} className="diocane" name="homeTeamGamma" type="range" min="0" max="1" defaultValue={this.state.homeTeamGamma} step="0.01"/>
        </div>
        <div className="slider-wrapper">
          <div>
            <p>Ataque</p>
          </div>
            <div>
            <input onChange={e => this.handleInput(e)} className="diocane" name="homeTeamAlfa" type="range" min="0" max="2.2" defaultValue={this.state.homeTeamAlfa} step="0.01"/>
            </div>
          </div>
          <div className="slider-wrapper">
          <div>
            <p>Defensa</p>
          </div>
            <div>
            <input onChange={e => this.handleInput(e)} type="range" min="-2" max="0" name="homeTeamBeta" defaultValue={this.state.homeTeamBeta} step="0.01"/>
            </div>
          </div>
          <div className="slider-wrapper">
          <div>
            <p>Táctica</p>
          </div>
            <div>
            <input onChange={e => this.handleInput(e)} type="range" min="1" max="2" name="homeTeamNu1" defaultValue={this.state.homeTeamNu1} step="0.01"/>
            </div>
          </div>
      </div>
    )
  }
}
