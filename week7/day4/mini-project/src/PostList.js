import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => this.setState({ errorMsg: 'Error loading posts' }));
  }

  render() {
    const { posts, errorMsg } = this.state;

    return (
      <div className="container mt-4">
        <h2 className="text-primary mb-3">List of Posts</h2>
        {errorMsg && <p className="text-danger">{errorMsg}</p>}
        <ul className="list-group">
          {posts.length > 0 ? (
            posts.map(post => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))
          ) : (
            <div className="text-muted">Loading...</div>
          )}
        </ul>
      </div>
    );
  }
}

export default PostList;
