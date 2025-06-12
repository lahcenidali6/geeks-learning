import express from "express"
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/quiz.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()
app.use(express.static(path.join(__dirname, "public")));


app.use ("/",router)


app.listen(5000,()=>{
    console.log("server is running!")
})