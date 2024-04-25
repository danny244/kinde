import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
     mongoose.set("strictQuery", true)

     if (isConnected) {
          console.log("Mongodb is already connected");
          return;
     }

     try {
          await mongoose.connect(process.env.MONGODB_URL, {
               dbName: "chat-app",
               useNewUrlParser: true,
               useUnifiedTopology: true,
          })

          isConnected = true;

          console.log('Mongodb is connected successfully');

     } catch (error) {
          console.log(error);
     }
}