//@desc GET all post
//@route GET /api/posts

let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post two' },
    { id: 3, title: 'Post three' },
];



export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);


}


//@desc GET single post
//@route GET /api/posts

export const getPost =  (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with id ${id} was not found`)
        error.status = 404;
         return next(error);
    }
    res.status(200).json(post)

}


//@desc CREATE NEW POST single post
//@route CREATE NEW POST /api/posts


export const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if (!newPost.title) {
        const error = new Error(`Please Include a title`)
        error.status = 400;
         return next(error);
    }
    posts.push(newPost);
    res.status(201).json(newPost);
}

//@desc Update single post
//@route Update /api/post

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);

    if (!post) {
       const error = new Error(`A post with id ${id} was not found`)
       error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
}


//@desc Delete single post
//@route Delete /api/post

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with id ${id} was not found`)
        error.status = 404;
         return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}