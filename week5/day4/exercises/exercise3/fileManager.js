const fs = require("fs");
const path = require("path");

function readFile(filePath) {
  const fullPath = path.resolve(filePath);
  return new Promise((resolve, reject) => {
    fs.readFile(fullPath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function writeFile(filePath, text) {
  const fullPath = path.resolve(filePath);
  return new Promise((resolve, reject) => {
    fs.writeFile(fullPath, text,'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`File written with successfully `);
      }
    })
  })
}

module.exports = {
  readFile,
  writeFile,
};
