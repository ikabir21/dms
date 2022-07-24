import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import PaytmChecksum from "../utils/PaytmChecksum.js";

dotenv.config();

export const makePayments = async (req, res, next) => {
  console.log(req.body);

  var paymentDetails = {
    amount: req.body.amount,
    customerId: req.body.name,
    customerEmail: req.body.email,
    customerPhone: req.body.phone,
  };

  var params = {};
  const { CLIENT_URL = "http://localhost:3001" } = process.env;
  params["MID"] = process.env.Merchant_ID;
  params["WEBSITE"] = process.env.Website;
  params["CHANNEL_ID"] = "WEB";
  params["INDUSTRY_TYPE_ID"] = "Retail";
  params["ORDER_ID"] = uuidv4();
  params["CUST_ID"] = paymentDetails.customerId;
  params["TXN_AMOUNT"] = paymentDetails.amount;
  params["CALLBACK_URL"] = `${CLIENT_URL}/callback`;
  params["EMAIL"] = paymentDetails.customerEmail;
  params["MOBILE_NO"] = paymentDetails.customerPhone;

  console.log(params);
  var paytmChecksum = PaytmChecksum.generateSignature(
    params,
    process.env.Merchant_Key
  );
  paytmChecksum
    .then(function (checksum) {
      let paytmParams = {
        ...params,
        CHECKSUMHASH: checksum,
      };
      res.status(200).json(paytmParams);
    })
    .catch((err) => next(err));
};
