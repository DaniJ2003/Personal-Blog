const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");   
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

let title = [];
let content = [];

app.get("/", function(req, res) {
    posts = readData();
    console.log(posts);
    res.render("list", {data:posts});
});

app.get("/notes", function(req, res) {
    res.sendFile(__dirname + "/notes.html");
});

app.get("/contacts", function(req, res) {
    res.sendFile(__dirname + "/contacts.html");
});

app.get("/about", function(req, res) {
    res.sendFile(__dirname + "/about.html");
});

app.get("/update", function(req, res) {
    res.sendFile(__dirname + "/update.html");
});

app.get("/post-1", function(req, res) {
    res.sendFile(__dirname + "/post-1.html");
});

app.get("/post-2", function(req, res) {
    res.sendFile(__dirname + "/post-2.html");
});

app.get("/post-3", function(req, res) {
    res.sendFile(__dirname + "/post-3.html");
});

app.get("/post-4", function(req, res) {
    res.sendFile(__dirname + "/post-4.html");
});

app.post("/update", function(req, res) {
    let post = {
        title: req.body.Title,
        content: req.body.Content
    }
    writeData(post);
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("server is running on port 3000");
});


function writeData(post) {
    data = readData();
    data.push(post);
    fs.writeFileSync("data.json", JSON.stringify(data));
}

function readData() {
    data = JSON.parse(fs.readFileSync("data.json"));
    return data;
}