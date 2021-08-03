import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="Offer--body">
      <div className="Offer--container">
        <div className="Offer--content-img">
          <img
            className="Offer--img"
            src={data.product_image.secure_url}
            alt={data.product_name}
          />
        </div>
        <div className="Offer--container-product">
          <div>
            <div className="Offer--price">{data.product_price} €</div>
            <ul>
              {data.product_details.map((elem, index) => {
                const keys = Object.keys(elem);
                return (
                  <li className="Offer--content-product">
                    <span className="Offer--keys">{keys[0]}</span>
                    <span className="Offer--elem">{elem[keys[0]]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="divider"></div>
          <div className="Offer--product">
            <span className="Offer--product-name">{data.product_name}</span>
            <span className="Offer--product-description">
              {data.product_description}
            </span>
            <span className="Offer--product-username">
              {data.owner.account.username}
            </span>
          </div>
          <button className="Offer--button">Acheter</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
