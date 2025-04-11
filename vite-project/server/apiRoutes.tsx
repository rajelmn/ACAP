import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
const router = express.Router() ; 
import bcrypt from "bcrypt"
const upload = multer({ dest: "uploads/" });
import {format} from "date-fns"
import {db} from "./server"
import { isAuthenticated } from "./isAuthenticated";
import nodemailer from 'nodemailer'; 
import bodyparser from "body-parser" ; 
import dotenv from 'dotenv'; 
dotenv.config();

router.use(bodyparser.json()) ; 
// router.use(express.json())  ;
const transporter = nodemailer.createTransport({
  host: "mail.acap-mr.com",
  port: 465,
  secure: true, // Port 465 uses SSL
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
  }
});
router.get("/phone", (req, res) => {
  try {
    const getContent = db.prepare("SELECT * FROM phone").all();
    res.status(200).json(getContent);
    
  } catch (err) {
    console.log(err)
  }
})

router.get("/projects/:lng?", (req, res) => {
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


router.get("/blog/:lng?", (req, res) => {
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
router.get("/single-blog/:id", (req, res) => {
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

router.post("/login", async (req, res) => {
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
router.post("/send-mail", (req, res) =>  {
  try {
    console.log(req.body)
    const {email , name, message} = req.body
    console.log(name, email, '\n', message)

const mailOptions = {
  from: email, // Sender's email (could be from form input)
  to: "rajel@acap-mr.com", // Your webmail address where the form submissions should go
  subject: "Contact Form Submission", // Subject of the email
  text: `Message: ${message}`, // The body of the email
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
  return res.status(500).send({ success: false, error });
  }
  res.status(200).send({ success: true, info });
  });
  } catch(err) {
    console.log(err) ; 
  }
})
router.use(isAuthenticated)

router.get("/validate-user", (req, res) => {
  res.status(200).json({message: "success bro!"})
})


router.get("/logout" , (req, res) => {
  try {
    req.session.destroy(); 
    res.status(200).json({message: "logged out succesfuly"})
  } catch(err) {
    console.log(err); 
    res.status(500).json({message: "error while logout"})
  }
})

router.post("/blog", upload.single('file'), async (req, res) => {
  try {
    console.log(req.body.content, "content");
    // const theFile = req.file as 
    const publishDate = format(new Date() , 'dd/mm/yyyy')
    const { content, title, lng, id } = JSON.parse(req.body.content);
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

router.post("/phone", upload.single('file'), async (req, res) => {
  try {
    const { phone, id , app}: { phone: number, id: string , app: string } = JSON.parse(req.body.content)
    // console.log(phone, id, req.file.path)
    const result = await cloudinary.uploader.upload(req.file.path);
    const image = result.secure_url || result.url;
    const date = format(new Date() , "dd/mm/yyyy")
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

router.post("/projects", upload.single('file'), async (req, res) => {
  try {
    const publishDate = format(new Date() , "dd/mm/yyyy")
    const { description, cost,  title, lng, id } = JSON.parse(req.body.content);
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


router.put("/project", upload.single("file"), async (req, res) => {
  try {
    const { cost, id, description, title, lng } = JSON.parse(req.body.content);
    console.log(req.body.content);
    const lastUpdate = format(new Date() , "dd/mm/yyyy")
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

router.put("/phone", upload.single('file'), async (req, res) => {
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

router.put("/blog", upload.single("file"), async (req, res) => {
  try {

    const { content, title, lng, id } = JSON.parse(req.body.content);
    const publishDate = format(new Date() , "dd/mm/yyyy")
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

router.delete("/blog/:id", (req, res) => {
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

router.delete("/projects/:id", (req, res) => {
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

router.delete("/phone/:id", async (req, res) => {
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


export default router