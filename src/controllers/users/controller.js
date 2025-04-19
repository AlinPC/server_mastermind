import User from "../../models/users/model.js";


export const list_users = async () => {
    
    let users = await User.find()
    return users
};