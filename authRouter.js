const Router = require('express')
const authRouter = new Router()

authRouter.post('/registration')
authRouter.post('login')
authRouter.get('/users')

module.exports = authRouter