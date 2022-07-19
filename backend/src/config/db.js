import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
};

export default connectDB;
