import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortPrice, setSortPrice] = useState(false);
  const [fetchRangeValues, setFetchRangeValues] = useState([0, 10000]);
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(1);
  const [limit, setLimit] = useState(5);

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api--vinted.herokuapp.com/offers?priceMin=${
          fetchRangeValues[0]
        }&priceMax=${fetchRangeValues[1]}&sort=${
          sortPrice ? "price-desc" : "price-asc"
        }&title=${search}&skip=${skip}&limit=${limit}`
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [fetchRangeValues, sortPrice, search, skip, limit]);

  return (
    <Router>
      <Header
        userToken={userToken}
        setUser={setUser}
        setSearch={setSearch}
        setFetchRangeValues={setFetchRangeValues}
        fetchRangeValues={fetchRangeValues}
        setSortPrice={setSortPrice}
        sortPrice={sortPrice}
        skip={skip}
        setSkip={setSkip}
        limit={limit}
        setLimit={setLimit}
        data={data}
      />
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
          <Home data={data} isLoading={isLoading} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
