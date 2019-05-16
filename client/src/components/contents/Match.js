import React, { Component } from 'react'
import Chart from 'chart.js';
import ReactChartkick, { ColumnChart } from 'react-chartkick';
import NavBar from './NavBar'
import DBservice from '../../services/DBservice'
import Predservice from '../../services/Predservice'
import './cssContents/Match.css'
// import BarChart from './BarChart';
import HomeSliders from './HomeSliders'
import GreenTick from './GreenTick';
import AwaySliders from './AwaySliders';
import './cssContents/BarChart.css';
import '../contents/cssContents/Match.css'
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
      numberData: [],
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
      let numberData = data.split(", ").map((n) => parseFloat(n))
           this.setState({
             ...this.state,
             numberData: numberData
            })
        })
  }

  getSlidersHome = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
          homeTeam:{
            ...this.state.data.homeTeam,
          gamma: parseFloat(e.homeTeamGamma),
          alfa: parseFloat(e.homeTeamAlfa),
          beta: parseFloat(e.homeTeamBeta),
          nu1: parseFloat(e.homeTeamNu1)
            }          
          }    
    },()=>{
      this.getPrediction()
    })
  }

  getSlidersAway = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
          awayTeam:{
            ...this.state.data.awayTeam,
          alfa: parseFloat(e.awayTeamAlfa),
          beta: parseFloat(e.awayTeamBeta),
          nu2: parseFloat(e.awayTeamNu2)
            }          
          }    
    },()=>{
      this.getPrediction()
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

  render() {
    console.log(this.state.data)
    if (Object.entries(this.state.data).length > 0) {
    return (
      <div className="match-container">
      <NavBar></NavBar>
      <div className="match-barchat">
          <div className="versus-barchat">
              <div className="home-barchat">
                  <p className="team-name">{this.state.data.homeTeam.name}</p>
                  <img onClick={this.displaySlider} className="segunda-image"src={this.state.data.homeTeam.crestUrl} width= "50px" alt="shield team" />
              </div>
              <div className="away-barchat">
                  <p className="team-name">{this.state.data.awayTeam.name}</p>
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
          // categoryPercentage: 0.2,
          // barPercentage: 0.4,
          barThickness: 20,
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontSize: 20
        }
        }
      ]
    }
  }
} legend={false} stacked={false} data={[["1", this.state.numberData[0]], ["X", this.state.numberData[1]], ["2", this.state.numberData[2]]]} /> 

 {/* <div className="button-save">
  <button onClick={() => this.testChart()}>Dani</button>
</div>  */}
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
                {this.state.display && <HomeSliders data={this.state.data} getSlidersHome={this.getSlidersHome}/>}
              </div>
            }

              {this.state.show ? null :
              <div>
                {this.state.displayAway && <AwaySliders data={this.state.data} getSlidersAway={this.getSlidersAway}/>}
              </div>
            }
     
            </div>

)
}else return null
  }
}

