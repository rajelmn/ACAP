const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const session = require("express-session");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const path = require("path");
const router = require("./apiRoutes");
const PORT = 3000;
const app = express();
dotenv.config();
const connectDb = require("./db");
(async () => {
    const db = await connectDb() 
    await db.exec("CREATE TABLE IF NOT EXISTS phone(\n  date TEXT NOT NULL,\n  number INTEGER NOT NULL,\n  image TEXT, \n  id TEXT PRIMARY KEY, \n  app TEXT NOT NULL\n)");
    await db.exec("CREATE TABLE IF NOT EXISTS projects(\n  title TEXT NOT NULL,\n  description TEXT NOT NULL,\n  lastUpdate TEXT NOT NULL,\n  cost NUMBER NOT NULL,\n  icon TEXT NOT NULL,\n  lng TEXT NOT NULL,\n  id TEXT PRIMARY KEY\n)");
    await db.exec("CREATE TABLE IF NOT EXISTS blog(\n  image TEXT NOT NULL,\n  content TEXT NOT NULL,\n  title TEXT NOT NULL,\n  lng TEXT NOT NULL, \n  publishDate TEXT NOT NULL,\n  id TEXT PRIMARY KEY\n)");
    await db.exec("CREATE TABLE IF NOT EXISTS admin(\n  name TEXT NOT NULL , \n  password TEXT NOT NULL\n  )");
    cloudinary.config({
        cloud_name: "dwa2csohq",
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
    });
    app.use(express.json());
    app.use(cors());
    app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 1000 * 60 * 30
        }
    }));
    // console.log(data)
    app.use("/images", express.static("images"));
    app.use(express.static(path.join(__dirname, "..", "dist")));
  
    app.use("/api", router);
    // app.get("/robots.txt", (req, res) => {
    //     res.sendFile(path.join(__dirname, '..', 'dist/robots.txt'))
    // })
    // app.get("/sitemap.xml", (req, res) => {
    //     res.sendFile(path.join(__dirname, '..', 'dist/sitemap.xml'))
    // })
    app.get("*", function (_req, res) {
        // console.log("sending", __dirname);
        res.sendFile(path.join(__dirname, "..", "dist/index.html"));
    });
    // middleware for any request besides login
    app.listen(PORT, function () {
        console.log("app running on ", PORT);
    });

    module.exports = db; 
})()
