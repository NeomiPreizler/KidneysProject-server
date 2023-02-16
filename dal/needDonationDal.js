const { DATEONLY } = require('sequelize');
const db = require('../models/index')
const NeedDonation = db.needsDonations//לא לשכוח לשנות שם
const Donaters = db.donaters
class NeedDonationDataAcessor{
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
postNeedsDonation=async(info)=>{
    const needDonationInfo1=await NeedDonation.create(info)
    return needDonationInfo1;
}

findPair=async(id_donate)=>{
    return NeedDonation.find({
        where: {
           id:id_donate,
        //    id_pair:idToCheck
        },
        // include : [{ model: Donaters, as: 'donater', attributes:['id_pair'], where:{id_pair:idToCheck}}]
     }) 
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
}
updateNeedsDonation=async(req,res)=>{
const {id, last_name,avaliable, email}=req.body
const updatedNeed=await NeedDonation.update({last_name,avaliable, email},{where:{id:id}})
res.send(updatedNeed)
}


const needDonationDataAcessor=new NeedDonationDataAcessor();
module.exports= needDonationDataAcessor
