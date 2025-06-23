import  { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      title: '',
      body: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userId, title, body } = this.state;

    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId,
        title,
        body,
      })
      .then((res) => {
        console.log('Axios POST result:', res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0">Post with Axios</h5>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">User ID</label>
              <input
                type="text"
                placeholder="Enter User ID"
                name="userId"
                value={userId}
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                placeholder="Enter Title"
                name="title"
                value={title}
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Body</label>
              <input
                type="text"
                placeholder="Enter Body"
                name="body"
                value={body}
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostForm;
