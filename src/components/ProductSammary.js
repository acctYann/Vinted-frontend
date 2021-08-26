import "../containers/Payment/index.css";
import React from "react";

const ProductSammary = ({ price, protectionFees, shippingFees, total }) => {
  return (
    <div>
      <div>Résumé de la commande</div>
      <div>
        <ul>
          <li>
            Commande <span>{price} €</span>
          </li>
          <li>
            Frais protection acheteurs <span>{protectionFees} €</span>
          </li>
          <li>
            Frais de port <span>{shippingFees} €</span>
          </li>
        </ul>
      </div>
      <div></div>
      <div>
        <ul>
          <li>
            Total <span>{total} €</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSammary;
