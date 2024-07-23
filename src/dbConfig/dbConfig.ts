import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on("connected",()=>{
            console.log("MongoDB connected successful");
        })

        connection.on("error",(error)=>{
            console.log("MongoDB connection error", + error)
            process.exit();
        })
    } catch (error) {
        console.log("Something went wrong !");
        console.log("ERROR",error);
    }
}