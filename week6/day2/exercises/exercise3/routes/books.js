import express from "express"
const router = express.Router()
router.use(express.json())
 const books=[]
router.get("/books",(req,res)=>{
    res.json(books)
})
// Add a new book item
router.post("/books",(req,res)=>{
    const newbook={
        id:books.length+1,
        title:req.body?.title,
        author:req.body?.author,
        year:req.body?.year,

    }
    books.push(newbook)
    res.status(200).json({message:"book has been added!"})
})

// Update a book item by ID
router.put("/books/:id",(req,res)=>{
    const id = Number(req.params.id)
    const index=books.findIndex(book=>book.id==id)
    if(index==-1){
        res.json({message:"book not exist in todo list!"})
    }
    else {
        books[index].book=req.body.title||books.title
        books[index].book=req.body.author ||books.author
        books[index].book=req.body.year ||books.year
        res.status(200).json({message:"book has been updated!"})
    }
})
// Delete a book item by ID
router.delete("/books/:id",(req,res)=>{
    const id = Number(req.params.id)
    const index=books.findIndex(book=>book.id==id)
    if(index==-1){
        res.json({message:"book not exist in books list!"})
    }
    else {

        books.splice(index,1)
        res.status(200).json({message:"book removed !"})
    }
})





export default router