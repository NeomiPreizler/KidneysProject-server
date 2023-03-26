
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
    postDonater = async (body) => {
    console.log(body);
       // const {id, first_name, last_name, email, id_pair}=req.body
        const donater_details = await Donaters.create(body)
            //{id, first_name, last_name, email, id_pair})
            return donater_details;
       // res.send(donater_details)
    }
    findPair=async(idDonater)=>{
        return Donaters.findOne({
            attributes:['id_pair'],
            where:{
                id:idDonater,
            }
        })
    }
    getByUserId = async (userid) => {
     console.log("useriddddd dal",userid);
        const person = await Donaters.findOne({ where: { userId: userid }, 
             include:[{model: PersonalInformation,as:'donaterPersonal'}/*,{model:MedicalInformation,as:'donaterMedical'}*/]
        })
        
            
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
   
}
const donaterDataAcessor = new donatersDal();
module.exports = donaterDataAcessor