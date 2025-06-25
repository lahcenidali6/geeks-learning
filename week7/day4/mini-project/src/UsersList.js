import  { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loaded: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ users: data, loaded: true }))
      .catch(() => this.setState({ loaded: true }));
  }

  render() {
    const { users, loaded } = this.state;

    return (
      <div className="container mt-4">
        <h2 className="text-success mb-3">List of Users</h2>
        {loaded ? (
          <ul className="list-group">
            {users.map(user => (
              <li key={user.id} className="list-group-item">
                <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-muted">Loading...</div>
        )}
      </div>
    );
  }
}

export default UsersList;
