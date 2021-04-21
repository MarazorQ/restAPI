import Users from "../model/Users.js"
import Role from "../model/Role.js"
import bcrypt from 'bcryptjs'
import {validationResult} from "express-validator"
import jwt from "jsonwebtoken"



const generateTocken = (id, roles) =>{
    const secret = "SEC"
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

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
            const {username, password} = req.body
            const user = await Users.findOne({username})
            if (!user){
                return res.status(400).json({message: `User ${username} cant search`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword){
                res.status(400).json({message: "Neverni parol"})
            }
            const token = generateTocken(user._id, user.roles)
            return res.json({token})
        }catch (e){
            console.log(e)
            res.status(400).json({message: "Log err"})
        }
    }
    async getUsers(req, res){
        try{
            const users = await Users.find()
            res.json(users)
        }catch (e){
            
        }
    }
}

export default new authController()