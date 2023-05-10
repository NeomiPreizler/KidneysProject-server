
const { DATEONLY } = require('sequelize');
const db = require('../models/index');
const { Op } = require('sequelize');
const { where } = require('sequelize');

const Donaters = db.donaters
const NeedsDonation = db.needsDonations
const Pairs = db.pairs

class pairsDal {

    createNewPair = async (id_donater, id_needsDonation) => {
        const newPair = await Pairs.create(id_donater, id_needsDonation)
        if (newPair) {
            console.log(`successfully created new pair ${newPair}`);
        }
    }
    updateHasPair = async (id_donater, id_needsDonation) => {
        const donater_ = await Donaters.update({ has_pair: true }, {
            where: {
                id: id_donater,
            },
        })
        if (donater_) { console.log(`successfully updated donaterId ${id_donater} as has pair`) }

        const needsDonate = await NeedsDonation.update({ has_pair: true }, {
            where: {
                id: id_needsDonation,
            },
        })

        if (needsDonate) { console.log(`successfully updated needsDonaterId ${id_needsDonation} as has pair`) }
       
    }

   
    findPair = async (id) => {
        const pair = await Pairs.findOne({ where: { [Op.or]: { id_donater: id, id_needsDonation: id } } });
        return pair;
    }
    deletePair = async (id) => {
        return await Pairs.destroy({ where: { [Op.or]: { id_donater: id, id_needsDonation: id } } });
    }



}
const modulePairDal = new pairsDal()
module.exports = modulePairDal






