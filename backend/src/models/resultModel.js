import mongoose from "mongoose";

const resultSchema = mongoose.Schema(
  {
    semName: String,
    sgpa: String,
    cgpa: String,
    subjects: [{
      name: String,
      grade: String,
      coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }]
  },
  { timestamps: true }
);


const Result = mongoose.model("Result", resultSchema);
export default Result;