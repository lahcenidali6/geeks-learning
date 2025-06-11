import express from "express"
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("welcome in home page")
})
router.get("/about",(req,res)=>{
    res.send("welcome in about us page")
})

export default router