var posts = [
    {
        head : 'tital' , 
        date : 'date',
        text : 'Sample text'
    },
    {
        head : 'title' , 
        date : 'date',
        text : 'Sample text 2'
    }
]

 const PORT = process.env.PORT || 5000;
var express = require("express");
var cors = require('cors')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var http = require("http");
var path = require("path");
var socketIo = require("socket.io");


var app = express();
var io = socketIo(server);

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use("/", express.static(path.resolve(path.join(__dirname, "public"))));

app.post("/post", (req,res, next) => {
    
posts.push(req.body);
console.log(req.body,' req body');
res.send('server responded');
})

app.get('/get',(req,res,next)=>{
    res.send(posts);
})

io.on("connection", (user) => {
    console.log("user connected");
    io.emit("NEW_POST", JSON.stringify(posts[posts.length - 1]))

})

app.listen(PORT, ()=>{
    console.log("server is running "+ PORT);

})                