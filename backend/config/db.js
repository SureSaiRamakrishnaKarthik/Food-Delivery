import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://karthik:1234@cluster0.zmuctrv.mongodb.net/?appName=Cluster0"
    );
    console.log("Mongo Db connected successfully");
  } catch (error) {
    console.log(`error at ${error}`);
  }
};
export default connectdb;

//mongodb+srv://karthik:1234@cluster0.zmuctrv.mongodb.net/?appName=Cluster0
