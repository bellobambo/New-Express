import express from 'express'
const router = express.Router();
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js'




//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post two' },
    { id: 3, title: 'Post three' },
];

//GET ALL POST

router.get('/',  getPosts)


router.get('/:id', getPost );


router.post('/',  createPost);

//update post
router.put('/:id', updatePost )

router.delete('/:id', deletePost)

export default router;