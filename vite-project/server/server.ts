import express from "express";
import Database from "better-sqlite3";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import cors from "cors"
import session from "express-session"; 
import bcrypt from "bcrypt"; 
import dotenv from "dotenv"
const PORT = 3000
const app = express();
const upload = multer({ dest: "uploads/" });

dotenv.config() ; 
import path from "path";
import { fileURLToPath } from "url";
import { isAuthenticated } from "./isAuthenticated";
import { error } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database(__dirname+"/mydb");

db.exec(`CREATE TABLE IF NOT EXISTS phone(
  date TEXT NOT NULL,
  number INTEGER NOT NULL,
  image TEXT, 
  id TEXT PRIMARY KEY, 
  app TEXT NOT NULL
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
  image TEXT NOT NULL,
  content TEXT NOT NULL,
  title TEXT NOT NULL,
  lng TEXT NOT NULL, 
  publishDate TEXT NOT NULL,
  id TEXT PRIMARY KEY
)`);

db.exec(`CREATE TABLE IF NOT EXISTS admin(
  name TEXT NOT NULL , 
  password TEXT NOT NULL
  )`)
cloudinary.config({
  cloud_name: "dwa2csohq",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());
app.use(cors());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 1000 * 60 * 30
  }
}))

// console.log(data)


app.get("/phone", (req, res) => {
  try {
    const getContent = db.prepare("SELECT * FROM phone").all();
    res.status(200).json(getContent);

  } catch (err) {
    console.log(err)
  }
})

app.get("/projects/:lng?", (req, res) => {
  try {
    const { lng }: { lng: string } = req.params;
    if (!lng) {
      const getProjects = db.prepare("SELECT * FROM projects").all();
      return res.status(200).json(getProjects)
    }
    const getLang = db.prepare("SELECT * FROM projects WHERE lng=?")
    const getLangProjects = getLang.all(lng);
    res.status(200).json(getLangProjects);
  } catch (err) {
    console.log(err)
  }
})


