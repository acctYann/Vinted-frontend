// HOME
import "../Home/index.css";
import { Link } from "react-router-dom";

import Hero from "../../components/Hero";
import Filters from "../../components/Filters.js";

const Home = ({
  data,
  isLoading,
  setFetchRangeValues,
  fetchRangeValues,
  setSortPrice,
  sortPrice,
  skip,
  setSkip,
  limit,
  setLimit,
}) => {
  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <div className="Home--body">
      <Hero />
      <Filters
        setFetchRangeValues={setFetchRangeValues}
        fetchRangeValues={fetchRangeValues}
        setSortPrice={setSortPrice}
        sortPrice={sortPrice}
        skip={skip}
        setSkip={setSkip}
        limit={limit}
        setLimit={setLimit}
        data={data}
      />
      <div className="Home--container">
        {data.offers &&
          data.offers.map((offer, index) => {
            return (
              <div key={offer._id} className="Home--container-product">
                <Link
                  to={`/offer/${offer._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="Home--title"
                    style={{
                      textDecoration: "none",
                      color: "rgb(153, 153, 153)",
                    }}
                  >
                    {offer.owner.account.username}
                  </div>
                  <div>
                    <img
                      className="Home--img"
                      src={offer.product_image.secure_url}
                      alt={offer.product_name}
                    />
                    <div className="Home--content-product">
                      <div className="Home--price">{offer.product_price} €</div>
                      <div className="Home--product">
                        {offer.product_details[1].TAILLE}
                      </div>
                      <div className="Home--product">{offer.product_name}</div>
                      <div className="Home--product">
                        {offer.product_details[0].MARQUE}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
