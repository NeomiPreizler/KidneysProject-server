
const needDonationDal=require('../dal/needDonationDal')
const medicalNeedDonationDal=require('../dal/medicalInfoNeedsdonationsDal')
const personalNeedDonationDal=require('../dal/personalInfoNeedsdonationsDal')
const pairDal=require('../dal/pairsDal')
const donaterDal=require('../dal/donatersDal')
const { donaters } = require('../models')
class NeedDonationController{
    getAllNeedDonation=async(req, res)=>{
        var NeedDonation=await NeedDonationDal.getAllNeedDonation();

        if (!NeedDonation?.length) {
            return res.status(400).json({ message: 'No NeedDonation found' })
            }
            // console.log(donaters);
            res.json(NeedDonation)
            
    } 
    updateNeedsDonater=async(req,res)=>{
        
    }
    postNeedDonation=async(req,res)=>{
      const{id, first_name, last_name, email,id_pair,
            idmedical_info_needsdonations,blood_type,hight,
            weight,birthDate,male_or_female,cause_of_kidney_failure,
            dialysis_type,dialysis_start_date,
            kidney_transplant_in_the_past,antibodies,

            idpersonal_info_needsdonations,address,city,cell_phone,
            phone,fax_number,which_hospital_transplat

        }=req.body;

        idsPair_ofMyPair=pairDal.findPairInDonatersTable(id_pair);
        if(!idsPair_ofMyPair)
        {
          pairExists=false
        }
        if(idsPair_ofMyPair!=id&&pairExists)
        {
            return res.status(400).json({ message: 'You do not appear as a pair of id_pair you have entered' })
        }

        var needsDonationInfo = await needDonationDal.postNeedsDonation({ id, first_name, last_name,email,id_pair});
        console.log(needsDonationInfo);
        // if (needsDonationInfo) { // Created
        //     return res.status(201).json({ message: 'New donater created'+ needsDonationInfo})
        // } else {
        //     return res.status(400).json({ message: 'Invalid donater data received' })
        // }

        var needsDonationMedical=await medicalNeedDonationDal.postMedical({idmedical_info_needsdonations,
            blood_type,hight,
            weight,birthDate,male_or_female,cause_of_kidney_failure,
            dialysis_type,dialysis_start_date,
            kidney_transplant_in_the_past,antibodies,})
            console.log(needsDonationMedical);

        // if (needsDonationMedical) { // Created
        //     return res.status(201).json({ message: 'New donater created'+ needsDonationMedical})
        // } else {
        //     return res.status(400).json({ message: 'Invalid donater data received' })
        // }


        var needDonationPersonal=await personalNeedDonationDal.postPersonal({idpersonal_info_needsdonations,
            address,city,cell_phone,
            phone,fax_number,which_hospital_transplat})
            console.log(needDonationPersonal);

        // if (needDonationPersonal) { // Created
        //     return res.status(201).json({ message: 'New donater created'+ needDonationPersonal})
        // } else {
        //     return res.status(400).json({ message: 'Invalid donater data received' })
        // }
  
}
deleteOne=async(req, res)=>{

    const { id } = req.body
        if (!id) {// Confirm data
            return res.status(400).json({ message: 'donaters ID required' })
        }
        const hasPair = await pairDal.findPair(id);
        if (hasPair) {
            const updateNotPair = await donaterDal.updateNoPair(hasPair.dataValues.id_donater)
            const id_pair = await pairDal.deletePair(id);
        }

        const medicalNeedDonation = await medicalNeedDonationDal.deleteNeedsDonater(id);
        const personalNeedDonation = await personalNeedDonationDal.deleteNeedsDonater(id);
        const needsDonate = await needDonationDal.deleteNeedsDonater(id);


        // await Book.destroy({ where: {id: id}});
        // if (remove)
        res.json(`${id} deleted`)
        // else
        //     res.json(`${id} not deleted`)

}
getByEmail = async (req, res) => {
    const person = await donaterDal.getByEmail(req.params.email)
    console.log(person)
    res.send(person)

}
updateNeedsDonation = async (req, res) => {
    const{id, last_name,avaliable, email,

        idmedical_info_needsdonations,hight,
        weight,antibodies,

        idpersonal_info_needsdonations,address,city,cell_phone,
        phone,fax_number,which_hospital_transplat

    }=req.body;

    var updateNeedsDonation = await NeedDonationDal.updateNeedsDonation(id,last_name,avaliable,email);
    console.log(updateNeedsDonation)

    var updateNeedsDonation = await Medical_info_needsdonations.updateMedicalNeedsDonater(idmedical_info_needsdonations,hight,weight,antibodies);
    console.log(updateNeedsDonation);

    // var updatedonatePersonal = await personalInfoDonatersDal.updateDonaterPersonal(donorPersonol);
    // console.log(updatedonatePersonal)
}
}
// // @desc Get all donaters
// // @route GET /donaters
// // @access Private
// const getOneNote = async (req, res) => {
// const id = req.params.id
// const note = await Note.findOne({where:{id:id}})
// res.json(note)
// }
// // @desc Create new note
// // @route POST /notes
// // @access Private
// const createNewNote = async (req, res) => {
// const { title, contents } = req.body
// // Confirm data
// if (!title) {
// return res.status(400).json({ message: 'All fields are required'
// })
// }
// const note = await Note.create({ title, contents })
// if (note) { // Created
// return res.status(201).json({ message: 'New note created' })
// } else {
// return res.status(400).json({ message: 'Invalid note data
// received' })
// }
// }
// // @desc Update a note
// // @route PATCH /notes
// // @access Private
// const updateNote = async (req, res) => {
// const { id, title, contents } = req.body
// // Confirm data
// if (!id || !title) {
// return res.status(400).json({ message: 'All fields are required'
// })
// }
// const note = await Note.update({title,contents},{where:{id:id}})
// if (!note) {
// return res.status(400).json({ message: 'note not found' })
// }
// res.json(note)
// }
// // @desc Delete a note
// // @route DELETE /notes
// // @access Private
// const deleteNote = async (req, res) => {
// const { id } = req.body
// // Confirm data
// if (!id) {
// return res.status(400).json({ message: 'note ID required' })
// }
// await Note.destroy({
// where: {
// id: id
// }
// });
// res.json( `Note with ID ${id} deleted`)
// }
const needDonationController=new NeedDonationController()
module.exports = needDonationController



