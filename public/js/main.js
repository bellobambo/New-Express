const output = document.querySelector('#output');
const button = document.querySelector('#get-post-btn');
const form = document.querySelector('#add-post-form');

// Get & Show Posts
async function showPosts() {
    try {
        const res = await fetch('http://localhost:8000/api/posts');
        if (!res.ok) {
            throw new Error('Failed To Fetch Posts');
        }

        const posts = await res.json();
        output.innerHTML = '';

        posts.forEach((post) => {
            const postElement = document.createElement('div');
            postElement.textContent = post.title;
            output.appendChild(postElement);
        });
    } catch (error) {
        console.log('Error fetching:', error);
    }
}


//submit new post
async function addpost(e){
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');

    try {
        const res = await fetch('http://localhost:8000/api/posts', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application'
            },
            body : JSON.stringify({title})
        });

        if(!res.ok){
            throw new Error('Failed To add post')
        }

        const newPost = await res.json();
        const postElement = document.createElement('div');
        postElement.textContent = newPost.title;
        output.appendChild(postElement);
        showPosts();
    } catch (error) {
        console.error('Error DDING ITEM')
    }
}


button.addEventListener('click', showPosts);

form.addEventListener('submit', addpost);


