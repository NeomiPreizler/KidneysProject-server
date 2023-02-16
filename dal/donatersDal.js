
const { DATEONLY } = require('sequelize');
const { donaters } = require('../models/index');
const db = require('../models/index');
const Donaters = db.donaters
// const PersonalInformation=db.personal_info_donaters
// const MedicalInformation=db.medical_info_donaters
class DonatersDataAcessor {
    // constructor(){
    //     this.init();
    // }
    //     init= async()=>{
    //         this.db = require('../models/index')
    //         this.Donaters = db.donaters
    // }

    deleteDonater = async (id) => {
        


        // צריך למחוק את האדם ובנוסף את האישייים והרפואיים 
        // וגם לעדכן את הזוג שלו שאין לו זוג וכן למחוק את הזוג מטבלת זוגות

         return await donaters.destroy({ where: { id: id } });

        // const id = parentRecord.id;

        // return models.sequelize.transaction(function (t) {
        //     return models.Parent.destroy({ where: { id } }, { transaction: t })
        //         .then(async function (deleteCount) {
        //             return await models.Child.destroy({ where: { parent.id: id } }, { transaction: t });
        //         })
        // })
        //     .catch((e) => {
        //         console.log("Error", e);
        //         return Promise.reject(e);
        //     });



       


    }
    getAllDonaters = async () => {
        const donaters = await Donaters.findAll({})
        return donaters;
    }
    postDonater = async (donaterData) => {
        const donater_details = await Donaters.create(donaterData)
        return donater_details;
    }
    getByEmail = async (emailIGot) => {
        const person = await Donaters.findOne({ where: { email: emailIGot } })
        return person
    }
    updateDonater = async (data) => {
        console.log("hello ")
        console.log(data)
        const { id, avaliable, email } = data
        //console.log(req.body)
        //const {id,avaliable,email}=req.body
        const updateDonater = await Donaters.update({ avaliable, email }, { where: { id: id } })
        console.log(updateDonater);
        // if (!updateDonater) {
        //     return res.status(400).json({ message: 'Donater not found' })
        // }
        //res.json(updateDonater)
    }
    // postMedical=async(medicalData)=>{  
    //     // const {idmedical_info_donater,hight,weight,birthDate,
    //     //     male_or_female,high_blood_pressure,blood_type,
    //     //     diabetes,kidney_diseases, keidney_stones,
    //     //     hospitalized,surgeries_in_the_past,
    //     //     heart_or_lung_dysfunction,medication_regularly,
    //     //     suffer_from_allergies,smoked_in_the_past,smoking,
    //     //     family_with_diabetes,family_with_kidney_disease,
    //     //     family_with_kidney_stones,born_before_37th_week,
    //     //     famiy_with_clotting_problems,medical_info_donatercol,
    //     //     medical_info_donaterscol}= req.body;



    //      //update the pairs table
    //     const MedicalInformation2=await MedicalInformation.create(medicalData)
    //     return MedicalInformation2;
    //     //router.post("/author/:id/update", author_controller.author_update_post);

    // }

    // postPersonal = async(personalData)=>{  
    //     //console.log(req.body);
    //         // const{idpersonal_info_donater,city,
    //         //       street,num_street,country,email,phone_number,
    //         //       sell_phone,preferred_landuage}=req.body;
    //         //const personal= req.body;
    //         // const PersonalInformation = await PersonalInformation.create({idpersonal_info_donater,city,
    //         //     street,num_street,country,email,phone_number,
    //         //     sell_phone,preferred_landuage});
    //         //        console.log(PersonalInformation);



    //          //update the pairs table

    //         const personalInformation = await PersonalInformation.create(personalData)

    //         //checkPair()
    //         return personalInformation;
    //         //router.post("/author/:id/update", author_controller.author_update_post);
    //     }
    //   // checkPair =()=>{
    //   //   NeedDonation.
    //   // }         
    //     //router.post("/author/:id/update", author_controller.author_update_post);
    // }

    // @desc Create new note
    // @route POST /notes
    // @access Private
    ///////
    // const createNewNote = async (req, res) => {
    //     const { title, contents } = req.body
    //     // Confirm data
    //     if (!title) {
    //     return res.status(400).json({ message: 'All fields are required'
    //     })
    //     }
    //     const donate = await Donaters.create({ title, contents })
    //     if (donate) { // Created
    //     return res.status(201).json({ message: 'New note created' })
    //     } else {
    //     return res.status(400).json({ message: 'Invalid note data
    //     received' })
    //     }
    //     }
    // }
}
const donaterDataAcessor = new DonatersDataAcessor();
module.exports = donaterDataAcessor