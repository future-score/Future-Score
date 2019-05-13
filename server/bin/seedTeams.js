
const mongoose = require("mongoose");
const Team = require("../models/Team");
const data = require("./TeamsData.json")

mongoose
  //.connect('mongodb+srv://FS:ironhack@cluster0-ovrey.mongodb.net/test?retryWrites=true', {useNewUrlParser: true})
  .connect('mongodb://localhost:27017/Future-Score', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
  const teamsArr=[
{
  name: "Deportivo Alavés",
  alfa: 0.705220829553673,
  beta: -0.7405668041298112,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Athletic Club",
  alfa: 0.8788824553507031,
  beta: -0.775148578259887,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Club Atlético de Madrid",
  alfa: 1.290892315718958,
  beta: -1.540963174773516,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "FC Barcelona",
  alfa: 2.073987396923947,
  beta: -1.1009976506159111,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Real Betis Balompié",
  alfa:  0.988420225258369,
  beta: -0.3834504180259685,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},

{
  name: "RC Celta de Vigo",
  alfa:  1.188709772738438,
  beta: -0.29661801987440706,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "SD Eibar",
  alfa:  0.9964267581839742,
  beta: -0.6231608194797037,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "RCD Espanyol de Barcelona",
  alfa:  0.8440067993794181,
  beta:  -0.7062863455755479,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Getafe CF",
  alfa:  0.7847778531043776,
  beta:  -0.9309777393750778,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Girona FC",
  alfa: 0.8806968407425687,
  beta:  -0.44957910600600826,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "SD Huesca",
  alfa: 0.7063284925187313,
  beta:  -0.33845832043892543,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "CD Leganés",
  alfa: 0.577903291785378,
  beta:  -0.6854804698729452,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Levante UD",
  alfa: 0.9305495780135837,
  beta: -0.4460946547289695,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Real Madrid CF",
  alfa: 1.8736289344576735,
  beta: -0.7967017271076677,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Sevilla FC",
  alfa: 1.3023644075750638,
  beta: -0.5648562801425064,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Real Sociedad de Fútbol",
  alfa:  1.2206546855232825,
  beta: -0.5429148693937274,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Valencia CF",
  alfa: 1.2169882224174464,
  beta: -0.7321046137247867,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name: "Real Valladolid CF",
  alfa: 0.6781497440143728,
  beta: -0.2974811841335985,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name:"Rayo Vallecano de Madrid",
  alfa: 0.67049676251306,
  beta: -0.22707361153778657,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
},
{
  name:"Villarreal CF",
  alfa: 1.1394973951590288,
  beta: -0.7809171828185106,
  nu1: 1.6407450392879805,
  nu2: 1.6423666956581116,
  ro: -0.04210183702055415,
  gamma: 0.4459591653008539
}
]

data.teams.forEach(teamApi => {
  teamsArr.forEach(teamInfo =>{
    if(teamApi.name === teamInfo.name){
      team = {
      "teamId": teamApi.id,
      "name": teamApi.name,
      "tla": teamApi.tla,
      "crestUrl": teamApi.crestUrl,
      "venue": teamApi.venue,
      "alfa": teamInfo.alfa,
      "beta": teamInfo.beta,
      "nu1": teamInfo.nu1,
      "nu2": teamInfo.nu2,
      "ro": teamInfo.ro,
      "gamma": teamInfo.gamma
      }
      Team.create(team)
      .then((data)=>{
        console.log(`${data.name} save`)
      })
      .catch((err)=>{console.log(err)})
    }
  })
});