import mongoose from "mongoose";

export const dbConnection = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/ ${process.env.DB_NAME}`) 
        console.log(`MONGODB Connected!! DB_HOST: ${connectionInstance.connection.host}`); 
    } catch(error){
        console.log("MONGODB connection FAILED", error)
        process.exit(1)
    }
}