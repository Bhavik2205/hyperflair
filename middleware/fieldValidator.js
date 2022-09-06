import User from "../models/users.js";
import WAValidator from 'wallet-address-validator';

export const unameValidate = async(req, res, next) => {
    const data = req.body;
    if(data.uname) {
        await User.findOne(uname)
            .exec(async(err, user) => {
                if(user){
                    res.status(409).json({message: "please try another username"});
                }else{
                    next();
                }
            })
    }
}

export const addressValidate = async(req, res, next) => {
    const data = req.body;
    const walletadd = data.address;
    const valid = WAValidator.validate(walletadd, 'ETH')
        if(!valid){
            res.status(409).json({message: "Invalid address"});
        } else {
            next();
        }
}