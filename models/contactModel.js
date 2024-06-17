const mongoose = require('mongoose')


const contactShcema = mongoose.Schema({

    name:{
        type:String,
        required:[true, 'please add a contact name'],
    },

    email:{
        type:String,
        required:[true, 'please add a contact email'],
    },
    phone:{
        type:String,
        required:[true, 'please add a contact number']
    }
}
)
 
module.exports= mongoose.model("contact",contactShcema)