// LOGIN
import "../Login/index.css"
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="Login--body">
      <div className="Login--main">
        <form className="Login--container" onSubmit={handleSubmit}>
          <div className="Login--title">Connectez-vous !</div>
          <div className="Login--content">
            <input
              className="Login--input"
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              placeholder="Email"
            />

            <input
              className="Login--input"
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Mot de passe"
            />
          </div>
          <div>
            <input
              className="Login--login"
              type="submit"
              value="Se connecter"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
