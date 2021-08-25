// SIGNUP
import "../Signup/index.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://api--vinted.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );

      if (response.data.token) {
        // console.log(response.data.token);
        setUser(response.data.token);
        history.push("/");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response.status === 409) {
        setErrorMessage("Cet email est déjà utilisé.");
      }
    }
  };

  return (
    <div className="Signup--body">
      <div className="Signup--main">
        <form className="Signup--container" onSubmit={handleSubmit}>
          <div className="Signup--title">
            Rejoins le mouvement de la seconde main et vends sans frais !
          </div>
          <div className="Signup--content">
            <input
              className="Signup--input"
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              placeholder="Nom d'utilisateur"
            />
            <input
              className="Signup--input"
              onChange={(event) => {
                setEmail(event.target.value);
                setErrorMessage("");
              }}
              type="email"
              placeholder="Email"
            />
            <input
              className="Signup--input"
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Mot de passe"
            />
          </div>
          <div className="Signup--checkbox-container">
            <div>
              <input className="checkbox" type="checkbox" />
              <span className="span">S'inscrire à notre newsletter</span>
            </div>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <span className="Signup--login-error-message">{errorMessage}</span>
          <div className="Signup--content-signup">
            <input
              className="Signup--signup"
              type="submit"
              value="S'inscrire"
            />
            <Link
              className="link"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              Tu as déjà un compte ? Connecte-toi !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
