// need express for the server 1st
const express = require("express");
const cors = require("cors");

// 2nd step, would to be making a server with express
//check to see if the server works 
//res is sending out the info
//pulling info in(req)
const server = express();
const port = 5001;
const postsRouter = require("./posts-router.js");

server.use(express.json());
server.use(cors()); //needed for react apps
server.use("/api/posts", postsRouter);

server.listen(port, () => console.log(`server listening on port ${port}`));