const { DATEONLY } = require('sequelize');
const db = require('../models/index');

const PersonalInfoDonaters = require('../models/personal_info_donaters');
// const Donaters = db.donaters
const PersonalInformationDonater=db.personal_info_donaters
// const MedicalInformation=db.medical_info_donaters
class personalInfoDonatersDal{

    postDonater=async(req,res)=>{
        const{   idpersonal_info_donater, city,
            address, country, phone_number,
            cell_phone, preferred_language}=req.body;

        const donaterPersonalDetails = await PersonalInformationDonater.create({
            idpersonal_info_donater, city,
            address, country, phone_number,
            cell_phone, preferred_language})
        
            res.send(donaterPersonalDetails)
    }
    deleteDonater=async(id_donater)=>{
        return await PersonalInfoDonaters.destroy({ where: {idpersonal_info_donater:id_donater}})
    }
    updateDonaterPersonal=async(req,res)=>{
        const {idpersonal_info_donater,city,street, num_street, country,
        phone_number,cell_phone, preferred_language } = req.body;
        const updatedonaterPersonal=await PersonalInformationDonater.update({city,street, num_street, country,
            phone_number,cell_phone, preferred_language },{where:{id:idpersonal_info_donater}})
        if (!updatedonaterPersonal) {
            return res.status(400).json({ message: 'donaterPersonal not found' })
        }
        res.json(updatedonaterPersonal)
    }


}
const donatersPersonalDataAcessor=new personalInfoDonatersDal()
module.exports = donatersPersonalDataAcessor