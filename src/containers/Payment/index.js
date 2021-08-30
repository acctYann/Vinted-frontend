// PAYMENT
import "../Payment/index.css";
import "../../components/CheckoutForm";
// import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../components/CheckoutForm";
import ProductSammary from "../../components/ProductSammary";

const stripePromise = loadStripe(
  "pk_test_51JKRkjCWFmq7jOIrl1npKt3sNRXn3zzJjvGzUnQ6UyzQ6UmCQIvnY11oMFQpkCQGYWKGbgyc9BvyW5jLvIvhqANB00AwLM4kPr"
);

const Payment = ({ title, price, total, protectionFees, shippingFees }) => {
  // const location = useLocation();
  // // console.log(location);
  // const { title, price, total, protectionFees, shippingFees }  = location.state;
  return (
    <div className="Payment--body">
      <div className="Payment--container">
        <ProductSammary
          price={price}
          protectionFees={protectionFees}
          shippingFees={shippingFees}
          total={total}
        />
        <div className="Payment--card">
          <div className="content">
            Il ne vous reste plus qu'une étape pour vous offrir
            <span className="bold"> {title}</span>. Vous allez payer
            <span className="bold"> {total}</span> (frais de protection et frais
            de port inclus).
            <div className="divider" />
            <Elements stripe={stripePromise}>
              <CheckoutForm title={title} total={total} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
