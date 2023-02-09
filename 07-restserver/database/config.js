import mongoose from "mongoose"

const connection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log("Connected to Mongo");

    }catch(err){
        console.log(err);
        // throw Error('Error a la hora de iniciar la base de datos');
    }
}


export { connection }