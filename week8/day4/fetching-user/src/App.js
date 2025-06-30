import 'bootstrap/dist/css/bootstrap.min.css';
import UserData from './components/UserData';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-4">Redux Thunk User Fetch Example</h1>
      <UserData />
    </div>
  );
}

export default App;
