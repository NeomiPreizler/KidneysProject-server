
const { log } = require('console');
const { DATEONLY } = require('sequelize');
const { donaters } = require('../models/index');
const db = require('../models/index');
const Donaters = db.donaters
const PersonalInformation = db.personal_info_donaters
const MedicalInformation = db.medical_info_donaters
class donatersDal {
    updateNoPair = async (id) => {
        return Donaters.update({ has_pair: false }, { where: { id: id } })
    }

    // checkCorrectId(id, id_pair) {

    // }
    deleteDonater = async (id) => {
        return await Donaters.destroy({ where: { id: id } });

    }
    getAllDonaters = async () => {
        const donaters = await Donaters.findAll({})
        return donaters;
    }
    postDonater = async (body) => {
        const donater_details = await Donaters.create(body)
        return donater_details;
    }
    findPair = async (idDonater) => {
        // return Donaters.findOne({
        //     attributes:['id_pair'],
        //     where:{
        //         id:idDonater,
        //     }
        // })
        return false
    }
    getByUserId = async (userid) => {
        const person = await Donaters.findOne({
            where: { userId: userid }
            ,
            include: [{ model: PersonalInformation, as: 'donaterPersonal' }, { model: MedicalInformation, as: 'donaterMedical', required: false }]
        })
        console.log("person ", person);
        return person
    }
    updateDonater = async (userid, data) => {
        const { id, first_name, last_name, email } = data
        console.log(userid)
        console.log("updateDonater in donater dal");
        return await Donaters.update({ userid, id, first_name, last_name, email }, { where: { userId: userid } });

        // if (!updateDonater) {
        //     return res.status(400).json({ message: 'Donater not found' })
        // }
        //res.json(updateDonater)
    }

}
const donaterDataAcessor = new donatersDal();
module.exports = donaterDataAcessor