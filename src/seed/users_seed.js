import User from "../models/users/model.js";
import faker from "faker";

const seed_users = async(nr_users) => {
    try{
        Array(nr_users).fill().forEach(async()=>{
            const user = {
                name : faker.name.firstName(),
                last_name : faker.name.lastName(),
                email : faker.internet.email(),
                nickname: faker.internet.userName(),
                password: faker.internet.password(),
                is_seed : true
            };
            await User.create(user)
        })
        console.log("seeders created")
    } catch (error) {
        console.error("bad request seed" , error)
    }
};
export default seed_users;