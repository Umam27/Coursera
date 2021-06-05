const express= require('express');
const http= require('http');
const morgan = require('morgan');
const app= express();
const hostname= 'localhost';
const port= 3000;

const dishrouter=require('./routes/dishrouter');
const promorouter=require('./routes/promorouter');
const leaderRouter=require('./routes/leaderRouter');

const bodyparser= require('body-parser');

app.use('/dishes', dishrouter);
app.use('/promotions', promorouter);
app.use('/leaders', leaderRouter);


app.use(bodyparser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname+ '/public'));

app.use((req,res, next)=>{
    console.log(req.headers);
    req.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>THIS IS AN EXPRESS SERVER</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`);
});