import User from "../models/userModel.js";
import ErrorMessage from "../utils/errorMessage.js";
import validate from "../validators/validate.js";


export const profile=async(req,res,next)=>{
    const id = req.user._id;
    // console.log(id);
     
    User.findById(id).then((user)=>{
        if(user){
            return res.status(200).json({
            success: true,
              name:user.name,
              personalEmail:user.personalEmail,
              instituteEmail:user.instituteEmail,
              scholarId:user.scholarId,
              mobile:user.mobile,
              branch:user.branch,
              
        });
    }

})
.catch((err) => next(err));


};
export const payments=async(req,res,next)=>{
    const id = req.user.id;
    // console.log(id);
     
    User.findById(id).then((user)=>{
        if(user){
            return res.status(200).json({
                success: true,
                bankDetails:user.bankDetails,
                prevPayments:user.prevPayments
        });
    }

})
.catch((err) => next(err));
};