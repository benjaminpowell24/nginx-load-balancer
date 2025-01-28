import express from "express"

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('Hello World from app 1')
})

router.get('/health', (req, res) => {
    res.status(200).send('App 1 is up and running')
})

export default router