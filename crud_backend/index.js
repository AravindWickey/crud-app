const express = require("express");
const app = express();
const routers = require('./router');
const cors = require("cors");
const pool = require("./db")

app.use(cors());
app.use(express.json());

//router
app.get("/todo",async(req,res)=>{
    try {
        const todo = await pool.query("select * from users");
        res.json(todo.rows);
    } catch (error) {
        console.error(error.message)
    }
});
app.use('/response', routers);


app.listen(3001, ()=>{
    console.log("Server Connected");
});
