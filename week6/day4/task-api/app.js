import express from "express"
import router from "./routes/usersRoute.js"
const app= express()


app.use(express.static('public'));
app.use("/",router)


app.listen(5000,()=>{
    console.log("server is running")
})