import express from 'express';
import path from 'path';
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
const port = process.env.PORT || 8000

const app = express();

//Body Parser
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//Logger mifddlware

app.use(logger);

//Routes

app.use('/api/posts' , posts)

app.listen(port, () => {
    console.log('Server is running on port 8080');
})

