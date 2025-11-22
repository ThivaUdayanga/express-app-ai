import express from 'express'
import greatingRouter from './routes/greating.routs'

const app = express()

app.use(express.json())

app.use("/greating" , greatingRouter)

app.get("/", (req, res)=>{
    res.send("Hello world")
})

app.listen(5000, 
    ()=>{
        console.log("Server started in port 5000")
    }
)