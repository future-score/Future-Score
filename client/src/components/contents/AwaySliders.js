import React, { Component } from 'react'
import './cssContents/Sliders.css'

export default class AwaySliders extends Component {
  render() {
    return (
      <div>
        <div className="slider-wrapper">
          <div>
            <p>Attack</p>
          </div>
          <div>
            <input className="input-slider" type="range" min="0" max="2.2" defaultValue="2" step="0.01"/>
          </div>
        </div>
        <div className="slider-wrapper">
          <div>
            <p>Defense</p>
          </div>
            <div>
            <input className="input-slider" type="range" min="-2" max="0" defaultValue="2" step="0.01"/>
            </div>
          </div>
          <div className="slider-wrapper">
          <div>
            <p>Brain</p>
          </div>
            <div>
            <input className="input-slider" type="range" min="1" max="2" defaultValue="2" step="0.01"/>
            </div>
          </div>
      </div>
    )
  }
}
