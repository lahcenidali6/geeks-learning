import express from "express"
import router from "./routes/todos.js"
const app=express()

app.use("/",router)

app.listen(3000,()=>{
    console.log("server is running !")
})