function showNav() {
    var x = document.getElementById("navbar");

    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function loadPosts() {
    let postList = document.getElementById("post-list");
    let postStatus = document.getElementById("post-status");

    fetch("http://localhost:8080/blog/api/latest_posts")
        .then(response => {
            if (!response.ok) {
                postStatus.textContent = `HTTP Error: ${response.statusText}`;
            }

            return response.json()
        })
        .then(data => {
            data.forEach(post => {
                postList.innerHTML += `
                <a style="color: black; text-decoration-line: none" href="${post.path}">
                <div class="post">
                    <img src="${post.image_path}" alt="Image" style="width: 100%; object-fit: cover;">
                    <div class="info">
                        <h4><b>${post.title}</b></h4>
                        <p>${post.description}</p>
                        <p>${new Date(post.date).toLocaleDateString()}</p>
                    </div>
                </div>
                </a>`;
            });

            postStatus.style.display = "none";
        })
        .catch(error => {
            postStatus.textContent = `Could not get posts: ${error.message}`;
        })
}

function loadAllPosts() {
    let postList = document.getElementById("post-list");
    let postStatus = document.getElementById("post-status");

    fetch("http://localhost:8080/blog/api/posts")
        .then(response => {
            if (!response.ok) {
                postStatus.textContent = `HTTP Error: ${response.statusText}`;
            }

            return response.json()
        })
        .then(data => {
            data.forEach(post => {
                postList.innerHTML += `
                <a style="color: black; text-decoration-line: none" href="${post.path}">
                <div class="post">
                    <img src="${post.image_path}" alt="Image" style="width: 100%; object-fit: cover;">
                    <div class="info">
                        <h4><b>${post.title}</b></h4>
                        <p>${post.description}</p>
                        <p>${new Date(post.date).toLocaleDateString()}</p>
                    </div>
                </div>
                </a>`;
            });

            postStatus.style.display = "none";
        })
        .catch(error => {
            postStatus.textContent = `Could not get posts: ${error.message}`;
        })
}