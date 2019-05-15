import React, { Component } from 'react'
import './cssContents/Sliders.css'

export default class HomeSliders extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div >
       <div className="slider-wrapper">
          <div>
            <p>Home</p>
            </div>
          {/* < input class="slider is-fullwidth" step="1" min="0" max="100" value="50" type="range" /> */}

            <input className="diocane" type="range" min="0" max="1" defaultValue="0.5" step="0.01"/>
          
        </div>
        <div className="slider-wrapper">
          <div>
            <p>Attack</p>
          </div>
            <div>
            <input className="diocane" type="range" min="0" max="2.2" defaultValue="1" step="0.01"/>
            </div>
          </div>
          <div className="slider-wrapper">
          <div>
            <p>Defense</p>
          </div>
            <div>
            <input type="range" min="-2" max="0" defaultValue="-1" step="0.01"/>
            </div>
          </div>
          <div className="slider-wrapper">
          <div>
            <p>Brain</p>
          </div>
            <div>
            <input type="range" min="1" max="2" defaultValue="1.5" step="0.01"/>
            </div>
          </div>
      </div>
    )
  }
}
