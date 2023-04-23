const { log } = require('console');
const { DATEONLY } = require('sequelize');
const db = require('../models/index');

const PersonalInfoDonaters = require('../models/personal_info_donaters');
// const Donaters = db.donaters
const PersonalInformationDonater = db.personal_info_donaters
// const MedicalInformation=db.medical_info_donaters
class personalInfoDonatersDal {

    postDonater = async (body) => {
        console.log("in personal", body.idpersonal_info_donater);

        const donaterPersonalDetails = await PersonalInformationDonater.create(body);
        return (donaterPersonalDetails);
    }
    deleteDonater = async (id_donater) => {
        return await PersonalInfoDonaters.destroy({ where: { idpersonal_info_donater: id_donater } })
    }
    updateDonaterPersonal = async (userid,body) => {
        const { city, street, num_street, country,
            phone_number, cell_phone, preferred_language } = body;
        const updatedonaterPersonal = await PersonalInformationDonater.update({
            city, street, num_street, country,
            phone_number, cell_phone, preferred_language
        }, { where: { idpersonal_info_donater: userid } })

        return updatedonaterPersonal;

        // if (!updatedonaterPersonal) {
        //     return res.status(400).json({ message: 'donaterPersonal not found' })
        // }
        // res.json(updatedonaterPersonal)
    }


}
const donatersPersonalDataAcessor = new personalInfoDonatersDal()
module.exports = donatersPersonalDataAcessor