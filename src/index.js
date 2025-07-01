// require('dotenv').config({path:'./env'});
import express from 'express';
import dotenv from 'dotenv';
import connectdb from './db/index.js';

dotenv.config({
    path: './env',
});


connectdb();
const app=express();




























// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.DATABASE_URL}/${db_name}`);
//         app.on("error",(err)=>{
//             console.log("Error: ",err);
//             throw err;
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     }
//     catch (err) {
//         console.error(err);
//         throw err;
//     }
// })()