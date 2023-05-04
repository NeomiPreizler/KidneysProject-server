const { log } = require('console');
const { DATEONLY } = require('sequelize');
const { donaters } = require('../models/index');
const db = require('../models/index')
const NeedDonations = db.needsDonations;//לא לשכוח לשנות שם
const PersonalNeeds = db.personal_info_needsdonations;
const MedicalNeeds = db.medical_info_needsdonations;
const Donaters = db.donaters
class needDonationDal {
    // constructor() {
    //     this.init();
    // }
    // init = async () => {
    //     this.db = require('../models/index')
    //     this.NeedDonation = db.needsDonations//לא לשכוח לשנות שם
    // }
    deleteNeedsDonater = async (id) => {
        return await Donaters.destroy({ where: { idpersonal_info_donater: id } })

    }
    getAllNeedDonation = async () => {
        const needDonation = await NeedDonations.findAll({})
        return needDonation;
    }
    postNeedsDonation = async (body) => {
console.log(body,"boddddddddddy");
        const needDonationInfo = await NeedDonations.create(body)
        console.log(needDonationInfo,"needDonationInfo");
        return needDonationInfo;
    }

    findPair = async (idNeedsDonation) => {
        console.log(idNeedsDonation, "idNeedsDonation");
        console.log("findPair ");
        //const idToReturn = await 
        //    return NeedDonations.findOne({
        //         attributes:['id_pair'],
        //         where: {
        //             id: idNeedsDonation,
        //         }
        //     })


        return false;

        //, attributes: [id_pair]
        // if (idToReturn)
        //     return idToReturn//.dataValues.id_pair;
        // else
        //     return null;
        // include : [{ model: Donaters, as: 'donater', attributes:['id_pair'], where:{id_pair:idToCheck}}]
    }

    //  Donaters.findAll({})
    getByUserId = async (userid) => {
        console.log("needDonation dal",userid);
        const person = await NeedDonations.findOne({
            where: { userId: userid },
            include: [{ model: PersonalNeeds, as: 'needsDonationsPersonal' }, { model: MedicalNeeds, as: 'needsDonationsMedical', required: false }]
        })
        console.log(person, "person");
        return person
    }

    updateNeedsDonation = async (userid, data) => {
        const { id, last_name, avaliable, email } = data
        return await NeedDonations.update({ userid, id, last_name, avaliable, email }, { where: { userId: userid } })

    }
    updateNoPair = async (id) => {
        return NeedDonations.update({ has_pair: false }, { where: { id: id } })
    }
}

const needDonationDataAcessor = new needDonationDal();
module.exports = needDonationDataAcessor
