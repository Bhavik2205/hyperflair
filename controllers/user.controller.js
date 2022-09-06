import User from '../models/users.js';
import requestIp from 'request-ip';
import { addressValidate, unameValidate } from '../middleware/fieldValidator.js';

export const createUser = async(req, res) => {
    const data = req.body;
    try {
        if(!data.address){
            res.status(409).json({message: "address is must to continue"});
        }else {
            const address = data.address;
            await User.findOne(address)
            .exec((address, err) => {
                if(address){
                    res.status(409).json({message: "address already registered"})
                }else{
                    const valid = WAValidator.validate(address, 'ETH')
                    if(!valid){
                        res.status(409).json({message: "Invalid address"});
                    } else {
                        if(data.uname) {
                             User.findOne(uname)
                                .exec(async(err, user) => {
                                    if(user){
                                        res.status(409).json({message: "please try another username"});
                                    }else{
                                        const clientIp = requestIp.getClientIp(req);
                                        const datalen = await User.find();
                                        if(datalen.length === 0){
                                            const Id  = 1;
                                            data.Id = Id
                                        }else {
                                            const length = datalen.length;
                                            const lastItem = datalen[length-1];
                                            const lastItemId = lastItem.Id;
                                            data.Id = lastItemId + 1            
                                        }
                                        const newUser = await User.create({...data, created_ip: clientIp })
                                        res.status(201).json(newUser);
                                }
                            })
                        };
                    };
                }
            })
        }
        
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}