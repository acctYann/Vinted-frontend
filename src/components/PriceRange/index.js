// PRICE RANGE
import "../PriceRange/index.css";
import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const MIN = 0; // Prix minimum du composant PriceRange
const MAX = 300; // Prix maximum du composant PriceRange

const PriceRange = ({ setFetchRangeValues }) => {
  const [rangeValues, setRangeValues] = useState([10, 100]);

  return (
    <Range
      step={5} // Nombre d'écart entre les prix
      min={MIN}
      max={MAX}
      values={rangeValues}
      onChange={(values) => setRangeValues(values)}
      onFinalChange={(values) => {
        setFetchRangeValues(values);
      }}
      renderTrack={({ props, children }) => (
        // CSS de la barre
        <div
          className="PriceRange--renderTrack-bar"
          style={{
            ...props.style,
          }}
        >
          <div
            className="PriceRange--renderTrack-bg"
            ref={props.ref}
            style={{
              background: getTrackBackground({
                values: rangeValues,
                colors: ["#ccc", " #09b1ba", "#ccc"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ index, props, isDragged }) => (
        // CSS des boutons
        <div
          // Cercle
          className="PriceRange--renderThumb-cercle"
          {...props}
          style={{
            ...props.style,
            border: isDragged ? "" : "1px solid white",
          }}
        >
          <div
            // Carte des prix
            className="PriceRange--renderThumb-price"
          >
            {rangeValues[index]}€
          </div>
        </div>
      )}
    />
  );
};

export default PriceRange;
