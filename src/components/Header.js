import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ userToken, setUser }) => {
  return userToken ? (
    <button
      className="Header--disconnect"
      onClick={() => setUser(null)}
      style={{ color: "#09b1ba", textDecoration: "none" }}
    >
      Se déconnecter
    </button>
  ) : (
    <div className="Header">
      <div className="Header--main">
        <div className="Header--container">
          <div className="Header--content">
            <div className="Header--search">
              <img
                className="Header-logo"
                src={logo}
                alt="logo vinted"
                style={{ width: 75, height: 30 }}
              />
              <FontAwesomeIcon className="Header--icon" icon="search" />
              <input
                type="text"
                className="search-input"
                placeholder="Recherche des articles"
                style={{ outline: "none" }}
              />
            </div>
          </div>
          <div className="Header--actions">
            <div className="Header--login-signup">
              <Link
                className="Header-signup"
                to="/signup"
                style={{ color: "#09b1ba", textDecoration: "none" }}
              >
                S'inscrire |
              </Link>
              <Link
                className="Header--login"
                to="/login"
                style={{ color: "#09b1ba", textDecoration: "none" }}
              >
                Se connecter
              </Link>
            </div>
            <div className="Header--sell">
              <button className="Header--sell-button">Vendre maintenant</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
