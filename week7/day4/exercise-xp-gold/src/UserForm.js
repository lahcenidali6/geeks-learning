import{ Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user, email } = this.state;

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ user, email }),
    });

    const data = await response.json();
    console.log('Fetch POST result:', data);
  };

  render() {
    const { user, email } = this.state;

    return (
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Post with Fetch</h5>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                name="user"
                value={user}
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
