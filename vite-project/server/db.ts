// import sqlite3 from 'sqlite3';
const sqlite3 = require("sqlite3")
const { open } = require("sqlite");
const path = require("path")

async function connectDb() {

    const db = await open({
      filename: path.join(__dirname, 'mydb'),
      driver: sqlite3.Database
    });
    if(db) {
      const admins = await db.all('SELECT * FROM admin');
      console.log(admins)
    }
    return db; 
}

module.exports = connectDb; 
