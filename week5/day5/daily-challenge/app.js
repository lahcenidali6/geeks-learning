import express from "express";

const emojis = [
  { emoji: "😀", name: "Grinning Face" },
  { emoji: "😂", name: "Face with Tears of Joy" },
  { emoji: "😍", name: "Smiling Face with Heart-Eyes" },
  { emoji: "😎", name: "Smiling Face with Sunglasses" },
  { emoji: "😢", name: "Crying Face" },
  { emoji: "😡", name: "Pouting Face" },
  { emoji: "👍", name: "Thumbs Up" },
  { emoji: "🎉", name: "Party Popper" },
  { emoji: "❤️", name: "Red Heart" },
  { emoji: "🔥", name: "Fire" }
];

const app = express()
app.use(express.json())
const randomEmoji=emojis[Math.floor(Math.random() * emojis.length)];
console.log(randomEmoji)
const distractors=
app.listen(500,()=>{
    console.log("the server is running!")
})