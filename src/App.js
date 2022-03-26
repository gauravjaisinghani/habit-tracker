import './App.css';
import Dashboard from './components/Dashboard.js';
import Login from './components/Login.js';

function Landing() {
  let isLoggedin = false;
  if (isLoggedin) {
    return <Dashboard />
  }
  return <Login />
}

function App() {
  return (
    <div className='appcontainer'>
      <Landing />
    </div>
  );
}

export default App;
