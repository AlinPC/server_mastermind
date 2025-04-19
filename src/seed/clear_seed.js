import User from "../models/users/model.js";

const clear_seeds = async()=>{
    try {
        await User.deleteMany({is_seed : true})
        console.log("Seeders deleted")
    } catch (error) {
        console.log("Seeders not deleted")
    }
};
export default clear_seeds;