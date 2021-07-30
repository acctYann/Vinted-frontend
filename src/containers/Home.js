import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <div className="Home--body">
      {data.offers.map((offer, index) => {
        return (
          <div className="Home--container-product">
            <div className="Home--container">
              <Link
                to={`/offer/${offer._id}`}
                style={{ textDecoration: "none" }}
              >
                <div key={offer._id}>
                  <img
                    className="Home--img"
                    style={{ height: 326.641 }}
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                  />
                  <div className="Home--content-product">
                    <div className="Home--price">{offer.product_price} €</div>
                    <div className="Home--size">
                      {offer.product_details[1].TAILLE}
                    </div>
                    <div className="Home-brand">
                      {offer.product_details[0].MARQUE}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
