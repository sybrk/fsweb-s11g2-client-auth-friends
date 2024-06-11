import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/friendslist">Friends List</Link>
        <Link to="/addfriend">Add Friend</Link>
        <Link to="/logout">Logout</Link>
     
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/friendslist">
          <FriendsList />
        </Route>
        <Route path="/addfriend">
          <AddFriend />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
