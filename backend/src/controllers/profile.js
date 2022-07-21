import User from "../models/userModel.js";
import Result from "../models/resultModel.js";
import ErrorMessage from "../utils/errorMessage.js";
import validate from "../validators/validate.js";


export const profile=async(req,res,next)=>{
    const  id=req.body.id;
    //  console.log(id);
     

    User.findById(id).then((user)=>{
        if(user){
            // console.log(user);
           let  results=user.results;
          console.log(user);
          let resultarry=[];
          console.log(results);
            results.forEach(element => {
                console.log(element);
                Result.findById(element.resultId).then((result)=>{
                    resultarry.push(result);
                })
            });
            return res.status(200).json({
                success: true,
              name:user.name,
              personalEmail:user.personalEmail,
              instituteEmail:user.instituteEmail,
              scholarId:user.scholarId,
              mobile:user.mobile,
              branch:user.branch,
               results:resultarry
              
        });
    }

})
.catch((err) => next(err));


};
export const getPayments=async(req,res,next)=>{
    const  id=req.body.id;
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