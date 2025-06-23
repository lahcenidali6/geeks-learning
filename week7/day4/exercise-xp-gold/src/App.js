import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './UserForm';
import PostForm from './PostForm';

function App() {
  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <UserForm />
      <PostForm />
    </div>
  );
}

export default App;
