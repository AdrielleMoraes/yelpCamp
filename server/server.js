const express = require("express");
const db = require("./db");

const morgan = require("morgan");

const app = express();

app.use(express.json());

app.get("/api/v1/restaurants", async(req,res)=>{
   try{
      const { rows } = await db.query('SELECT * FROM restaurants');

      res.status(200).json({
         status:"success",
         count: rows.length,
         data:{
            restaurants: rows
         }
      });
   }
   catch(err){
      res.status(500).json({
         status:"error",
         error: err
      });
   }

});

app.get("/api/v1/restaurants/:restaurant_id", async(req,res)=>   {
   const restaurant_id = req.params.restaurant_id;
   try{
      const { rows } = await db.query("SELECT * FROM restaurants WHERE id = $1",[restaurant_id]);
      if (rows.length > 0){
         res.status(200).json({
            status:"success",
            count: rows.length,
            data:{
               restaurants: rows [0]
            }
         });
      }
      else{
         res.status(500).json({
            status:"error",
            message:"Didn't find any restaurant with this id"
         });
      }
   }
   catch(err){
      res.status(500).json({
         status:"error",
         error: err
      });
   }

});

app.post("/api/v1/restaurants", async(req,res)=>   {
   console.log(req.body);
   try {
      const {rows} = await db.query("INSERT INTO restaurants(name, location, price_range) VALUES ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]);
      res.status(200).json({
         status:"success",
         data:rows
      });
   } catch (error) {
      
   }
});

app.put("/api/v1/restaurants/:restaurant_id", async(req,res)=>   {
   console.log(req.body);
   try {
      const {rows} = await db.query("UPDATE restaurants SET name = $1, location=$2, price_range=$3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.restaurant_id]);
      res.status(200).json({
         status:"success",
         data:rows[0]
      });

   } catch (error) {
      
   }
});

app.delete("/api/v1/restaurants/:restaurant_id", async(req,res)=>   {
   console.log(req.body);
   try {
      const {rows} = await db.query("DELETE FROM restaurants WHERE id=$1",
      [req.params.restaurant_id]);
      res.status(200).json({
         status:"success",
         message:"Deleted"
      });

   } catch (error) {
      res.status(500).json({
         status:"error",
         message:"Restaurant not found"
      });
   }
});


const port = process.env.PORT || 3001;

app.listen(port, ()=>{
   console.log(`Server is up on port ${port}`);
})
