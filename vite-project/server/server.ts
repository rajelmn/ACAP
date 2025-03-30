import express from "express";
import Database from "better-sqlite3";
import cors from "cors"
import {v2 as cloudinary} from "cloudinary"; 
import session from "express-session"; 
import bcrypt from "bcrypt"; 
import dotenv from "dotenv"
const PORT = 3000
const app = express();

dotenv.config() ; 
import path from "path";
import { fileURLToPath } from "url";
import { isAuthenticated } from "./isAuthenticated";
import router from "./apiRoutes"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const db = new Database(__dirname+"/mydb");

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
app.use("/images", express.static("images"));
app.use(express.static("dist"));

app.use("/api", router)

app.get("*", (_req, res) => {
  console.log("sending", __dirname)
  res.sendFile(path.join(__dirname, "..", "dist/index.html"));
});  
// middleware for any request besides login

app.listen(PORT, () => {
  console.log("app running on ", PORT)
})