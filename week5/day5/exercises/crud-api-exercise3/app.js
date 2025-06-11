import express from "express"
import fetchPosts from "./data/dataService.js"
const port =5000

const app = express()
app.use(express.json())
app.get("/posts",async (req,res)=>{
    try{
        const posts = await fetchPosts()
         console.log('Posts successfully retrieved and sent.')
         res.json(posts)
    }catch (err){
        res.status(500).json({ error: 'Failed to retrieve posts.' })
    }
    
})
app.listen(port,()=>{
    console.log("server is running!")
})
