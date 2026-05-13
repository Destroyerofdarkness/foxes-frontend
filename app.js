//Modules
const express = require("express");

const app = express();

const path = require("path");

const cors = require("cors");

require("dotenv").config();

//Routes
const fox_routes = require("./routes/fox_routes.js")

//Config
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.use(cors({
    origin: process.env.HOST,
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type","Authorization"]
}))

//Used Routes
app.use(fox_routes)

//Server starts
app.listen(process.env.PORT, ()=>{
    console.log("Server succesfully started!!")
})
