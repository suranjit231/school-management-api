import schoolModel from "./schoolSchema.js";
import { AppError } from "../../middleware/errorHandler.middleware.js";


//====== a repository class contains methods for cmmunicate between database and controller =========//
export default class SchoolRepository{


    //====== add a new school =======//
    async addSchool(schoolInfo) {
        try {
            const { name, address, latitude, longitude } = schoolInfo;
    
            // Validate data before insertion
            if (!name || !address || latitude === undefined || longitude === undefined) {
               
                throw new AppError("All fields are required", 401)
            }
    
            // Create school document
            const newSchool = new schoolModel({
                name,
                address,
                location: {
                    type: 'Point',
                    coordinates: [longitude, latitude] 
                }
            });
    
            const savedSchool = await newSchool.save();
            return { success: true, message: 'School added successfully', school: savedSchool };
        } catch (error) {
           throw error;
        }
    }
    


    //======== get schools by longitude and latitude ==================//
    async getSchoolList(latitude, longitude){
        try{

            //-- throw error is no latitude and longitude -----//
            if (latitude === undefined || longitude === undefined) {
               
                throw new AppError("Latitude and longitude are required", 401);
              }

              //---- finding the schools by shorting nearest to location coordinate -----//
              const schools = await schoolModel.find({
                location: {
                  $near: {
                    $geometry: {
                      type: 'Point',
                      coordinates: [parseFloat(longitude), parseFloat(latitude)]
                    }
                  }
                }
              });
          
            return {success:true, message:"schools finding successfully", schools:schools};

        }catch(error){
            throw error;
        }

    }
    
}