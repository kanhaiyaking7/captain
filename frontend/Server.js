const express = require("express");
const server = express();

require("./connt");
const child = require("./children");

server.use(express.static('forse'));
server.use(express.urlencoded({extended:false}))

let books = [{id:1,title:"mind control",author:"gp"},
{id:2,title:"rich mind",author:"king"}]

server.get("/study",(req,res)=>{
    res.send(books)
    console.log("bhai");
})
server.get("/book/:id",(req,res)=>{
    res.send("book")
    console.log('apj abdulkalam',req.params);
})
server.get("/file",(req,res)=>{
    res.send("file")
    console.log('apj ',req.body);
})

server.post("/addbook",async(req,res)=>{
    console.log('done',req.body.title);
    let newbook = {
        title:req.body.title,
        author:req.body.author
    }
    books.push(newbook);
    let pack = new child.studio(newbook);
    await(pack.save());

    res.status(201).json(newbook);
  
})

server.listen(3000,()=>{
    console.log('start');
})