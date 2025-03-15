import express from "express";
import Database from "better-sqlite3";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import cors from "cors"
const PORT = 3000
const app = express();
const db = new Database("mydb", {verbose: console.log});
const upload = multer({ dest: "uploads/" });


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
  image TEXT NOT NULL,
  content TEXT NOT NULL,
  title TEXT NOT NULL,
  lng TEXT NOT NULL, 
  publishDate TEXT NOT NULL,
  id TEXT PRIMARY KEY
)`);


cloudinary.config({
  cloud_name: "dwa2csohq",
  api_key: "665725662135347",
  api_secret: "Y2Dk2D6ExFwjQjLNlo9i6DLbq_0",
});

app.use(express.json());
app.use(cors());


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

app.get("/blog", (req, res) => {
  try {
    const getBlogs = db.prepare("SELECT * FROM blog").all();
    res.status(200).json(getBlogs)
  }
  catch(err) {
    console.log(err)
  }
})

app.post("/blog" ,upload.single('file'), async (req, res) => {
  try {
    console.log(req.body.content, "content")
    const { content, author, publishDate, title, lng, id } = JSON.parse(req.body.content);
    const result = await cloudinary.uploader.upload(req.file.path);
    const image = result.secure_url || result.url;
    console.log('the damn image', image)
    const updateBlog = db.prepare("INSERT INTO blog Values(?, ?, ? , ? ,? , ?, ?)")
    updateBlog.run(author, image, content ,title,lng, publishDate, id)
  } catch(err) {
    console.log(err)
  }
})

app.put("/blog", (req, res) => {

})

app.delete("/blog" , (req, res) => {

})


app.listen(PORT, () => {
    console.log("app running on ", PORT)
})