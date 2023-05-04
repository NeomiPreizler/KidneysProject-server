const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const PersonalNeedsDonation=db.personal_info_needsdonations

class personalInfoNeedsdonationsDal{
    deleteNeedsDonater=async(id)=>{
        return await PersonalNeedsDonation.destroy({ where: {idpersonal_info_donater:id}})

    }
    postPersonal = async(body)=>{  
        const personalInformation = await PersonalNeedsDonation.create(body);
        return personalInformation;
    }  
    updatePersonalNeedsDonation= async(userid,body)=>{
       const {address,city,cell_phone,phone_number,country,preferred_language}=body;
       return await PersonalNeedsDonation.update({address,city,cell_phone,phone_number,country,preferred_language},{where: {idpersonal_info_needsdonations:userid}})
    }
}
const personalInformationDataAcssor=new personalInfoNeedsdonationsDal()
module.exports = personalInformationDataAcssor
