const express = require("express");

const app = express();

const path = require("path");

const cors = require("cors");

require("dotenv").config();


const fox_routes = require("./routes/fox_routes.js")


app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.use(cors({
    origin: process.env.HOST,
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"]
}))


app.use(fox_routes)


app.listen(process.env.PORT, ()=>{
    console.log("Server succesfully started!!")
})
