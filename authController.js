import Users from "./Users.js"
import Role from "./Role.js"
import bcrypt from 'bcryptjs'
import {validationResult} from "express-validator"

class authController{
    async registration(req, res){
        try{
            const err = validationResult(req)
            if (!err.isEmpty()){
                return res.status(400).json({message: "Error", err})
            }
            
            const {username, password} = req.body
            const candidate = await Users.findOne({username})

            if (candidate){
                return res.status(400).json({message: "This name is alredy!"})
            }

            const salt = bcrypt.genSaltSync(4);
            const hashPassword = bcrypt.hashSync(password, salt)

            const userRole = await Role.findOne({value: "USER"})

            const user = new Users({username, password: hashPassword, roles: [userRole.value]})
            await user.save()

            return res.json({message: "Reg sacs!"})
        }catch (e){
            console.log(e)
            res.status(400).json({message: "Reg err"})
        }
    }
    async login(req, res){
        try{

        }catch (e){
            console.log(e)
            res.status(400).json({message: "Log err"})
        }
    }
    async getUsers(req, res){
        try{
            
            res.json("fddfd")
        }catch (e){
            
        }
    }
}

export default new authController()