const jwt = require( 'jsonwebtoken');
const User=  require( '../models/User');
const { SECRET_TOKEN }  =  require('../config/secretToken');

module.exports = getUser = async (authorization) => {
    if (authorization) {      
        const { ok, result } = await new Promise(resolve => {
            jwt.verify(authorization, SECRET_TOKEN, (err, result) => {
                err ? resolve({ ok: false, result: err }) 
                    : resolve({ ok: true, result })
            })
        });
        const user = await User.findOne({ _id: result.id })
        return ok ? user : null
    }
    return null
};