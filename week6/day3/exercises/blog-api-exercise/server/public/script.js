const form = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');
const messageDiv = document.getElementById('message');

// Show message
function showMessage(text, type = 'success') {
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
  messageDiv.style.display = 'block';
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 3000);
}

// Fetch and render posts
async function loadPosts() {
  postsContainer.innerHTML = '';
  const res = await fetch('/posts');
  const posts = await res.json();
  posts.forEach(renderPost);
}

function renderPost(post) {
  const div = document.createElement('div');
  div.className = 'post';
  div.dataset.id = post.id;
  div.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <div class="actions">
      <button class="edit">✏️ Edit</button>
      <button class="delete delete">🗑️ Delete</button>
    </div>
  `;
  postsContainer.appendChild(div);
}

// Handle form submit
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  if (!title || !content) return showMessage("Fields cannot be empty", "error");

  try {
    const res = await fetch('/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });

    if (!res.ok) throw new Error("Post failed");
    const post = await res.json();
    renderPost(post);
    form.reset();
    showMessage("✅ Post added successfully");
  } catch (err) {
    showMessage("❌ Error adding post", "error");
  }
});

// Handle edit and delete
postsContainer.addEventListener('click', async (e) => {
  const postDiv = e.target.closest('.post');
  const id = postDiv.dataset.id;

  if (e.target.classList.contains('delete')) {
    try {
      const res = await fetch(`/posts/${id}`, { method: 'DELETE' });
      if (res.ok) {
        postDiv.remove();
        showMessage("🗑️ Post deleted");
      } else {
        showMessage("❌ Error deleting post", "error");
      }
    } catch (err) {
      showMessage("❌ Server error", "error");
    }
  }

  if (e.target.classList.contains('edit')) {
    const title = postDiv.querySelector('h2').textContent;
    const content = postDiv.querySelector('p').textContent;

    const titleInput = document.createElement('input');
    titleInput.value = title;

    const contentInput = document.createElement('textarea');
    contentInput.value = content;

    const saveBtn = document.createElement('button');
    saveBtn.textContent = '💾 Save';
    saveBtn.className = 'save';

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = '❌ Cancel';

    const actionsDiv = postDiv.querySelector('.actions');
    postDiv.innerHTML = '';
    postDiv.appendChild(titleInput);
    postDiv.appendChild(contentInput);
    postDiv.appendChild(actionsDiv);
    actionsDiv.innerHTML = '';
    actionsDiv.appendChild(saveBtn);
    actionsDiv.appendChild(cancelBtn);

    saveBtn.onclick = async () => {
      try {
        const res = await fetch(`/posts/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: titleInput.value,
            content: contentInput.value
          })
        });
        if (!res.ok) throw new Error();
        const updated = await res.json();
        postDiv.innerHTML = '';
        renderPost(updated);
        showMessage("✏️ Post updated");
      } catch {
        showMessage("❌ Failed to update", "error");
      }
    };

    cancelBtn.onclick = () => {
      postDiv.innerHTML = '';
      renderPost({ id, title, content });
    };
  }
});

// Load posts on page load
loadPosts();
