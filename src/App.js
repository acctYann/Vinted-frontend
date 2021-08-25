import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Offer from "./containers/Offer/index.js";
import Home from "./containers/Home/index.js";
import Header from "./components/Header/index.js";
import Login from "./containers/Login/index.js";
import Signup from "./containers/Signup/index.js";
import Publish from "./containers/Publish/index.js";
import Payment from "./containers/Payment/index.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTimes,
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faTimes, faPlus, faCheck);

const App = () => {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  // - créer un cookie contenant le token du user
  // - modifier l'état userToken pour permettre le changement d'affichage dans Header
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, {
        //"userToken = nom", token= value
        expires: 3,
      }); // authentifier user quand on en a besoin
      setUserToken(token); // changer un state, donc provoquer un rafraichissement et donc modifier l'affichage dans Header
    } else {
      Cookies.remove("userToken"); // suppression du Cookie 'userToken'
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish userToken={userToken} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
