import authController from "./authController.js"
import Router from "express"
import {check} from "express-validator"

const authRouter = new Router()

authRouter.post('/registration', [
    check('username', "username cant space").notEmpty(),
    check('password', "size not").isLength({min:4, max:18})
],authController.registration)
authRouter.post('login', authController.login)
authRouter.get('/users', authController.getUsers)

export default authRouter