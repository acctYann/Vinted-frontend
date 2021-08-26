// PRODUCTSAMMARY
import "../containers/Payment/index.css";
import React from "react";

const ProductSammary = ({ price, protectionFees, shippingFees, total }) => {
  return (
    <div className="Payment--card summary">
      <div className="title">Résumé de la commande</div>
      <div className="content">
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
      <div className="divider" />
      <div className="content">
        <ul>
          <li className="bold">
            Total <span>{total} €</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSammary;
