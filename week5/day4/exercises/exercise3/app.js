
import {readFile,writeFile} from "./fileManager.js"
console.log(await readFile("hello-world.txt"))
console.log(await writeFile("bye-world.txt", "Writing to the file"))