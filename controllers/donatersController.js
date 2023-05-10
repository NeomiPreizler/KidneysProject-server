const donaterDal = require('../dal/donatersDal');
const medicalInfoDonatersDal = require('../dal/medicalInfoDonatersDal');
const personalInfoDonatersDal = require('../dal/personalInfoDonatersDal');
const needDonationDal = require('../dal/needDonationDal')
const pairDal = require('../dal/pairsDal');
const userDal = require('../dal/usersDal');
const mail = require('../utils/email');
const {userController} = require('./userController');

class DonaterController {
    getAllDonaters = async (req, res) => {
        // userController.SendingReminderEmailToUsers()
        var donaters = await donaterDal.getAllDonaters();
        if (!donaters?.length) {
            return res.status(400).json({ message: 'No donaters found' })
        }
        res.json(donaters)
    }
    getByUserId = async (req, res) => {
        const { id:userId } = req.user
        const person = await donaterDal.getByUserId(userId)
        res.send(person)
    }
    postDonatersDetails = async (body, userId) => {

        const { role } = body
        const idmedical_info_donater = userId;
        const idpersonal_info_donater = userId;

        const { id, email, first_name, last_name, id_pair,

            height, weight, birthDate,
            gender, high_blood_pressure, blood_type,
            diabetes, kidney_diseases, keidney_stones,
            hospitalized, surgeries_in_the_past,
            heart_or_lung_dysfunction, medication_regularly,
            suffer_from_allergies, smoked_in_the_past, smoking,
            family_with_diabetes, born_before_37th_week, CT_examination,
            cheast_examination, urine_Test, psychological_evaluation,

            city,
            address, country, phone_number,
            cell_phone, preferred_language } = body;

        userDal.updateRole(role, userId);

        let donaterInfo = await donaterDal.postDonater({ id, userId, first_name, last_name, email, id_pair });
        // if (donaterInfo) { // Created
        //     res.status(201).json({ message: 'New donater created' })

        // } else {
        //     res.status(400).json({ message: 'Invalid donater data received' })
        // }


        let donaterMedical = await medicalInfoDonatersDal.postDonater({
            idmedical_info_donater, height, weight, birthDate,
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
        console.log("postDonater in the donatersController")
        const { id: userId } = req.user
        const { id, id_pair } = req.body;

        let idsPairOfMyPair = await needDonationDal.findPair(id_pair)
        if (idsPairOfMyPair) {
            if (idsPairOfMyPair == id) {
                await this.postDonatersDetails(req.body, userId);
                pairDal.updateHasPair(id, id_pair);
                pairDal.createNewPair(id, id_pair);
            }
            else { return res.status(400).json({ message: 'You do not appear as a pair of id_pair you have entered' }) }
            // else { return res.send("the id of your pair is incorrect"); }
        }
        else {
            await this.postDonatersDetails(req.body, userId);
            return res.send("There is no pair for you in the system. You are not available in the system until a pair enters for you");
        }

    };

    updatePairId = async () => {
        // צריך לעדכן את הזוג אצלו אחרי שנשלח מייל לזוג שרוצים לשנות והוא הסכים לשינוי ואחכ לשנות לזוג 
        // את הזהות של הזוג שלו ולבדוק בטבלה של השני אם יש כזה אדם ולשנות אצלו את הזוג לזמין וגם בטבתל זוגות אם הזוג היה זמין
    }

    deleteDonater = async (req, res) => {

        const { id: userId } = req.user
        if (!userId) {// Confirm data
            return res.status(400).json({ message: 'donaters ID required' })
        }
        // if(has_pair){
        const hasPair = await pairDal.findPair(userId);
        // }
        if (hasPair) {
            const updateNotPair = await needDonationDal.updateNoPair(hasPair.dataValues.id_needsDonation)
            const id_pair = await pairDal.deletePair(userId);
        }
        const donaterMedical = await medicalInfoDonatersDal.deleteDonater(userId);
        const donaterPersonal = await personalInfoDonatersDal.deleteDonater(userId);
        const donater = await donaterDal.deleteDonater(userId);

        // res.json(`${id} deleted`)
    }

    updateDonater = async (req, res) => {
        console.log("updateDonater in the donatersController")
        const { id: userId } = req.user
        const idmedical_info_donater = userId;
        const idpersonal_info_donater = userId;

        const { id, first_name, last_name, email,

            height, weight,
            high_blood_pressure,
            diabetes, kidney_diseases, kidney_stones,
            heart_or_lung_dysfunction,
            suffer_from_allergies, smoking,
            family_with_diabetes, family_with_kidney_disease,
            family_with_kidney_stones,
            famiy_with_clotting_problems,

            city, address, country,
            phone_number, cell_phone, preferred_language } = req.body;
        var updateDonater = await donaterDal.updateDonater(userId, { id, first_name, last_name, email });

        var updatedonaterMedical = await medicalInfoDonatersDal.updateMedicalDonater(

            idmedical_info_donater, {
                height, weight,
            high_blood_pressure,
            diabetes, kidney_diseases, kidney_stones,
            heart_or_lung_dysfunction,
            suffer_from_allergies, smoking,
            family_with_diabetes, family_with_kidney_disease,
            family_with_kidney_stones,
            famiy_with_clotting_problems
        });

        console.log(" after updatedonaterMedical", updatedonaterMedical);

        var updatedonatePersonal = await personalInfoDonatersDal.updateDonaterPersonal(
            idpersonal_info_donater, {
                city, address, country,
            phone_number, cell_phone, preferred_language
        });
        console.log(updatedonatePersonal, "after updatedonatePersonal")

        if (!updatedonatePersonal) {
            return res.status(400).json({ message: 'donaterPersonal not found' })
        }
        res.json(updatedonatePersonal)


    }
}

const donaterController = new DonaterController();
module.exports = donaterController;