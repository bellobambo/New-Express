import express from 'express';
import path from 'path';
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/Notfound.js';
const port = process.env.PORT || 8000

const app = express();

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Logger mifddlware

app.use(logger);

//Routes

app.use('/api/posts', posts)

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use(notFound)
app.use(errorHandler)



app.listen(port, () => {
    console.log('Server is running on port 8080');
})

