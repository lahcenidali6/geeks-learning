import fs from "fs";
import path from "path";

export default function fileInfos() {
  const filePath = path.join("data", "example.txt", "/");
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log("File Informations:");
    console.log("Path:", filePath);
    console.log("Size:", stats.size, "bytes");
    console.log("Created at:", stats.birthtime);
  }
}
