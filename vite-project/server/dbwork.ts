
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from 'bcrypt'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database(__dirname+"/mydb");

const updateDb = db.prepare("INSERT INTO admin Values(?,?)")

// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("admin", salt, function(err, hash) {
//         // Store hash in your password DB.
//         if(err) throw new Error("couldnt hash the password", err)
//         else {
    
//             console.log(hash); 
//             updateDb.run("admin", hash); 
//         }
//     });
// });

const getDb = db.prepare("DELETE FROM phone WHERE id=?");
const values = getDb.run("007947d2-cd34-4ca4-9b21-71aef92886e3") ; 
console.log(values)