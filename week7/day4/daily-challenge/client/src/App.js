import  { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    message: '',
    response: '',
  };

  async componentDidMount() {
    const res = await fetch('http://localhost:5000/api/hello');
    const data = await res.json();
    this.setState({ message: data.message });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.elements.userInput.value;

    const res = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    this.setState({ response: data.reply });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center text-primary">{this.state.message}</h1>

        <form className="my-4" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <input
              name="userInput"
              className="form-control"
              placeholder="Type something..."
              required
            />
          </div>
          <button className="btn btn-success" type="submit">
            Send to Server
          </button>
        </form>

        {this.state.response && (
          <div className="alert alert-info mt-4">{this.state.response}</div>
        )}
      </div>
    );
  }
}

export default App;
