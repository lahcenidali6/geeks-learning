import express from "express"
import router from "./routes/books.js"
const app = express()
app.use("/",router)




app.listen(5000,()=>{
    console.log("server is running!")
})