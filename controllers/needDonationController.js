const needDonationDal = require('../dal/needDonationDal')
const medicalNeedDonationDal = require('../dal/medicalInfoNeedsdonationsDal')
const personalNeedDonationDal = require('../dal/personalInfoNeedsdonationsDal')
const pairDal = require('../dal/pairsDal')
const donaterDal = require('../dal/donatersDal')
const userDal = require('../dal/usersDal');
const mail = require('../utils/email');
const { donaters } = require('../models')

class NeedDonationController {
    getAllNeedDonation = async (req, res) => {
        var needDonation = await needDonationDal.getAllNeedDonation();
        if (!needDonation?.length) {
            return res.status(400).json({ message: 'No NeedDonation found' })
        }

        res.json(needDonation)

    }
    getByUserId = async (req, res) => {
        const { id:userId } = req.user
        const person = await needDonationDal.getByUserId(userId)
        console.log(person)
        res.send(person)

    }

    postNeedDonationDetails = async (body, userId) => {
        const { role } = body;
        const idpersonal_info_needsdonations = userId;
        const idmedical_info_needsdonations = userId;
        console.log("body", body);

        const { id, email, first_name, last_name, id_pair,

            blood_type, height,
            weight, birthDate, gender, cause_of_kidney_failure,
            dialysis_type, dialysis_start_date,
            past_kidney_donation, antibodies, heart_rate_check,
            psychosocial_assessment, surgical_procedure,

            address, city, cell_phone,
            phone_number, country, preferred_language

        } = body.values;

        userDal.updateRole(role, userId);

        var needsDonation = await needDonationDal.postNeedsDonation({ id, userId, email, first_name, last_name, id_pair });
        console.log(needsDonation, "needsDonation created");

        var needsDonationMedical = await medicalNeedDonationDal.postMedical({
            idmedical_info_needsdonations, blood_type, height,
            weight, birthDate, gender, cause_of_kidney_failure,
            dialysis_type, dialysis_start_date,
            past_kidney_donation, antibodies, heart_rate_check,
            psychosocial_assessment, surgical_procedure
        })

        console.log(needsDoneedsDonationMedical, "needsDonationMedical created");
        // if (needsDonationMedical) { // Created
        //     return res.status(201).json({ message: 'New donater created'+ needsDonationMedical})
        // } else {
        //     return res.status(400).json({ message: 'Invalid donater data received' })
        // }


        var needDonationPersonal = await personalNeedDonationDal.postPersonal({
            idpersonal_info_needsdonations,
            address, city, cell_phone,
            phone_number, country, preferred_language
        })

        console.log(needDonationPersonal);
        console.log(needsDonation, "needsDonation personal created");

        // if (needDonationPersonal) { // Created
        //     return res.status(201).json({ message: 'New donater created'+ needDonationPersonal})
        // } else {
        //     return res.status(400).json({ message: 'Invalid donater data received' })
        // }

    }
    postNeedsDonation = async (req, res) => {
        const { id: userId } = req.user
        const { id, id_pair } = req.body;

        let idsPairOfMyPair = await donaterDal.findPair(id_pair)
        if (idsPairOfMyPair) {
            if (idsPairOfMyPair == id) {
                await this.postNeedDonationDetails(req.body, userId);
                pairDal.updateHasPair(id, id_pair);//validation in the dal
                pairDal.createNewPair(id, id_pair);//validation in the dal
            }
            else { return res.status(400).json({ message: 'You do not appear as a pair of id_pair you have entered' }) }
        }
        else {
            await this.postNeedDonationDetails(req.body);
            return res.send("There is no pair for you in the system. You are not available in the system until a pair enters for you");
        }
    }
    deleteOne = async (req, res) => {

        const { id: userId } = req.user
        if (!userId) {// Confirm data
            return res.status(400).json({ message: 'donaters ID required' })
        }
        const hasPair = await pairDal.findPair(userId);
        if (hasPair) {
            const updateNotPair = await donaterDal.updateNoPair(hasPair.dataValues.id_donater)
            const id_pair = await pairDal.deletePair(userId);
        }

        const medicalNeedDonation = await medicalNeedDonationDal.deleteNeedsDonater(userId);
        const personalNeedDonation = await personalNeedDonationDal.deleteNeedsDonater(userId);
        const needsDonate = await needDonationDal.deleteNeedsDonater(userId);



        res.json(`${id} deleted`)
        // else
        //     res.json(`${id} not deleted`)

    }



    updateNeedsDonater = async (req, res) => {
        const { id: userId } = req.user

        const { id, first_name, last_name, email, id_pair,

            blood_type, height,
            weight, birthDate, gender, cause_of_kidney_failure,
            dialysis_type, dialysis_start_date,
            past_kidney_donation, antibodies, heart_rate_check,
            psychosocial_assessment, surgical_procedure,

            address, city, cell_phone,
            phone_number, country, preferred_language

        } = req.body;

        var updateNeedsDonation = await needDonationDal.updateNeedsDonation(userId,
            { id, first_name, last_name, email, id_pair });
        console.log(updateNeedsDonation, "updateNeedsDonation")

        var updateNeedsMedical = await medicalNeedDonationDal.updateMedicalNeedsDonater(userId,
            {
                blood_type, height,
                weight, birthDate, gender, cause_of_kidney_failure,
                dialysis_type, dialysis_start_date,
                past_kidney_donation, antibodies, heart_rate_check,
                psychosocial_assessment, surgical_procedure,
            });

        console.log(updateNeedsMedical, "updateNeedsMedical");

        var updatedNeedsPersonal = await personalNeedDonationDal.updatePersonalNeedsDonation(userId,
            {
                address, city, cell_phone,
                phone_number, country, preferred_language
            });
        console.log(updatedNeedsPersonal)
    }
}

const needDonationController = new NeedDonationController()
module.exports = needDonationController



