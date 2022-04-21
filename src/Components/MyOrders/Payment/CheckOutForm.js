import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import './style.css';

const CheckOutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError('');
      console.log('[PaymentMethod]', paymentMethod);
    }
  };
  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="buttonPayment" type="submit" disabled={!stripe}>
          Pay ${order?.price}
        </button>
      </form>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default CheckOutForm;
