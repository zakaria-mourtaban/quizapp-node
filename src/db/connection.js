import { connect } from "mongoose";

const connectToDatabase = async () => {
  try {
    await connect("mongodb://localhost:27017/quizdb");

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
