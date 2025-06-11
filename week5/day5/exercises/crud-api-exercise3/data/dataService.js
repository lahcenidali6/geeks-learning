import axios from "axios";

async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("somthings went when fetching the data!");
    else {
      const data = await res.json();

      return data;
    }
  } catch (err) {
    console.log(`Error fetching posts: ${err}`);
  }
}
export default fetchPosts
