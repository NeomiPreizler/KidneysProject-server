const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const PersonalNeedsDonation=db.personal_info_needsdonations

class personalInfoNeedsdonationsDal{
    deleteNeedsDonater=async(id)=>{
        return await PersonalNeedsDonation.destroy({ where: {idpersonal_info_donater:id}})

    }
    postPersonal = async(req,res)=>{  
        const {idpersonal_info_needsdonations,
            address,city,cell_phone,
            phone,fax_number,which_hospital_transplat}=req.body

        const personalInformation = await PersonalNeedsDonation.create({
            idpersonal_info_needsdonations,
            address,city,cell_phone,
            phone,fax_number,which_hospital_transplat})

        res.send(personalInformation);
        
    }  
    updateNeedsDonater= async()=>{}
}
const personalInformationDataAcssor=new personalInfoNeedsdonationsDal()
module.exports = personalInformationDataAcssor
