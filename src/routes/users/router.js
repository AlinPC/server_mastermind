import exprees from "express";
import { list_users } from "../../controllers/users/controller.js";

const router = exprees.Router();

router.get('/list_users',async (req , res , next)=>{
    try{
        res.status(200).json(await list_users(req.user , req.params.page ))
    }
    catch(error){
        next(error)
    }
});

export default router;