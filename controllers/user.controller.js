import User from '../models/users.js';
import requestIp from 'request-ip';
import WAValidator from 'wallet-address-validator';

export const createUser = async(req, res) => {
    const data = req.body;
    const address = data.address;
    const uname = data.uname;
    const clientIp = requestIp.getClientIp(req);
    const detail = await User.findOne({address:address});
    
    try {
        if(req.file){
            const profile = req.file.profile[0];
            const cover = req.file.cover[0];
            data.cover = cover.filename;
            data.profile = profile.filename;
        }
        if(!address){
            res.status(409).json({message: "Address is must to register"});
        }else if (detail) {
            res.status(200).json(detail);
        } else {
            const valid = WAValidator.validate(address, 'ETH')
            if(!valid){
                res.status(409).json({message: "Invalid address"});
            } else if (uname){
                const username = await User.findOne({uname: uname})
                if(username){
                    res.status(409).json({message: "Username not available"})
                } else {
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
            } else {
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
        }
    } catch (error) {
        res.status(404).json({message: error.message });
    }
}

