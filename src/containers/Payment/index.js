// PAYMENT
// import "../Payment/index.css";
// import "../../components/CheckoutForm";
// import { useLocation } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51JKRkjCWFmq7jOIrl1npKt3sNRXn3zzJjvGzUnQ6UyzQ6UmCQIvnY11oMFQpkCQGYWKGbgyc9BvyW5jLvIvhqANB00AwLM4kPr"
// );

// const Payment = () => {
//   const location = useLocation();
//   // console.log(location);
//   const { data } = localtion.state;
//   return (
//     <div>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm data={data} />
//       </Elements>
//     </div>
//   );
// };

// export default Payment;
