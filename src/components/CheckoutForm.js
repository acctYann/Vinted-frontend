// import "../containers/Payment/index.css";
// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";

// const CheckoutForm = ({}) => {
//   const [completed, setCompleted] = useState(false);

//   const stripe = useStripe();
//   const elements = useElements();

//   const price = data.product_price;
//   const protectionFees = (price / 10).toFixed(2);
//   const shippingFees = (protectionFees * 2).toFixed(2);
//   const total = Number(price) + Number(protectionFees) + Number(shippingFees);

//   console.log(total);
//   const handleSubmit = async (event) => {
//     console.log(hello);
//     event.preventDefault();
//     // On récupère ici les données bancaires que l'utilisateur rentre
//     const cardElement = elements.getElement(CardElement);

//     // Demande de création d'un token via l'API Stripe
//     // On envoie les données bancaires dans la requête
//     const stripeResponse = await stripe.createToken(cardElement, {
//       name: "L'id de l'acheteur",
//     });
//     console.log(stripeResponse);
//     console.log(stripeResponse.token.id);

//     const response = await axios.post(
//       "https://lereacteur-vinted-api.herokuapp.com/payment"
//     );
//     amount;
//   };

//   return <div>hi</div>;
// };

// export default CheckoutForm;
