import mongoose from "mongoose";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology: true});
  
  const db = mongoose.connection;
  db.on("error", (error) => console.error("MongoDB connection error:", error));
  db.once("open", () => console.log("Connected to MongoDB Atlas"));
  
  console.log(`Mongodb is connected with ${connection.host}`);
};
