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

// 	render() {
// 		return (
// 			<div>
// 				<NavBar></NavBar>
// 				{this.state.show?null: <div>
// 					<ColumnChart library={
// 					{ responsive: true,
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
// 				</div>
				
// 			</div>
// 		)
// 	}
// }
