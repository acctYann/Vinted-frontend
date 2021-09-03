// OFFER
import "../Offer/index.css";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

const Offer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  const price = data.product_price;
  const protectionFees = 0.7;
  const shippingFees = (price * 0.05).toFixed(2);
  const total = Number(price) + Number(protectionFees) + Number(shippingFees);
  // console.log(total);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api--vinted.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <Loader
      className="loader"
      type="Puff"
      color="#09b1ba"
      height={80}
      width={80}
      timeout={3000}
    />
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
                // console.log(keys);
                // console.log(keys[0]); // Le titre (marque)
                // console.log(elem[keys[0]]); // Le nom du titre (marque)
                return (
                  <li key={index} className="Offer--content-product">
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
          <button
            className="Offer--button"
            onClick={() => {
              history.push({
                pathname: "/payment",
                state: {
                  title: data.product_name,
                  price: data.product_price,
                  protectionFees: protectionFees,
                  shippingFees: shippingFees,
                  total: total,
                },
              });
              // console.log(data.product_name);
              // console.log(total);
            }}
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
