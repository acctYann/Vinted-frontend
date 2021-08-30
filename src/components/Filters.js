import React from "react";

import PriceRange from "./PriceRange";
import Pagination from "../components/Pagination/index.js";

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
      <div>
        <div
          style={{
            width: 1280,
            marginTop: 25,
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            margin: "auto",
            padding: 20,
          }}
        >
          <span style={{ marginRight: 10, fontSize: 14 }}>
            Trier par prix :
          </span>
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
          <span style={{ marginRight: 10, fontSize: 14 }}>Prix entre : </span>
          <PriceRange setFetchRangeValues={setFetchRangeValues} />
          <Pagination
            skip={skip}
            setSkip={setSkip}
            limit={limit}
            setLimit={setLimit}
            data={data}
          />
        </div>
      </div>
    </>
  );
};

export default Filters;
