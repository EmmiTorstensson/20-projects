
// End points

// https://jsonplaceholder.typicode.com/posts?_limit=5 ---- limit post to 5

// https://jsonplaceholder.typicode.com/posts?_limit=5&_page=2 ---- limit post to 5 but look at secong page (id: 6-10)

const postContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1;

async function getPost() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    const data = await res.json();

    return data;
}

async function showPostsInDOM() {
    const posts = await getPost();

    posts.forEach(post => {
        const postEL = document.createElement('div');
        postEL.classList.add('post');
        postEL.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;
        postContainer.appendChild(postEL)
    });
}

showPostsInDOM()