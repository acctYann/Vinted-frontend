// LOGIN
import "../Login/index.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://api--vinted.herokuapp.com/user/login",
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
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Mauvais email et/ou mot de passe");
        console.log(error.message);
      }
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
          <span className="Login--login-error-message">{errorMessage}</span>
          <div className="Login--centent-login">
            <input
              className="Login--login"
              type="submit"
              value="Se connecter"
            />
            <Link
              className="link"
              to="/signup"
              style={{ textDecoration: "none" }}
            >
              Pas encore de compte ? Inscris-toi !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
