// HERO
import "../Hero/index.css";
import { useHistory } from "react-router-dom";
import tear from "../../assets/img/tear.svg";

const Hero = () => {
  const history = useHistory();
  return (
    <>
      <div className="Hero--container">
        <img className="Hero--form" src={tear} alt="form" />
        <div>
          <div className="Hero--content">
            Prêts à faire du tri dans vos placards ?
            <button
              className="Hero--button"
              onClick={() => {
                history.push("/publish");
              }}
            >
              Commencer à vendre
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
