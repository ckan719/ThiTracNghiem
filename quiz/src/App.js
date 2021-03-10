import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.js';
import Login from './pages/Login.js'
function App() {
  return (
    <Router>
      <Route path = '/login' exact>
            <Login />
        </Route>
        <Route path = '/' exact>
            <Dashboard />
        </Route>
    </Router>
  );
}

export default App;
