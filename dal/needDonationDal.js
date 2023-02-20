const { DATEONLY } = require('sequelize');
const { donaters } = require('../models/index');
const db = require('../models/index')
const NeedDonations = db.needsDonations//לא לשכוח לשנות שם
const Donaters = db.donaters
class needDonationDal {
    constructor() {
        this.init();
    }
    init = async () => {
        this.db = require('../models/index')
        this.NeedDonation = db.needsDonations//לא לשכוח לשנות שם
    }
    deleteNeedsDonater=async(id)=>{
        return await Donaters.destroy({ where: {idpersonal_info_donater:id}})

    }
    getAllNeedDonation = async () => {
        const needDonation = await NeedDonations.findAll({})
        return needDonation;
    }
    postNeedsDonation = async (req, res) => {
        const { id, first_name, last_name, email, id_pair } = req.body;
        const needDonationInfo = await NeedDonations.create({ id, first_name, last_name, email, id_pair })
        res.send(needDonationInfo);
    }

    findPair = async (idNeedsDonation) => {
        return NeedDonations.find({
            where: {
                id: idNeedsDonation,
            },attributes:[id_pair]
            // include : [{ model: Donaters, as: 'donater', attributes:['id_pair'], where:{id_pair:idToCheck}}]
        })}
    



    //  Donaters.findAll({})



    getByEmail = async (emailIGot) => {
        const person = await NeedDonations.findOne({ where: { email: emailIGot } })
        return person
    }

    updateNeedsDonation = async (req, res) => {
        const { id, last_name, avaliable, email } = req.body
        const updatedNeed = await NeedDonations.update({ last_name, avaliable, email }, { where: { id: id } })
        res.send(updatedNeed)
    }
    updateNoPair = async(id) => {
        return NeedDonations.update({has_pair:false},{where:{id: id }})
    }
}

const needDonationDataAcessor = new needDonationDal();
module.exports = needDonationDataAcessor
