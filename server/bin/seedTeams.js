
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
  alfa: 0.7380199358011175,
  beta: -0.7555003308278664,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Athletic Club",
  alfa: 0.9220935349478533,
  beta: -0.8045977179607385,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Club Atlético de Madrid",
  alfa: 1.3133459675147128,
  beta: -1.5647325202961397,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "FC Barcelona",
  alfa: 2.0999351527306933,
  beta: -1.1389658428753555,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Real Betis Balompié",
  alfa: 1.0202905247657446,
  beta: -0.4131926438336004,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},

{
  name: "RC Celta de Vigo",
  alfa: 1.2178483753363132,
  beta: -0.3160178161302471,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "SD Eibar",
  alfa: 1.0154390871731307,
  beta: -0.659046474440376,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "RCD Espanyol de Barcelona",
  alfa: 0.8844489990209646,
  beta: -0.7452056342046719,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Getafe CF",
  alfa: 0.8053693341598531,
  beta: -0.9661134780441601,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Girona FC",
  alfa: 0.9034581141631917,
  beta: -0.4714162659234789,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "SD Huesca",
  alfa: 0.7329647120200021,
  beta: -0.36528127975619357,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "CD Leganés",
  alfa: 0.5951228197660258,
  beta: -0.7049114081328564,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Levante UD",
  alfa: 0.9650951520140176,
  beta: -0.4800694192818819,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Real Madrid CF",
  alfa: 1.8970486022521318,
  beta: -0.8101700766468195,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Sevilla FC",
  alfa: 1.333590326230081,
  beta: -0.6020537245178798,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Real Sociedad de Fútbol",
  alfa: 1.2619762234941445,
  beta: -0.5810930901551549,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Valencia CF",
  alfa: 1.2586377821353134,
  beta: -0.7584180158907007,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name: "Real Valladolid CF",
  alfa: 0.7126275667650389,
  beta: -0.3303976464740387,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name:"Rayo Vallecano de Madrid",
  alfa: 0.6932776649038183,
  beta: -0.24889488023239575,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
},
{
  name:"Villarreal CF",
  alfa: 1.1626008369245027,
  beta: -0.8213441896878986,
  nu1: 1.6387782877881012,
  nu2: 1.6419880080665419,
  ro: -0.04247018737701837,
  gamma: 0.4452859175567061
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