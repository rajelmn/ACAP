import express from "express";
import Database from "better-sqlite3";
const PORT = 3000
const app = express();
const db = new Database("mydb", {verbose: console.log});

db.exec(`CREATE TABLE IF NOT EXISTS phone(
  date TEXT NOT NULL,
  number INTEGER NOT NULL,
  provider TEXT
)`);

db.exec(`CREATE TABLE IF NOT EXISTS project(
  status TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  lastUpdate TEXT NOT NULL,
  id TEXT PRIMARY KEY
)`);

db.exec(`CREATE TABLE IF NOT EXISTS blog(
  author TEXT NOT NULL,
  content TEXT NOT NULL,
  publishDate TEXT NOT NULL,
  id TEXT PRIMARY KEY
)`);



// console.log(data)
app.get("/", (req, res) => {
  res.send('hello world');
});


app.get("/phone", (req, res) => {
  try {
    const getContent = db.prepare("SELECT * FROM phone").all();
    console.log(getContent);
    res.status(200).json(getContent);
    
  } catch(err) {
    console.log(err)
  }
})

app.get("/blog:id", (req, res) => {
  
})

app.post("/blog" , (req, res) => {

})

app.put("/blog", (req, res) => {

})

app.delete("/blog" , (req, res) => {

})


app.listen(PORT, () => {
    console.log("app running on ", PORT)
})