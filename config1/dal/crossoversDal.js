const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const Pairs = db.pairs
const Circles= db.circles


class CrossoversDataAcessor{
// constructor(){
//     this.init();
// }
//     init= async()=>{
//         this.db = require('../models/index')
//         this.Pairs = db.pairs
// }

// getAllpairs=async()=>{
//     const pairs = await Pairs.findAll({})
//     return pairs;
// }
// getAllcrossover=async()=>{
//     const circles = await Circles.findAll({}).toArray();

//     circles.
//     return circles;
// }

}
const crossoversDataAcessor=new CrossoversDataAcessor();
module.exports= crossoversDataAcessor