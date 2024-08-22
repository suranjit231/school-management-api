import SchoolRepository from "./school.repository.js";

export default class SchoolController{

    constructor(){
        this.schoolRepository = new SchoolRepository();
    }

    //====== add new school controller ======//
    async addNewSchool(req, res, next){
        try{
            const result = await this.schoolRepository.addSchool(req.body);
            if(result?.success){
                return res.status(201).json(result);
            }

        }catch(error){
            next(error);
        }
    }

    //===== get all school list sorted by latitude and longitude ==========//
    async getSchoolList(req, res, next){
        try{
         const { latitude, longitude } = req.query;
         const result = await this.schoolRepository.getSchoolList(latitude, longitude);

         if(result?.success){
            return res.status(200).json(result);
         }


        }catch(error){
            next(error);
        }
    }


}