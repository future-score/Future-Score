import React, { Component } from 'react'
import Chart from 'chart.js';
import ReactChartkick, { ColumnChart } from 'react-chartkick';
import NavBar from './NavBar'
import './cssContents/Match.css'
// import BarChart from './BarChart';
import HomeSliders from './HomeSliders'
import GreenTick from './GreenTick';
import AwaySliders from './AwaySliders';
import './cssContents/BarChart.css';
ReactChartkick.addAdapter(Chart);


export default class Match extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      data: {},
      prediction: null,
      display: false,
      displayAway: false,
      show: false,
      chartValues: [["1", 32], ["X", 46], ["2", 28]]
    };
    this.services = new DBservice()
    this.predServices = new Predservice()
    this.getOneMatch()
    this.displaySlider = this.displaySlider.bind(this)
    this.displaySliderAway = this.displaySliderAway.bind(this)
    this.saveButton = this.saveButton.bind(this)
  }
  
  getOneMatch = () => {
    return this.services.getMatch(this.props.match.params.id)
        .then(data=>{
           this.setState({
             ...this.state,
             data : data},()=>{
             this.getPrediction()
           })
        })
  }

  getPrediction = () => {
    const consultData = [
      this.state.data.homeTeam.gamma,
      this.state.data.homeTeam.alfa,
      this.state.data.homeTeam.beta,
      this.state.data.awayTeam.alfa,
      this.state.data.awayTeam.beta,
      this.state.data.homeTeam.nu1,
      this.state.data.awayTeam.nu2,
      this.state.data.homeTeam.ro
    ]
    this.predServices.getPrediction(consultData)
    .then(data=>{
           this.setState({
             ...this.state,
             prediction : data
            })
        })
  }

  saveButton = () => {
		const {show} = {...this.state};
		this.setState({show: !show},()=>{
			this.backToBegin()
		})
	}

	backToBegin = () =>{
		setTimeout(()=>{
			console.log("llega")
			const {show} = {...this.state};
			this.setState({show: !show})
		},3000) 
  }
  
  displaySlider() {
    const {display} = {...this.state}

    this.setState({
      display: !display,
      displayAway: false
    })
  }
  displaySliderAway() {
    const {displayAway} = {...this.state}
    this.setState({
      displayAway: !displayAway,
      display: false
    })
  }

  testChart() {
    this.setState(
      {
        ...this.state,
        chartValues: [["1", 12], ["X", 46], ["2", 128]]
      }
    )
  }
  render() {
    if (Object.entries(this.state.data).length > 0) {
    return (
      <div className="match-container">
      <NavBar></NavBar>
      <div className="match">
          <div className="segunda">
              <div className="undostres">
                  <h2>{this.state.data.homeTeam.name}</h2>
                  <img onClick={this.displaySlider} className="segunda-image"src={this.state.data.homeTeam.crestUrl} width= "50px" alt="shield team" />
              </div>
              <div className="premier">
                  <h2>{this.state.data.awayTeam.name}</h2>
                  <img onClick={this.displaySliderAway} className="premier-image" src={this.state.data.awayTeam.crestUrl} width= "50px" alt="shield team" />
              </div>
            </div>
      </div>
      
    {this.state.show?null: <div>
  <ColumnChart library={
  { responsive: true,
    scales:{
      yAxes:[
        {
          display: false
        },
      ],
      xAxes: [
        {
          categoryPercentage: 0.2,
          barPercentage: 0.4,
          barThickness: 30,
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontSize: 50
        }
        }
      ]
    }
  }
} legend={false} stacked={false} data={this.state.chartValues} /> 

 <div className="button-save">
  <button onClick={() => this.testChart()}>Dani</button>
</div> 
  <div className="button-save">
    <button  onClick={this.saveButton}>Save</button>
  </div>
  </div>
      }
  

      <div>
        <br></br>
        {this.state.show && <GreenTick />}
      </div>     
            {this.state.show ? null :
              <div>
                {this.state.display && <HomeSliders />}
              </div>
            }

              {this.state.show ? null :
              <div>
                {this.state.displayAway && <AwaySliders />}
              </div>
            }
     
            </div>

)
}else return null
  }
}
