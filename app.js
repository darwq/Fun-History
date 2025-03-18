const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.redirect("/home");
})

app.get("/home",(req,res) => {
    res.render("home.ejs",{title : "Fun History"});
    res.status(200);
})

app.get("/bac",(req,res) => {
    files = fs.readdirSync("./public/db/Subiecte-si-bareme");
    esee = fs.readdirSync("./public/db/esee");
    subiecte = [];
    bareme = [];
    files.forEach((element,i) => {
        text = "/db/Subiecte-si-bareme/" + element;
        if(element.startsWith("subiect")){
            subiecte.push(text);
        }
        else{
            bareme.push(text);
        }
    });
    res.render("bac.ejs",{subiecte,bareme,esee}); 
})

app.get("/istorie-AI",(req,res) => {
    res.render("general.ejs");
})

app.post("/get_key",(res,req) => {
    let data = {key : process.env.OPENAI_KEY}
    req.json(data);
})

app.use((req,res,next) => {
    res.status(404).render("404.ejs");})

app.listen(3000);