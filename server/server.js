// node.js
const path = require('path') //node way of importing
const express = require('express')
const app = express();
const publicPath = path.join(__dirname, '..', 'public') //dirname is server, go up an folder, go to public
const port = process.env.PORT || 3000 ;// PORT is the environment var that heroku sets for you
app.use(express.static(publicPath));

//serve path requested that's not in public directory
app.get('*', (req, res)=>{ //* any path that produces a 404
    res.sendFile(path.join(publicPath,'index.html'))
}) 

app.listen(port,() =>{
    console.log('server is up')
});
