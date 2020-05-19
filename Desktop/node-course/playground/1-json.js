const fs=require('fs')
// const book={
//     title: "Alchemist",
//     author: "Paulo Choelo"

// }
// const bookJSON=JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)
const buffer=fs.readFileSync('1-json.json')
const dataJson=buffer.toString()
const data=JSON.parse(dataJson)
data.name="Sonal"
data.age=20
const newdata=JSON.stringify(data)
fs.writeFileSync('1-json.json',newdata)