app.get("/blog/:lng?", (req, res) => {
  try {

    const { lng }: { lng?: string } = req.params;

    if (!lng) {
      const getBlogs = db.prepare("SELECT * FROM blog").all();
      return res.status(200).json(getBlogs)
    }
    const getBlogBylang = db.prepare("SELECT * FROM blog WHERE lng = ?");
    const langBlogs = getBlogBylang.all(lng)
    if (!(langBlogs.length > 0)) return res.status(401).json({ message: `no blogs for ${lng} language` })
    res.status(200).json(langBlogs)
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({ error: "Internal server error" });
  }
})
app.get("/single-blog/:id", (req, res) => {
  try {
    const { id } = req.params;
    

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


app.post("/login", async (req, res) => {
  try {
    const {name, password} = req.body; 
    console.log("login"); 
    const dbLogin = db.prepare("SELECT * FROM admin WHERE name = ?")
    const userInfo = dbLogin.get(name)  ; 
    if(userInfo) {
      const result = await bcrypt.compare(password, userInfo.password); 
      if(!result) return res.status(401).json({errorMessage: "password or username wrong"}) 
      req.session.loggedIn = true
      return res.status(200).json({message: "your logged in"})
    }  else {
      console.log('wrong username')
    }
  } catch(err) {
    console.log(err)
  }
})

app.use("/images", express.static("images"));
app.use(express.static("dist"));
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist/index.html"));
});
// middleware for any request besides login
app.use(isAuthenticated)
app.get("/validate-user", (req, res) => {
  res.status(200).json({message: "success bro!"})
})
app.post("/blog", upload.single('file'), async (req, res) => {
  try {
    console.log(req.body.content, "content");
    // const theFile = req.file as 
    const { content, publishDate, title, lng, id } = JSON.parse(req.body.content);
    const result = await cloudinary.uploader.upload(req.file.path);
    const image = result.secure_url || result.url;
    console.log('the damn image', image)
  // if(title === "dang") throw new Error("dang isnt a proper title for a blog")
    const updateBlog = db.prepare("INSERT INTO blog Values(?, ?, ? , ? ,? , ?)")
    updateBlog.run( image, content, title, lng, publishDate, id);
    res.status(200).json({ success: true, message: "blog added successfully" });

  } catch (err) {
    console.log(err); 
    res.status(500).json({error: err.message})
  }
})

app.post("/phone", upload.single('file'), async (req, res) => {
  try {
    const { phone, id , app}: { phone: number, id: string , app: string } = JSON.parse(req.body.content)
    // console.log(phone, id, req.file.path)
    const result = await cloudinary.uploader.upload(req.file.path);
    const image = result.secure_url || result.url;
    const date = (new Date()).toLocaleString().split(",")[0];
    // console.log(date, 'date')

    const insertPhone = db.prepare("INSERT INTO Phone Values(?, ?, ?, ?, ?)")
    console.log(date, phone, image, id, app)
    await insertPhone.run(date, phone, image, id, app)
    res.status(200).json({ message: "uploaded number succesfuly" })
  } catch (err) {
    console.log(err); 
    res.status(500).json({error: err})
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
    console.log(err); 
    res.status(500).json({error: err})
  }
})

app.put("/project", upload.single("file"), async (req, res) => {
  try {
    const { cost, id, description, title, lng } = JSON.parse(req.body.content);
    console.log(req.body.content);
    const lastUpdate = (new Date()).toLocaleString().split(",")[0]
    if (req.file?.path) {
      const result = await cloudinary.uploader.upload(req.file.path);
      const icon = result.secure_url || result.url;
      console.log(icon) ; 
      const updateProject = db.prepare("UPDATE projects SET title=?,description=?,lastUpdate=?,cost=?,icon=?,lng=? WHERE id=?")

       await updateProject.run(title, description, lastUpdate, +cost, icon, lng, id); 
       return res.status(200).json({message: "updaated the project succesfuly"})
    }
    const updateProject = db.prepare("UPDATE projects SET title=?,description=?,lastUpdate=?,cost=?,lng=? WHERE id=?");
    updateProject.run(title, description, lastUpdate, +cost, lng, id)
    res.status(200).json({ message: "updated the project succesfuly" })
  } catch (err) {
    console.log(err);
    res.status(500).json({error: err})
  }
})

app.put("/phone", upload.single('file'), async (req, res) => {
  try {

    const { number, id } = JSON.parse(req.body.content);
    console.log(req.body.content)
    if (req.file?.path) {
      const result = await cloudinary.uploader.upload(req.file.path);
      const image = result.secure_url || result.url;
      const updatePhone = db.prepare("UPDATE phone SET number=?,image=? WHERE id=?")
      return updatePhone.run(number.trim().replaceAll(" ", ""), image, id)
    }
    const updatePhone = db.prepare("UPDATE phone SET number=? WHERE id=?");
    console.log(number.trim().replaceAll(" ", ""));
    updatePhone.run(+number.trim().replaceAll(" ", ""), id);
    res.status(200).json({ message: "updated the number succesfuly" })
  } catch (err) {
    console.log(err);
    res.status(500).json({error: err})
  }
})

app.put("/blog", upload.single("file"), async (req, res) => {
  try {

    const { content, title, lng, id } = JSON.parse(req.body.content);
    const publishDate = (new Date()).toLocaleString().split(',')[0]; 
    console.log(content, 'the blog content')
    if(req.file?.path) {

      const result = await cloudinary.uploader.upload(req.file.path);
      const image = result.secure_url || result.url;
      console.log('the damn image', image)
      const updateBlog = db.prepare("UPDATE blog SET image=?,content=?,title=?,lng=?,publishDate=? WHERE id=?")
      const results = await updateBlog.run(image, content, title, lng, publishDate, id);
console.log("Rows updated:", results.changes);
      return res.status(200).json({message: "blog updated succesfuly"})
    }
    const updateBlog = db.prepare("UPDATE blog set content=?,title=?,lng=?,publishDate=? WHERE id=?")
      await updateBlog.run( content, title, lng, publishDate, id);
    res.status(200).json({ success: true, message: "blog updated successfully" });
  } catch(err) {
    console.log(err)
    res.status(500).json({error: err})
  }
})

app.delete("/blog/:id", (req, res) => {
  try {
    const { id }: { id: string } = req.params;
    const blogDelete = db.prepare("DELETE FROM blog WHERE id = ?")
    blogDelete.run(id);
    res.status(200).json({ message: "deleted" })
  } catch (err) {
    console.log(err)
    res.status(500).json({error: err})
  }
})

app.delete("/projects/:id", (req, res) => {
  try {
    const { id }: { id: string } = req.params;
    console.log("deleting", id)
    const projectDelete = db.prepare("DELETE FROM projects WHERE id = ?")
    projectDelete.run(id)
    res.status(200).json({ message: "deleted" })
  } catch (err) {
    console.log(err)
    res.status(500).json({error: err})
  }
})

app.delete("/phone/:id", async (req, res) => {
  try {
    const { id }: { id: string } = req.params;
    console.log('deleting', id)
    const phoneDelete = db.prepare("DELETE FROM phone WHERE id = ?");
    await phoneDelete.run(id);
    res.status(200).json({ message: "phone number deleted succesfuly" })
  } catch (err) {
    console.log(err)
    res.status(500).json({error: err})
  }
})


app.listen(PORT, () => {
  console.log("app running on ", PORT)
})