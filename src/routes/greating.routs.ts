import {Router, Request, Response} from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, welcome to our service!')
    res.json(
        {
            massage : 'Hello, welcome to our service!'
        }
    )
})

router.post('/', (req: Request, res: Response) => {
    const {name} = req.body
    res.json({massage :`Hello, ${name}! Welcome to our service!`})
})

export default router