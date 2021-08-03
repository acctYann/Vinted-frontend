import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="Hero--container">
      <div className="Hero--content">
        <div className="Hero--main">
          <div className="Hero--title">
            Prêts à faire du tri dans vos placards ?
          </div>
          <Link to="/publish">
            <button className="Hero--button">Commencer à vendre</button>
          </Link>
        </div>
      </div>
      <div className="Hero--video">
        <iframe
          width="100%"
          height="403"
          src="https://www.youtube.com/embed/yn90fSn7bFw?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=yn90fSn7bFw&mute=1"
          title="YouTube video player"
          allow="autoplay ; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
