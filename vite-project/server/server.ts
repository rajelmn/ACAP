import express from "express";
import Database from "better-sqlite3";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import cors from "cors"
const PORT = 3000
const app = express();
const db = new Database("mydb");
const upload = multer({ dest: "uploads/" });


db.exec(`CREATE TABLE IF NOT EXISTS phone(
  date TEXT NOT NULL,
  number INTEGER NOT NULL,
  provider TEXT
)`);

db.exec(`CREATE TABLE IF NOT EXISTS projects(
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  lastUpdate TEXT NOT NULL,
  cost NUMBER NOT NULL,
  icon TEXT NOT NULL,
  lng TEXT NOT NULL,
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
    console.log(getContent, 'phone');
    res.status(200).json(getContent);

  } catch (err) {
    console.log(err)
  }
})

app.get("/projects/:lng?", (req, res) => {
  try {
    console.log('running')
    const { lng }: { lng: string } = req.params;
    if (!lng) {
      const getProjects = db.prepare("SELECT * FROM projects").all();
      console.log(getProjects);
      return res.status(200).json(getProjects)
    }
    const getLang = db.prepare("SELECT * FROM projects WHERE lng=?")
    const getLangProjects = getLang.all(lng);
    res.status(200).json(getLangProjects);
    console.log(getLangProjects, 'lang')
  } catch (err) {
    console.log(err)
  }
})

app.get("/blog/:id?", (req, res) => {
  try {
    const { id } = req.params;
    console.log(id, 'blog id')
    if (!id) {
      const getBlogs = db.prepare("SELECT * FROM blog").all();
      return res.status(200).json(getBlogs)
    }

    const blogPrep = db.prepare("SELECT * FROM blog WHERE id=?");
    const blog = blogPrep.get(id);
    if (!blog) {
      return res.status(401).json({ message: "blog doesnt exist" })
    }
    res.status(200).json(blog)
  }
  catch (err) {
    console.log(err)
  }
})

app.post("/blog", upload.single('file'), async (req, res) => {
  try {
    console.log(req.body.content, "content")
    const { content, author, publishDate, title, lng, id } = JSON.parse(req.body.content);
    const result = await cloudinary.uploader.upload(req.file.path);
    const image = result.secure_url || result.url;
    console.log('the damn image', image)
    const updateBlog = db.prepare("INSERT INTO blog Values(?, ?, ? , ? ,? , ?, ?)")
    updateBlog.run(author, image, content, title, lng, publishDate, id); 
    res.status(200).json({ success: true, message: "blog added successfully" });

  } catch (err) {
    console.log(err)
  }
})

app.post("/projects", upload.single('file'), async (req, res) => {
  try {
    const { description, cost, publishDate, title, lng, id } = JSON.parse(req.body.content);
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(req.body.content)
    const image = result.secure_url || result.url;
    console.log("project image", image);

    const insertProject = db.prepare("INSERT INTO projects Values(?,?,?,?,?,?,?) ")
    insertProject.run(title, description, publishDate, cost, image, lng, id)
    res.status(200).json({ success: true, message: "Project added successfully" });


  } catch (err) {
    console.log(err)
  }
})

app.put("/blog:id", (_req, _res) => {

})


app.delete("/blog/:id", (req, _res) => {
  try {
    const { id }: { id: string } = req.params;
    const blogDelete = db.prepare("DELETE FROM blog WHERE id = ?")
    blogDelete.run(id)
  } catch (err) {
    console.log(err)
  }
})

app.delete("/projects/:id", (req, _res) => {
  try {
    const { id }: { id: string } = req.params;
    console.log("deleting", id)
    const projectDelete = db.prepare("DELETE FROM projects WHERE id = ?")
    projectDelete.run(id)
  } catch (err) {
    console.log(err)
  }
})

app.delete("/phone/:id", (req, _res) => {
  try {
    const { id }: { id: string } = req.params;
    const phoneDelete = db.prepare("DELETE FROM blog WHERE id = ?")
    phoneDelete.run(id)
  } catch (err) {
    console.log(err)
  }
})


app.listen(PORT, () => {
  console.log("app running on ", PORT)
})