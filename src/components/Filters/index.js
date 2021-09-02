// FILTERS
import "../Filters/index.css";
import React from "react";

import PriceRange from "../PriceRange/index.js";
import Pagination from "../Pagination/index.js";

const Filters = ({
  setFetchRangeValues,
  sortPrice,
  setSortPrice,
  skip,
  setSkip,
  limit,
  setLimit,
  data,
}) => {
  return (
    <>
      <div className="Filters">
        <div>
          <span className="Filters--title">Trier par prix :</span>
          <span className="checkbox">
            <input type="checkbox" readOnly checked={sortPrice} name="price" />
            <div
              className="wrapper"
              onClick={() => {
                setSortPrice(!sortPrice);
              }}
            >
              <div className="knob">
                <span>{sortPrice ? "⇣" : "⇡"}</span>
              </div>
            </div>
          </span>
        </div>
        <span className="Filters--title">Prix entre : </span>
        <PriceRange setFetchRangeValues={setFetchRangeValues} />
        <Pagination
          skip={skip}
          setSkip={setSkip}
          limit={limit}
          setLimit={setLimit}
          data={data}
        />
      </div>
    </>
  );
};

export default Filters;
