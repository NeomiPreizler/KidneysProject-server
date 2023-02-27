
const { DATEONLY } = require('sequelize');
const { donaters } = require('../models/index');
const db = require('../models/index');
const Donaters = db.donaters
const PersonalInformation=db.personal_info_donaters
const MedicalInformation=db.medical_info_donaters
class donatersDal {
    updateNoPair = async(id) => {
        return Donaters.update({has_pair:false},{where:{id: id }})
    }
    // constructor(){
    //     this.init();
    // }
    //     init= async()=>{
    //         this.db = require('../models/index')
    //         this.Donaters = db.donaters
    // }
    checkCorrectId(id,id_pair){
        
    }
    updateNoPair(){}
    deleteDonater = async (id) => {
         return await Donaters.destroy({ where: { id:id} });

    }
    getAllDonaters = async () => {
        const donaters = await Donaters.findAll({})
        return donaters;
    }
    postDonater = async (req,res) => {
        const {id, first_name, last_name, email, id_pair}=req.body
        const donater_details = await Donaters.create({id, first_name, last_name, email, id_pair})
        res.send(donater_details)
    }
    getByEmail = async (emailIGot) => {
        //לשנות לשם משתמש ולא דרך מייל
        const person = await Donaters.findOne({ where: { email: emailIGot } ,
            include:[{model: PersonalInformation,as:'donaterPersonal'},{model:MedicalInformation,as:'donaterMedical'}]})
        return person
    }
    updateDonater = async (data) => {
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
const donaterDataAcessor = new donatersDal();
module.exports = donaterDataAcessor