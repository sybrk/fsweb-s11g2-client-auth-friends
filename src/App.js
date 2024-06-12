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
import { useContext, useEffect } from "react";
import { LoginContext } from "./contexts/LoginProvider";

function App() {

  const { login, setLogin, storage } = useContext(LoginContext);

  useEffect(() => {

    if (storage?.token) {
      setLogin(true)
    }
  }, [])

  return (

    <div className="App">
      <nav className="bg-white">
        <div className="flex item-center place-content-between content-center px-8 py-3 border-solid border-b-black border-b-4">
          <h1 className="text-3xl font-extrabold my-auto">FRIENDS DATABASE</h1>
          <div className="flex gap-3 bg-black text-white text-3xl px-5 py-8">
            <Link to="/">HOME.</Link>
            {login ? <><Link to="/friendslist">FRIENDS LIST.</Link>
              <Link to="/addfriend">ADD FRIEND.</Link>
              <Link to="/logout">LOGOUT.</Link></>
              :
              <Link to="/login">LOGIN.</Link>
            }
          </div>
        </div>



      </nav>



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
