const donaterDal = require('../dal/donatersDal');
const medicalInfoDonatersDal = require('../dal/medicalInfoDonatersDal');
const personalInfoDonatersDal = require('../dal/personalInfoDonatersDal');
const needDonationDal = require('../dal/needDonationDal')
const pairDal = require('../dal/pairsDal');
const mail = require('../utils/email');
console.log(`${donaterDal}`);
class DonaterController {
    getAllDonaters = async (req, res) => {
        var donaters = await donaterDal.getAllDonaters();
        if (!donaters?.length) {
            return res.status(400).json({ message: 'No donaters found' })
        }
        res.json(donaters)
    }
    getByUserName = async (req, res) => {
        const person = await donaterDal.getByEmail(req.params.email)
        console.log(person)
        res.send(person)

    }
    postDonatersDetails = async (body) => {
        const { id, first_name, last_name, email, id_pair,

            idmedical_info_donater, hight, weight, birthDate,
            male_or_female, high_blood_pressure, blood_type,
            diabetes, kidney_diseases, keidney_stones,
            hospitalized, surgeries_in_the_past,
            heart_or_lung_dysfunction, medication_regularly,
            suffer_from_allergies, smoked_in_the_past, smoking,
            family_with_diabetes, family_with_kidney_disease,
            family_with_kidney_stones, born_before_37th_week,
            famiy_with_clotting_problems,

            idpersonal_info_donater, city,
            street, num_street, country, phone_number,
            cell_phone, preferred_language } = body;


        // let donaterInfo = await donaterDal.postDonater({ id, first_name, last_name, email, id_pair });
        // if (donaterInfo) { // Created
        //     res.status(201).json({ message: 'New donater created' })

        // } else {
        //     res.status(400).json({ message: 'Invalid donater data received' })
        // }


        let donaterMedical = await medicalInfoDonatersDal.postDonater({
            idmedical_info_donater, hight, weight, birthDate,
            male_or_female, high_blood_pressure, blood_type,
            diabetes, kidney_diseases, keidney_stones,
            hospitalized, surgeries_in_the_past,
            heart_or_lung_dysfunction, medication_regularly,
            suffer_from_allergies, smoked_in_the_past, smoking,
            family_with_diabetes, family_with_kidney_disease,
            family_with_kidney_stones, born_before_37th_week,
            famiy_with_clotting_problems,
        });

        // if (donaterMedical) { // Created
        //             return res.status(201).json({ message: 'New donater created' + donaterMedical })
        //         } else {
        //             return res.status(400).json({ message: 'Invalid donater data received' })
        //         }

        let donaterPersonl = await personalInfoDonatersDal.postDonater({
            idpersonal_info_donater, city,
            street, num_street, country, phone_number,
            cell_phone, preferred_language
        });

        // if (donaterPersonl) { // Created
        //     return res.status(201).json({ message: 'New medical donater created' + donaterMedical })
        // } else {
        //     return res.status(400).json({ message: 'Invalid donater data received' })
        // }

    }

    postDonater = async (req, res) => {
        const { id, id_pair } = req.body;

        let idsPairOfMyPair = await needDonationDal.findPair(id_pair)
            .then(() => {
                if (idsPairOfMyPair) {
                    if (idsPairOfMyPair == id) {
                        this.postDonatersDetails(req.body);
                        pairDal.updateHasPair(id, id_pair);
                        pairDal.createNewPair(id, id_pair);
                    }
                    else { return res.send("the id of your pair is incorrect"); }
                }
                else {
                    return res.send("There is no pair for you in the system. You are not available in the system until a pair enters for you");
                }
            })
    };


    // var RightPair = await needDonationDal.findRightPair(pair.dataValue.id_pair, id)
    //     .then(() => {

    //         if (RightPair) {
    //             //  pair.dataValue.
    //             needDonationDal.updateHasPair(s); }
    //         else {
    //             return res.send("the id of your pair is incorrect")
    //         }
    //     })

    //     else {
    // return res.send("There is no pair for you in the system. You are not available in the system until a pair enters for you");



    // mail.sentMail(`this is your order! \n ${JSON.stringify(addedOrder)}`,'Sending Email using Node.js server - Your Order','36325593952@mby.co.il');
    // return res.status(201).json({ message: 'New order created',data:addedOrder});
    // needDonationDal.updateNotPair();
    // }





    // if (donaterPersonl) { // Created
    //             return res.status(201).json({ message: 'New donater created'+donaterPersonl })
    //         } else {
    //             return res.status(400).json({ message: 'Invalid donater data received' })
    //         }



    //     console.log(donater1);
    //     res.send(donater1);
    // }

    // postMedical= async (req, res) => {
    //     var postMedical=await donaterDal.postMedical(req.body);
    //     //var second = await 
    //     console.log(postMedical);
    //     res.send(postMedical);
    // }

    // postPersonal=async (req, res) => {
    //     var postPersonal=await donaterDal.postPersonal(req.body);
    //     console.log(postPersonal);
    //     res.send(postPersonal);
    // }
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
        const { id, last_name, avaliable, email,

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



        var updateDonater = await donaterDal.updateDonater({ id, last_name, avaliable, email });
        console.log(updateDonater)

        var updatedonaterMedical = await medicalInfoDonatersDal.updateMedicalDonater({
            idmedical_info_donater, hight, weight,
            high_blood_pressure,
            diabetes, kidney_diseases, kidney_stones,
            heart_or_lung_dysfunction,
            suffer_from_allergies, smoking,
            family_with_diabetes, family_with_kidney_disease,
            family_with_kidney_stones,
            famiy_with_clotting_problems
        });

        console.log(updatedonaterMedical);

        var updatedonatePersonal = await personalInfoDonatersDal.updateDonaterPersonal({
            idpersonal_info_donater, city, street, num_street, country,
            phone_number, cell_phone, preferred_language
        });

        console.log(updatedonatePersonal)
    }
}

const donaterController = new DonaterController()
module.exports = donaterController