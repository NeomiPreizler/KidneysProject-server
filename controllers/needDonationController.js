
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
    
    postNeedDonationDetails=async(req,res)=>{
      const{id,userId, first_name, last_name, avaliable,has_pair,id_pair,

            idmedical_info_needsdonations,blood_type,hight,
            weight,birthDate,gender,cause_of_kidney_failure,
            dialysis_type,dialysis_start_date,
            kidney_transplant_in_the_past,antibodies,heart_rate_check,
            psychosocial_assessment,surgical_procedure,

            idpersonal_info_needsdonations,address,city,cell_phone,
            phone_number,country,preferred_language

        }=req.body;

        var needsDonationInfo = await needDonationDal.postNeedsDonation({ id,userId, first_name, last_name,avaliable,has_pair,id_pair});
        console.log(needsDonationInfo);
        
        var needsDonationMedical=await medicalNeedDonationDal.postMedical({ 
            idmedical_info_needsdonations,blood_type,hight,
            weight,birthDate,gender,cause_of_kidney_failure,
            dialysis_type,dialysis_start_date,
            kidney_transplant_in_the_past,antibodies,heart_rate_check,
            psychosocial_assessment,surgical_procedure})

        console.log(needsDonationMedical);

        // if (needsDonationMedical) { // Created
        //     return res.status(201).json({ message: 'New donater created'+ needsDonationMedical})
        // } else {
        //     return res.status(400).json({ message: 'Invalid donater data received' })
        // }


        var needDonationPersonal=await personalNeedDonationDal.postPersonal({idpersonal_info_needsdonations,
            address,city,cell_phone,
            phone_number,country,preferred_language})

        console.log(needDonationPersonal);

        // if (needDonationPersonal) { // Created
        //     return res.status(201).json({ message: 'New donater created'+ needDonationPersonal})
        // } else {
        //     return res.status(400).json({ message: 'Invalid donater data received' })
        // }
  
    }
    postNeedsDonation=async(req,res)=>{
      const {id,id_pair}=req.body;
      let idsPairOfMyPair=await donaterDal.findPair(id_pair)
      if (idsPairOfMyPair){
        if(idsPairOfMyPair==id){
            await this.postNeedDonationDetails(req.body);
            pairDal.updateHasPair(id,id_pair);//validation in the dal
            pairDal.createNewPair(id,id_pair);//validation in the dal
        }
        else{return res.status(400).json({ message: 'You do not appear as a pair of id_pair you have entered' })}
      }
      else{
            await this.postNeedDonationDetails(req.body);
            return res.send("There is no pair for you in the system. You are not available in the system until a pair enters for you");
        }
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

const needDonationController=new NeedDonationController()
module.exports = needDonationController



