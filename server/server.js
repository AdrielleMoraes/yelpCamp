require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();


app.use((req,res, next)=>{
   console.log("I am a middleware");
   next();
});

app.get("/api/v1/restaurants", async(req,res)=>{
   const { rows } = await db.query('SELECT * FROM restaurants');
   console.log(rows);
   res.status(200).json({
      status: "sucess",
      data:{
         restaurant: "McDonalds",
         id: 123
      }   
   });
});

app.get("/api/v1/restaurants/:id", (req,res)=>   {
   console.log(req.params);
});

app.post("/api/v1/restaurants", (req,res)=>   {
   console.log(req);
});

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
   console.log(`Server is up on port ${port}`);
})
