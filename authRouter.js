import authController from "./authController.js"
import Router from "express"

const authRouter = new Router()

authRouter.post('/registration', authController.registration)
authRouter.post('login', authController.login)
authRouter.get('/users', authController.getUsers)

export default authRouter