// import React, { Component } from 'react';
// import ReactChartkick, { ColumnChart } from 'react-chartkick';
// import Chart from 'chart.js';
// import NavBar from './NavBar';
// import GreenTick from './GreenTick'
// import HomeSliders from './HomeSliders'
// import './cssContents/BarChart.css'
// ReactChartkick.addAdapter(Chart)

// export default class BarChart extends Component {
// 	constructor(props) {
// 		super(props) 
// 			this.state = {
// 				show: false,
// 				chartValues: [["1", 32], ["X", 46], ["2", 28]]
// 			};
// 			this.saveButton = this.saveButton.bind(this)
// 	}

// 	saveButton = () => {
// 		const {show} = {...this.state};
// 		this.setState({show: !show},()=>{
// 			this.backToBegin()
// 		})
// 	}

// 	backToBegin = () =>{
// 		setTimeout(()=>{
// 			console.log("llega")
// 			const {show} = {...this.state};
// 			this.setState({show: !show})
// 		},3000) 
// 	}

// import './BarChart.css'
// ReactChartkick.addAdapter(Chart)

// export default class BarChart extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<NavBar></NavBar>
// 				{this.state.show?null: <div>
// 					<ColumnChart library={
// 					{ responsive: true,
// 				<ColumnChart library={
// 					{ 
// 						scales:{
// 							yAxes:[
// 								{
// 									display: false
// 								},
// 							],
// 							xAxes: [
// 								{
// 									categoryPercentage: 0.2,
//             			barPercentage: 0.4,
// 									barThickness: 30,
// 									gridLines: {
// 										display: false,
// 										drawBorder: false,
// 									},
// 									ticks: {
//                     fontSize: 50
//                 }
// 									gridLines: {
// 										display: false,
// 										drawBorder: false,
// 									}
// 								}
// 							]
// 						}
// 					}
// 				} legend={false} stacked={false} data={this.state.chartValues} /> 
// 					<div className="button-save">
// 						<button  onClick={this.saveButton}>Save</button>
// 					</div>
					
// 					</div>
// 					}
					

// 				<div>
// 				<br></br>
// 				{this.state.show && <GreenTick />}
// 				} legend={false} stacked={false} data={[["1", 32], ["X", 46], ["2", 28]]} />
// 				<button>Save</button>
// 				<div className="tick">
// 				<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
// 				<circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
// 				<path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
// 				</div>
				
// 			</div>
// 		)
// 	}
// }
