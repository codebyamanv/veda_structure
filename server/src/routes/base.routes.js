import { Router } from 'express'

const baseRouter = Router()

baseRouter.get('/', (req, res) => {
    res.send('Veda Structure API: Started successfully')
})

export default baseRouter
