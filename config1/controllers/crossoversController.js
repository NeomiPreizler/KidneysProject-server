const crossoversDal = require('../dal/crossoversDal');

class CrossoverController{
    getAllcrossovers=async()=>{
        var crossover =await crossoversDal.getAllcrossover().toArray();
        
        if (!donaters?.length) {
            return res.status(400).json({ message: 'No donaters found' })
            }
            // console.log(donaters);
            res.json(donaters)
            
    } 
    getTheCircle=async()=>{
        
    }
}
const  crossoverController=new CrossoverController()
module.exports = crossoverController
