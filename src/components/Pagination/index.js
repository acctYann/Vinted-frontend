// PAGINATION
import "../Pagination/index.css";
import React from "react";

const Pagination = ({ skip, setSkip, limit, setLimit, data }) => {
  const tolalPages = Math.ceil(data.count / limit); // count affiche la quantité totale d'offres

  return (
    <div className="Pagination--page-num">
      {skip > 1 ? (
        <button
          className="Pagination--page-num-arrow"
          onClick={() => {
            setSkip(skip - 1);
          }}
        >
          {"<"}
        </button>
      ) : (
        <div className="Pagination--page-num-arrow hidden"></div>
      )}
      <div>
        Page {skip} sur {tolalPages}
      </div>
      {skip < tolalPages ? (
        <button
          className="Pagination--page-num-arrow"
          onClick={() => {
            setSkip(skip + 1);
          }}
        >
          {">"}
        </button>
      ) : (
        <div className="Pagination--page-num-arrow hidden"></div>
      )}
    </div>
  );
};

export default Pagination;
