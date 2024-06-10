import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/friendslist">Friends List</Link>
     
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/friendslist">
          <FriendsList />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
