import dotenv from "dotenv";

dotenv.config();

const Confidence = {
    Url_DB : process.env.DDB_URL,
    Port_DB : process.env.JWT_PORT,
    Bcrypt_1 : process.env.BCRYPT_LOOP_1,
    Bcrypt_2: process.env.BCRYPT_LOOP_2,
    Bcrypt_3 : process.env.BCRYPT_LOOP_3,
    Jwt_secret: process.env.JWT_SECRET,
};
export default Confidence