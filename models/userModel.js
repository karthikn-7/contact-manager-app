const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please add the username"]
    },
    email:{
        type:String,
        required:[true, "Please add the user email address"]
    },
    password:{
        type:String,
        required:[true, "Please add the user password"]
    }
},
{
    timestamp:true
}
);


const user = mongoose.model("user", userschema);
module.exports=user;
