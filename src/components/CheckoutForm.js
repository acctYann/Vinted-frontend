// CHECKOUTFORM
import "../containers/Payment/index.css";
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ title, total }) => {
  const [completed, setCompleted] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // On récupère ici les données bancaires que l'utilisateur rentre
    const cardElement = elements.getElement(CardElement);

    // Demande de création d'un token via l'API Stripe
    // On envoie les données bancaires dans la requête
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "L'id de l'acheteur",
    });
    console.log(stripeResponse);

    // Une fois le token reçu depuis l'API Stripe
    // Requête vers notre serveur
    // On envoie le token reçu depuis l'API Stripe
    const response = await axios.post(
      "https://api--vinted.herokuapp.com/payment",
      {
        price: total,
        title: title,
        token: stripeResponse.token.id,
      }
    );

    if (response.data) {
      setCompleted(true);
    } else {
      alert("Une erreur est survenue, veuillez réssayer.");
    }
    console.log(response.data);
  };

  return completed ? (
    <p>Merci pour votre achat.</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Achete
      </button>
    </form>
  );
};

export default CheckoutForm;
