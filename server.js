const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000

const app = express();

//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post two' },
    { id: 3, title: 'Post three' },
];


//GET ALL POST

app.get('/api/posts', (req, res) => {
    console.log(req.query);
    res.json(posts);

})


app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post)=> post.id === id));

})



app.listen(port, () => {
    console.log('Server is running on port 8080');
})