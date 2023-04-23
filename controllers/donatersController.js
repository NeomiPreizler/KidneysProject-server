const donaterDal = require('../dal/donatersDal');
const medicalInfoDonatersDal = require('../dal/medicalInfoDonatersDal');
const personalInfoDonatersDal = require('../dal/personalInfoDonatersDal');
const needDonationDal = require('../dal/needDonationDal')
const pairDal = require('../dal/pairsDal');
const userDal = require('../dal/usersDal');
const mail = require('../utils/email');
const userController = require('./userController');
const { loadavg } = require('os');
const { log } = require('console');

class DonaterController {
    getAllDonaters = async (req, res) => {
        // userController.SendingReminderEmailToUsers()
        var donaters = await donaterDal.getAllDonaters();
        console.log(donaters,"donaterssssss");
        // if (!donaters?.length) {
        //     return res.status(400).json({ message: 'No donaters found' })
        // }
        res.json(donaters)
    }
    getByUserId = async (req, res) => {
        console.log("useriddddddddd", req.params.userId);

        const person = await donaterDal.getByUserId(req.params.userId)
        console.log(person)
        res.send(person)
    }
    postDonatersDetails = async (body) => {
        console.log(body, "body");
        const { role } = body
        console.log(role, "roleeeeeeeeee");
        const { id, userId, email, first_name, last_name, id_pair,

            idmedical_info_donater, hight, weight, birthDate,
            gender, high_blood_pressure, blood_type,
            diabetes, kidney_diseases, keidney_stones,
            hospitalized, surgeries_in_the_past,
            heart_or_lung_dysfunction, medication_regularly,
            suffer_from_allergies, smoked_in_the_past, smoking,
            family_with_diabetes, born_before_37th_week, CT_examination,
            cheast_examination, urine_Test, psychological_evaluation,

            idpersonal_info_donater, city,
            address, country, phone_number,
            cell_phone, preferred_language } = body;
        console.log("crasy number", phone_number);
        console.log("this is for noimi", idmedical_info_donater);

        userDal.updateRole(role, userId);

        let donaterInfo = await donaterDal.postDonater({ id, userId, first_name, last_name, email, id_pair });
        // if (donaterInfo) { // Created
        //     res.status(201).json({ message: 'New donater created' })

        // } else {
        //     res.status(400).json({ message: 'Invalid donater data received' })
        // }


        let donaterMedical = await medicalInfoDonatersDal.postDonater({
            idmedical_info_donater, hight, weight, birthDate,
            gender, high_blood_pressure, blood_type,
            diabetes, kidney_diseases, keidney_stones,
            hospitalized, surgeries_in_the_past,
            heart_or_lung_dysfunction, medication_regularly,
            suffer_from_allergies, smoked_in_the_past, smoking,
            family_with_diabetes, born_before_37th_week, CT_examination,
            cheast_examination, urine_Test, psychological_evaluation,
        });

        // if (donaterMedical) { // Created
        //             return res.status(201).json({ message: 'New donater created' + donaterMedical })
        //         } else {
        //             return res.status(400).json({ message: 'Invalid donater data received' })
        //         }
        console.log("noty phone_number", phone_number);
        let donaterPersonl = await personalInfoDonatersDal.postDonater({
            idpersonal_info_donater, city,
            address, country, phone_number,
            cell_phone, preferred_language
        });

        // if (donaterPersonl) { // Created
        //     return res.status(201).json({ message: 'New medical donater created' + donaterMedical })
        // } else {
        //     return res.status(400).json({ message: 'Invalid donater data received' })
        // }

    }

    postDonater = async (req, res) => {
        // console.log(req.body.values,"req.body");

        const { id, id_pair } = req.body;
        // const { } = req.body;

        let idsPairOfMyPair = await needDonationDal.findPair(id_pair)
        // console.log("for Sarale",req.idmedical_info_donater)
        console.log("also for sarale", req.body.idpersonal_info_donater);
        if (idsPairOfMyPair) {
            if (idsPairOfMyPair == id) {
                await this.postDonatersDetails(req.body);
                pairDal.updateHasPair(id, id_pair);
                pairDal.createNewPair(id, id_pair);
            }
            else { return res.status(400).json({ message: 'You do not appear as a pair of id_pair you have entered' }) }
            // else { return res.send("the id of your pair is incorrect"); }
        }
        else {
            await this.postDonatersDetails(req.body);
            return res.send("There is no pair for you in the system. You are not available in the system until a pair enters for you");
        }

    };

    updatePairId = async () => {
        // צריך לעדכן את הזוג אצלו אחרי שנשלח מייל לזוג שרוצים לשנות והוא הסכים לשינוי ואחכ לשנות לזוג 
        // את הזהות של הזוג שלו ולבדוק בטבלה של השני אם יש כזה אדם ולשנות אצלו את הזוג לזמין וגם בטבתל זוגות אם הזוג היה זמין
    }

    deleteDonater = async (req, res) => {

        const { id } = req.body
        if (!id) {// Confirm data
            return res.status(400).json({ message: 'donaters ID required' })
        }
        // if(has_pair){
        const hasPair = await pairDal.findPair(id);
        // }
        if (hasPair) {
            const updateNotPair = await needDonationDal.updateNoPair(hasPair.dataValues.id_needsDonation)
            const id_pair = await pairDal.deletePair(id);
        }
        const donaterMedical = await medicalInfoDonatersDal.deleteDonater(id);
        const donaterPersonal = await personalInfoDonatersDal.deleteDonater(id);
        const donater = await donaterDal.deleteDonater(id);

        // await Book.destroy({ where: {id: id}});
        // if (remove)
        res.json(`${id} deleted`)
        // else
        //     res.json(`${id} not deleted`)
    }

    updateDonater = async (req, res) => {
        const { userId, id, first_name, last_name, avaliable, email,

            idmedical_info_donater, hight, weight,
            high_blood_pressure,
            diabetes, kidney_diseases, kidney_stones,
            heart_or_lung_dysfunction,
            suffer_from_allergies, smoking,
            family_with_diabetes, family_with_kidney_disease,
            family_with_kidney_stones,
            famiy_with_clotting_problems,

            idpersonal_info_donater, city, street, num_street, country,
            phone_number, cell_phone, preferred_language } = req.body;
        console.log(userId, "userIddddddddd in controller");
        var updateDonater = await donaterDal.updateDonater(userId ,{ id, first_name, last_name, email });
        console.log(updateDonater,"updateDonater")
        console.log(hight,"highthighthight in controller");
        var updatedonaterMedical = await medicalInfoDonatersDal.updateMedicalDonater(

            idmedical_info_donater, {hight, weight,
            high_blood_pressure,
            diabetes, kidney_diseases, kidney_stones,
            heart_or_lung_dysfunction,
            suffer_from_allergies, smoking,
            family_with_diabetes, family_with_kidney_disease,
            family_with_kidney_stones,
            famiy_with_clotting_problems
        });

        console.log(updatedonaterMedical);

        var updatedonatePersonal = await personalInfoDonatersDal.updateDonaterPersonal(
            idpersonal_info_donater,{ city, street, num_street, country,
            phone_number, cell_phone, preferred_language
        });
        console.log(updatedonatePersonal)

        if (!updatedonatePersonal) {
            return res.status(400).json({ message: 'donaterPersonal not found' })
        }
        res.json(updatedonatePersonal)


    }
}

const donaterController = new DonaterController();
module.exports = donaterController;