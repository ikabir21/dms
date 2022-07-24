import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import gravatar from "gravatar";

const SALT_WORK_FACTOR = 12;

// 0 == student, 1 == admin, 2 == teachers
// branch code: EI, CSE, ME, CE, ECE, EE

const userSchema = mongoose.Schema(
  {
    name: { type: String, default: "" },
    personalEmail: { type: String, unique: true },
    instituteEmail: { type: String, unique: true },
    scholarId: String,
    batch:String,
    role: {type: Number, default: 0},
    mobile: { type: String,  unique: true},
    isEmailVerified: { type: Boolean, default: false },
    password: { type: String, default: "" },
    profileUrl: {type: String, default: ""},
    gender: {type: String, default: ""},
    branch: {
      name: String,
      code: String
    },
    joiningDate: String,
    documentReq :[
      {
        file_id: { type: String, default: uuidv4() },
        file_name: String,
        status: String,
        ctreatedAt: { type: Date, default: Date.now }
      }
    ],
    bankDetails: {
      accountNo: String,
      ifscCode: String,
      branchName: String,
      bankName: String,
      accountHolderName: String,
    },
    prevPayments:[
      {
        transId: String,
        amount: String,
        status: String,
        date:String
      }
    ],
    results: [{
      resultId: {
         type: mongoose.Schema.Types.ObjectId, ref: 'Result' 
    }
  }
    ]
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err);

        this.profileUrl = gravatar.url(this.personalEmail, {s: '100', r: 'x', d: 'retro'}, false);
        this.password = hash;
        next();
      });
    });
  }
});

userSchema.methods.comparePassword = async function (password, next) {
  return bcrypt.compare(password, this.password, (err, isMatched) => {
    if (err) next(err);
    else next(null, isMatched);
  });
};

const User = mongoose.model("User", userSchema);
export default User;