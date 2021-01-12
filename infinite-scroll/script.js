
// End points

// https://jsonplaceholder.typicode.com/posts?_limit=5 ---- limit post to 5

// https://jsonplaceholder.typicode.com/posts?_limit=5&_page=2 ---- limit post to 5 but look at secong page (id: 6-10)

const postContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
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

// Filter posts by input
function filterPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();
        
        if(title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    })
} 

// Show loading & fetch more posts 
function showLoading() {
    loading.classList.add('show');

    setTimeout(() => {
        loading.classList.remove('show')

        setTimeout(() => {
            page++;
            showPostsInDOM();
        }, 300)
    }, 1000);
}

showPostsInDOM()

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement; 

    if(scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
})

filter.addEventListener('input', filterPosts)