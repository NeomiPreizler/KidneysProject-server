const { Op } = require('sequelize');
const { DATEONLY } = require('sequelize');
const db = require('../models/index');
const Donaters = db.donaters
const NeedsDonation = db.needsDonations
const Pairs=db.pairs

class pairsDal {
    findPairInNeedsTable=async(id_needsD)=>{
        const IdPair= NeedsDonation.find({
             where: {
                id:id_needsD,
             //    id_pair:idToCheck
             },
             attributes:["id_pair"]
             // include : [{ model: Donaters, as: 'donater', attributes:['id_pair'], where:{id_pair:idToCheck}}]
          })
          return IdPair
        }

    findPairInDonatersTable=async(id_donater)=>{
        const IdPair= Donaters.find({
                where: {
                id:id_donater,
                //    id_pair:idToCheck
                },
                attributes:["id_pair"]
                // include : [{ model: Donaters, as: 'donater', attributes:['id_pair'], where:{id_pair:idToCheck}}]
            })
            return IdPair
        }

    updateMyPair = async(id_donater, id_needsDonation) => {
        const donater_ = await Donaters.update({ has_pair: 1 }, {
            where: {
                id: id_donater,
            },
        })
        if (donater_) { console.log(`successfully updated donaterId ${id_donater} as has pair`) }

        const needsDonate = NeedsDonation.update({ has_pair: 1 }, {
            where: {
                id: id_needsDonation,
            },
        })

        if (needsDonate) { console.log(`successfully updated needsDonaterId ${id_needsDonation} as has pair`) }
    }
    // updateInPairTable(idPair_donater, idPairneedsDonation){

    // }
    findPair=async(id)=>{
        const pair=await Pairs.findOne({where:{[Op.or]:{id:id_donater,id:id_needsDonation}}});    
        return pair;
    }
    deletePair=async(id)=>{
        
    }
    createNewPair=async(idPair_donater, idPairneedsDonation)=>{
        const newPair = await Pairs.create(idPair_donater, idPairneedsDonation)
        if(newPair){
            console.log(`successfully created new pair ${newPair}`);
        }
    }


}
const modulePairDal = new pairsDal()
module.exports = modulePairDal






