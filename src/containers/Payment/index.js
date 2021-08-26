// PAYMENT
import "../Payment/index.css";
import "../../components/CheckoutForm";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../../components/CheckoutForm";
import ProductSammary from "../../components/ProductSammary";

const stripePromise = loadStripe(
  "pk_test_51JKRkjCWFmq7jOIrl1npKt3sNRXn3zzJjvGzUnQ6UyzQ6UmCQIvnY11oMFQpkCQGYWKGbgyc9BvyW5jLvIvhqANB00AwLM4kPr"
);

const Payment = () => {
  const location = useLocation();
  // console.log(location);
  const { title, total, protectionFees, shippingFees, price } = location.state;
  return (
    <div>
      <div>
        <ProductSammary
          price={price}
          protectionFees={protectionFees}
          shippingFees={shippingFees}
          total={total}
        />
        <div>
          <div>
            Il ne vous reste plus qu'une étape pour vous offrir
            <span>{title}</span>. Vous allez payer <span>{total}</span> (frais
            de protection et frais de port inclus).
            <div></div>
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
