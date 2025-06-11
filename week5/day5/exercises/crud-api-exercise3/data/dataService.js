import axios from "axios";

async function fetchPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  } catch (err) {
    console.log(`Error fetching posts: ${err.message}`);
  }
}

export default fetchPosts;