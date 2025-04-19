import {model,Schema} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export const User_Schema = new Schema({
    name : {
        type : String ,
        require : true
    },
    last_name : {
        type : String ,
        require : true
    },
    email : {
        type : String ,
        require : true,
        unique : true
    },
    nickname : {
        type : String ,
        require : true,
        unique : true
    },
    password : {
        type : String ,
        require : true
    },
    role : {
        type : String,
        default : "user",
        enum : ["guest","user","admin","super_admin"],
    },
    is_active : {
        type : Boolean,
        default : false
    },
    confirmed : {
        type : Boolean,
        default : false
    },
    master_points : {
        type : Number,
        default : 0
    },
    is_seed : {
        type : Boolean,
        default : false
    }
},{versionKey : false , timestamps : true});

User_Schema.plugin(mongoosePaginate);
const User = model('Users' , User_Schema);
export default User;