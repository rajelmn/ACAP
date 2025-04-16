const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const bcrypt = require("bcrypt");
const { format } = require("date-fns");
const isAuthenticated = require("./isAuthenticated").isAuthenticated;
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const connectDb = require("./db")
dotenv.config();

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.use(bodyparser.json()) ; 
// router.use(express.json())  ;
const transporter = nodemailer.createTransport({
  host: "mail.acap-mr.com",
  port: 465,
  secure: true, // Port 465 uses SSL
  auth: {
    user:process.env.EMAIL,
    pass: process.env.PASS
  }
});

(async () => {
  const db = await connectDb() ; 

  router.get("/phone", async (req, res) => {
    try {
      const getContent = await db.all("SELECT * FROM phone")
      res.status(200).json(getContent);
      
    } catch (err) {
      console.log(err)
    }
  })
  
  router.get("/projects/:lng?", async (req, res) => {
    try {
      const { lng } = req.params;
      if (!lng) {
        console.log(db)
        const getProjects = await db.all("SELECT * FROM projects")
        return res.status(200).json(getProjects)
      }
      const getLang = await db.all("SELECT * FROM projects WHERE lng=?", [lng])
      res.status(200).json(getLang);
    } catch (err) {
      console.log(err)
    }
  })
  
  
  router.get("/blog/:lng?", async (req, res) => {
    try {
      
      const { lng } = req.params;
      
      if (!lng) {
        const getBlogs = await db.all("SELECT * FROM blog")
        return res.status(200).json(getBlogs)
      }
      const langBlogs= await db.all("SELECT * FROM blog WHERE lng = ?", [lng]);
      if (!(langBlogs.length > 0)) return res.status(401).json({ message: `no blogs for ${lng} language` })
        res.status(200).json(langBlogs)
    }
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: "Internal server error" });
    }
  })
  router.get("/single-blog/:id", async (req, res) => {
    try {
      const { id } = req.params;
      
      
      const blog = await db.get("SELECT * FROM blog WHERE id=?", [id]);
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
      const userInfo = await db.get("SELECT * FROM admin WHERE name = ?", [name]);
      if(userInfo) {
        const result = await bcrypt.compare(password, userInfo.password); 
        if(!result) throw new Error("wrong password or username") 
        req.session.loggedIn = true
        return res.status(200).json({message: "your logged in"})
      }  else {
        console.log('wrong username'); 
        throw new Error("wrong password or username")
      }
    } catch(err) {
      console.log(err)
      res.status(401).json({errorMessage: err.message})
    }
  })
  router.post("/send-mail", (req, res) =>  {
    try {
      console.log(req.body)
      const {email , name, message} = req.body
      console.log(name, email, '\n', message)
  
  const mailOptions = {
    from: email, 
    to: "rajelghmn@acap-mr.com", 
    subject: `Acap form submission from : ${name}`, 
    text: `Message: ${message}`,
    };
    
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
    return res.status(500).send({ success: false, error });
    }
    console.log(info)
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
      const publishDate = format(new Date() , 'dd/MM/yyyy')
      console.log(publishDate, 'date');
      console.log(new Date())
      const { content, title, lng, id } = JSON.parse(req.body.content);
      const result = await cloudinary.uploader.upload(req.file.path);
      const image = result.secure_url || result.url;
      console.log('the damn image', image)
    // if(title === "dang") throw new Error("dang isnt a proper title for a blog")
      const updateBlog = await db.run("INSERT INTO blog Values(?, ?, ? , ? ,? , ?)", [ image, content, title, lng, publishDate, id])
      res.status(200).json({ success: true, message: "blog added successfully" });
  
    } catch (err) {
      console.log(err); 
      res.status(500).json({error: err.message})
    }
  })
  
  router.post("/phone", upload.single('file'), async (req, res) => {
    try {
      const { phone, id , app} = JSON.parse(req.body.content)
      // console.log(phone, id, req.file.path); 
      const regexp = /[0-9]{8}/gi
      if(!regexp.test(phone.replaceAll(" ", ""))) {
        throw new Error("wrong number format, numbers should be an 8 length digits")
      }
      const result = await cloudinary.uploader.upload(req.file.path);
      const image = result.secure_url || result.url;
      const date = format(new Date() , 'dd/MM/yyyy')
      // console.log(date, 'date')
  
      const insertPhone = await db.run("INSERT INTO Phone Values(?, ?, ?, ?, ?)", [date, phone, image, id, app])
      res.status(200).json({ message: "uploaded number succesfuly" })
    } catch (err) {
      console.log(err); 
      res.status(500).json({error: err.message})
    }
  })
  
  router.post("/projects", upload.single('file'), async (req, res) => {
    try {
      const publishDate = format(new Date() , 'dd/MM/yyyy')
      const { description, cost,  title, lng, id } = JSON.parse(req.body.content);
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(req.body.content)
      const image = result.secure_url || result.url;
      console.log("project image", image);
  
      const insertProject = await db.run("INSERT INTO projects Values(?,?,?,?,?,?,?) ", [title, description, publishDate, cost, image, lng, id])
      res.status(200).json({ success: true, message: "Project added successfully" });
  
  
    } catch (err) {
      console.log(err.message); 
      res.status(500).json({error: err.message})
    }
  })
  
  
  router.put("/project", upload.single("file"), async (req, res) => {
    try {
      const { cost, id, description, title, lng } = JSON.parse(req.body.content);
      console.log(req.body.content);
      const lastUpdate = format(new Date() , 'dd/MM/yyyy')
      if (req.file?.path) {
        const result = await cloudinary.uploader.upload(req.file.path);
        const icon = result.secure_url || result.url;
        console.log(icon) ; 
        const updateProject = await db.run("UPDATE projects SET title=?,description=?,lastUpdate=?,cost=?,icon=?,lng=? WHERE id=?", 
          [title, description, lastUpdate, +cost, icon, lng, id]
        )
         return res.status(200).json({message: "updaated the project succesfuly"})
      }
      const updateProject = await db.run("UPDATE projects SET title=?,description=?,lastUpdate=?,cost=?,lng=? WHERE id=?", 
        [title, description, lastUpdate, +cost, lng, id]
      );
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
        const updatePhone = await db.run("UPDATE phone SET number=?,image=? WHERE id=?", [number.trim().replaceAll(" ", ""), image, id])
        return updatePhone
      }
      const updatePhone = await db.run("UPDATE phone SET number=? WHERE id=?", [+number.trim().replaceAll(" ", "")]);
      console.log(number.trim().replaceAll(" ", ""));
      res.status(200).json({ message: "updated the number succesfuly" })
    } catch (err) {
      console.log(err);
      res.status(500).json({error: err})
    }
  })
  
  router.put("/blog", upload.single("file"), async (req, res) => {
    try {
  
      const { content, title, lng, id } = JSON.parse(req.body.content);
      const publishDate =format(new Date() , 'dd/MM/yyyy')
      console.log(content, 'the blog content')
      if(req.file?.path) {
  
        const result = await cloudinary.uploader.upload(req.file.path);
        const image = result.secure_url || result.url;
        console.log('the damn image', image)
        const updateBlog = await db.run("UPDATE blog SET image=?,content=?,title=?,lng=?,publishDate=? WHERE id=?", [image, content, title, lng, publishDate, id])
        return res.status(200).json({message: "blog updated succesfuly"})
      }
      const updateBlog = await db.run("UPDATE blog set content=?,title=?,lng=?,publishDate=? WHERE id=?", [content, title, lng, publishDate, id])
      res.status(200).json({ success: true, message: "blog updated successfully" });
    } catch(err) {
      console.log(err)
      res.status(500).json({error: err})
    }
  })
  
  router.delete("/blog/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const blogDelete = await db.run("DELETE FROM blog WHERE id = ?", [id])
      res.status(200).json({ message: "deleted" })
    } catch (err) {
      console.log(err)
      res.status(500).json({error: err})
    }
  })
  
  router.delete("/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      console.log("deleting", id)
      const projectDelete = await db.run("DELETE FROM projects WHERE id = ?", [id])
      res.status(200).json({ message: "deleted" })
    } catch (err) {
      console.log(err)
      res.status(500).json({error: err})
    }
  })
  
  router.delete("/phone/:id", async (req, res) => {
    try {
      const { id }  = req.params;
      console.log('deleting', id)
      const phoneDelete = await db.run("DELETE FROM phone WHERE id = ?", [id]);
      res.status(200).json({ message: "phone number deleted succesfuly" })
    } catch (err) {
      console.log(err)
      res.status(500).json({error: err})
    }
  })

})()  

module.exports = router