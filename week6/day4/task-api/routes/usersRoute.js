import express from "express"
import path from 'path';
import bcrypt from "bcrypt"
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

router.post("/register", async (req, res) => {
  try {
    const { fullName,userName, email, password } = req.body;

    const passHash = await bcrypt.hash(password, 10);
    const fullPath =path.resolve("users.json")
    const data = await readFile(fullPath, "utf-8"); 
    const users = JSON.parse(data);

    users.push({ id:users.length+1,fullName, userName, email, password: passHash });

    await writeFile("users.json", JSON.stringify(users, null, 2));

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const fullPath =path.resolve("users.json")
    const data = await readFile(fullPath, "utf-8"); 
    const users = JSON.parse(data);
    const user= users.find(user=>user.userName==userName)
    const isMatch= await bcrypt.compare(password,user.password)
    if(user===undefined || !isMatch){
        res.json({error:"username or password incorrect !"})
    }
    else {
        res.json({message:"Login successful!"})
    }

  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/users", async (req, res) => {
  try {
    const fullPath =path.resolve("users.json")
    const data = await readFile(fullPath, "utf-8"); 
    const users = JSON.parse(data);
    res.send(users)
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    const fullPath =path.resolve("users.json")
    const data = await readFile(fullPath, "utf-8"); 
    const users = JSON.parse(data);
    const user= users.find(user=>user.id==id)
    if(user===undefined) res.json({message:"user not found"})
    else res.send(user)
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.put("/users/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    const {fullName, userName, email,password} = req.body
    const fullPath =path.resolve("users.json")
    const data = await readFile(fullPath, "utf-8"); 
    const users = JSON.parse(data);
    const index = users.findIndex(user => user.id == id);
    if(index===-1) res.json({message:"user not found"})
    else {
        if(password) var passHash = await bcrypt.hash(password, 10);
        users[index].fullName=fullName || users[index].fullName
        users[index].userName=userName || users[index].userName
        users[index].email=email || users[index].email
        users[index].password=passHash || users[index].password
        await writeFile("users.json", JSON.stringify(users, null, 2));
        res.json({message:"user updated"})
}       
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});



export default router