// SIGNUP
import "../Signup/index.css"
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );

      if (response.data.token) {
        console.log(response.data.token);
        setUser(response.data.token);
        history.push("/");
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
              placeholder="Nom"
            />
            <input
              className="Signup--input"
              onChange={(event) => setEmail(event.target.value)}
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
          <div>
            <p style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</p>
            <input
              className="Signup--signup"
              type="submit"
              value="S'inscrire"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
