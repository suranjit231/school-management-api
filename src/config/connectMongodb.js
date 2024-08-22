import mongoose from "mongoose";


const connectMongodb = async()=>{
    try{
        await mongoose.connect(`${process.env.DB_URL}/schoolManagement`);
        console.log("mongodb is connected successfully");

    }catch(error){
        console.log("error connecting mongodb: ", error);
    }
}

export default connectMongodb;