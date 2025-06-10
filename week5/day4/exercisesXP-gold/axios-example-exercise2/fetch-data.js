import axios from "axios";
export default async function fetchPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("somthing went wrong when fetch the data! :");
    else {
        var posts = await res.json();
    }
  } catch (err) {
    console.log(`error : ${err}`)
  }

  posts.forEach((post) => {
    console.log(post.title);
  });
}
