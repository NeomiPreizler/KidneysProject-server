const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const NeedDonation = db.needsDonations//לא לשכוח לשנות שם
const Donaters = db.donaters
class needDonationDal{
constructor(){
    this.init();
}
    init= async()=>{
        this.db = require('../models/index')
        this.NeedDonation = db.needsDonations//לא לשכוח לשנות שם
}

getAllNeedDonation=async ()=>{
    const needDonation = await NeedDonation.findAll({})
    return needDonation;
}
postNeedsDonation=async(req,res)=>{
    const{id, first_name, last_name,email,id_pair}=req.body;
    const needDonationInfo=await NeedDonation.create({id, first_name, last_name,email,id_pair})
    res.esnd(needDonationInfo);
}




     
    //   .then(function(pair) {
    //     if (!pair) {
    //         return false;
    //     }
    //     return pair.dataValues;
    //  });
}



    //  Donaters.findAll({})


   
getByEmail=async(emailIGot)=>{
    const person=await NeedDonation.findOne({where:{email:emailIGot}})
    return person
}

updateNeedsDonation=async(req,res)=>{
const {id, last_name,avaliable, email}=req.body
const updatedNeed=await NeedDonation.update({last_name,avaliable, email},{where:{id:id}})
res.send(updatedNeed)
}


const needDonationDataAcessor=new needDonationDal();
module.exports= needDonationDataAcessor
