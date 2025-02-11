const mongoose = require("mongoose");

const conn = {};

export const connectToDb = async () => {
    try{
        if(conn.isConnected){
            console.log("Exisiting connection!!");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        conn.isConnected = db.conn[0].readyState;
    }catch(err){
        console.log("Error");
    }
}